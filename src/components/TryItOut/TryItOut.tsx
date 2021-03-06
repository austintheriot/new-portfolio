import React, {
  ChangeEvent, FocusEvent, FormEvent, useState,
} from 'react';
import { API, Inputs } from 'types';
import styles from './TryItOut.module.css';
import { tryItOut } from '../../config';
import Input from '../Input/Input';
import Modal from '../Message/Message';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';

enum InputTypes {
	EMAIL = 'email',
	NAME = 'name',
	MESSAGE = 'message',
}

const isInputType = (t: unknown): t is InputTypes => typeof t === 'string' && ['email', 'name', 'message'].includes(t);

const TryItOut = () => {
  const [inputs, setInputs] = useState<Inputs<InputTypes>>({
    email: {
      value: '',
      animateUp: false,
      empty: true,
      touched: false,
      disabled: false,
      message: {
        error: false,
        text: '',
      },
    },
    name: {
      value: '',
      animateUp: false,
      empty: true,
      touched: false,
      disabled: false,
      message: {
        error: false,
        text: '',
      },
    },
    message: {
      value: '',
      animateUp: false,
      empty: true,
      touched: false,
      disabled: false,
      message: {
        error: false,
        text: '',
      },
    },
  });
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleFocus = (event: FocusEvent, newestType: InputTypes) => {
    // animation
    setInputs((prevState) => ({
      ...prevState,
      [newestType]: {
        ...prevState[newestType],
        animateUp: true,
        touched: true,
      },
    }));
  };

  const handleBlur = (event: FocusEvent, newestType: InputTypes) => {
    // animation & output error if empty
    const targetEmpty =			!!(inputs[newestType].touched && inputs[newestType].value.length === 0);

    setInputs((prevState) => ({
      ...prevState,
      [newestType]: {
        ...prevState[newestType],
        // animation
        animateUp: !targetEmpty,
        // output error if empty
        message: {
          error:
						newestType === 'email' && targetEmpty
						  ? true
						  : prevState[newestType].message.error,
          text:
						newestType === 'email' && targetEmpty
						  ? 'This field is required'
						  : prevState[newestType].message.text,
        },
      },
    }));
  };

  const validateInputs = (
    newestType: InputTypes | '',
    targetValue: string | null,
    targetEmpty: boolean | null,
    isBeingSubmitted: boolean | null = false,
  ) => {
    // validate input here
    const anyErrorsObject = {} as {
			[key in InputTypes]: string;
		};
    const email = newestType === 'email' ? targetValue : inputs.email.value;

    // prevent unnecessary validation checks
    if (
      isBeingSubmitted
			|| newestType === 'email'
			|| inputs.email.message.error
    ) {
      if (
        !email
				|| !email.match(
				  // eslint-disable-next-line no-control-regex
				  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
				)
      ) {
        anyErrorsObject.email = 'Invalid email';
      }

      if (!email || email.length === 0) {
        anyErrorsObject.email = 'This field is required.';
      }
    }

    // update state for all inputs
    Object.keys(inputs).forEach((inputType) => {
      if (!isInputType(inputType)) return;
      setInputs((prevState) => ({
        ...prevState,
        [inputType]: {
          ...prevState[inputType],

          // update generic values
          value:
						inputType === newestType ? targetValue : prevState[inputType].value,
          empty:
						inputType === newestType ? targetEmpty : prevState[inputType].empty,

          // update errors: If no error, set to empty
          message: {
            error: !!anyErrorsObject[inputType],
            text: anyErrorsObject[inputType]
              ? anyErrorsObject[inputType]
              : null,
          },
        },
      }));
    });
    return anyErrorsObject;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, newestType: InputTypes,
  ) => {
    const targetValue = event.target.value;
    const targetEmpty = targetValue.length === 0;
    if (
      !validateInputs(newestType, targetValue, targetEmpty).email
			&& newestType === 'email'
    ) {
      setModalMessage('');
    }
  };

  const disableElements = (disabled: boolean) => {
    // Set all inputs to disabled or enabled
    Object.keys(inputs).forEach((inputType) => {
      if (!isInputType(inputType)) return;
      setInputs((prevState) => ({
        ...prevState,
        [inputType]: {
          ...prevState[inputType],
          disabled,
        },
      }));
    });
    setbuttonDisabled(disabled);
  };

  const clearInputs = () => {
    Object.keys(inputs).forEach((inputType) => {
      if (!isInputType(inputType)) return;
      setInputs((prevState) => ({
        ...prevState,
        [inputType]: {
          ...prevState[inputType],
          value: '',
          touched: false,
          animateUp: false,
          empty: true,
        },
      }));
    });
  };

  const sendSubmission = async () => {
    console.log(
      'sending form...',
      inputs.email.value,
      inputs.name.value,
      inputs.message.value,
    );

    const response = await fetch(
      API.TRY_IT_OUT,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: inputs.name.value,
          email: inputs.email.value,
          message: inputs.message.value,
          _private: {
            key: tryItOut,
          },
        }),
      },
    );
    return response.json();
  };

  const submit = () => {
    disableElements(true);
    setModalMessage('Sending message...');
    sendSubmission()
      .then((data) => {
        disableElements(false);
        if (data.error) {
          setModalMessage(
            'Sorry, there was an error processing your message. Please try again later.',
          );
        } else {
          console.log(data);
          clearInputs();
          setModalMessage('Your message was successfully sent!');
        }
      })
      .catch((error) => {
        console.error(error);
        setModalMessage(
          'Sorry, there was an error processing your message. Please try again later.',
        );
      });
  };

  const submitHandler = (event: FormEvent) => {
    // prevent default form submission
    event.preventDefault();

    // check for any errors before submitting
    let anyErrorsFound = false;
    const errors = validateInputs('', null, null, true);
    Object.keys(errors).forEach((inputType) => {
      if (!isInputType(inputType)) return;
      if (errors[inputType]) {
        anyErrorsFound = true;
      }
    });

    if (anyErrorsFound) {
      setModalMessage('Please provide an email before submitting');
    } else {
      // assuming the email is valid, send form:
      submit();
    }
  };

  return (
  // display modal message if redirected from another page requiring authentication:
    <section className={styles.tryitout}>
      <h3 className={styles.title}>Try It Out</h3>
      <h4 className={styles.subtitle}>Send an Email to Yourself:</h4>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          customType={InputTypes.EMAIL}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label="Email*"
          inputs={inputs}
        />
        <Input
          type="text"
          customType={InputTypes.NAME}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label="Name (optional)"
          inputs={inputs}
        />
        <Textarea
          customType={InputTypes.MESSAGE}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label="Message (optional)"
          inputs={inputs}
        />
        <div className={styles.modalWrapper}>
          {modalMessage ? <Modal message={modalMessage} color="black" /> : null}
        </div>
        <Button disabled={buttonDisabled} type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default TryItOut;
