import React, { useEffect } from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';
import ShowLink from './ShowLink';

import hero1 from '../../assets/images/presto__hero1.jpg';
import hero2 from '../../assets/images/presto__hero2.jpg';

export default (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const CODE_URL = 'https://github.com/austintheriot/presto-web-app';

	return (
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>Presto</h1>
			<h2 className={generalStyles.h2}>
				React Social Media Web App <span>(Currently in Development)</span>
			</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				Designed to reduce the barriers to collaboration by enabling musicians
				and guests to make public posts based on location. Need a singer? Make a
				post. Looking for a fill-in trumpet player for a gig this weekend? Write
				a post. Add some details on your own profile so that others can see what
				musical services you offer. Then, when you've found a musician that
				you'd like to work with, message them privately to connect.
			</p>
			<div className={generalStyles.center}>
				<a href={CODE_URL} target='_blank' rel='noopener noreferrer'>
					<Button>See Code</Button>
				</a>
			</div>
			<a href={CODE_URL} target='_blank' rel='noopener noreferrer'>
				<img
					alt='design previews of Presto'
					src={hero1}
					className={generalStyles.hero}
				/>
			</a>
			<h3 className={generalStyles.h3}>More Info</h3>
			<p className={generalStyles.p}>
				Enabling local musicians to collaborate and be hired more easily.
				Intended for performers, composers, arrangers, conductors, soloists,
				ensembles, bands, and any people from their local community interested
				in hiring them.
			</p>
			<a href={CODE_URL} target='_blank' rel='noopener noreferrer'>
				<img
					alt='design previews of Presto'
					src={hero2}
					className={generalStyles.hero}
				/>
			</a>
			<h3 className={generalStyles.h3}>Tech</h3>
			<p className={generalStyles.p}>
				Presto is a React single-page web app bootstrapped with Create React
				App. It is built to be fast, secure, and intuitive. Uses React Hooks and
				Context API for state management;{' '}
				<a
					href='https://firebase.google.com/products/auth'
					target='_blank'
					rel='noopener noreferrer'
					className={generalStyles.showLink}>
					Firebase Authentication,
				</a>
				<ShowLink href='https://firebase.google.com/products/storage'>
					Cloud Storage,
				</ShowLink>
				<ShowLink href='https://firebase.google.com/products/firestore'>
					Cloud Firestore
				</ShowLink>
				for back end. Presto also makes use of the
				<ShowLink href='https://www.geoapify.com/'>Geoapify API</ShowLink> to
				validate users' location: they can either autofill their location using
				the built-in JavaScript Geolocation API combined with Geoapify, or they
				can manually input their location and select from the options provided
				by the Geoapify autocomplete API. For styling, Presto uses CSS modules
				and is inspired by Google's Material UI to be clean, accessible, and
				modern.
			</p>
			<p className={generalStyles.p}>
				If you're interested in learning more or contributing to this project,
				<ShowLink href={CODE_URL}>check out the GitHub</ShowLink> or{' '}
				<Link to='/contact' className={generalStyles.showLink}>
					get in touch
				</Link>
				.
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#presto'>
					<Button arrowLeft='true'>Portfolio</Button>
				</Link>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
};
