import React, { useEffect } from 'react';
import { ArticleTitle } from 'components/ArticleTitle/ArticleTitle';
import { ArticleSubtitle } from 'components/ArticleSubtitle/ArticleSubtitle';
import { ArticleHeading } from 'components/ArticleHeading/ArticleHeading';
import { ArticleParagraph } from 'components/ArticleParagraph/ArticleParagraph';
import { Links, Routes } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import hero1 from '../../assets/images/memorize__hero--1.png';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';
import Decoration from '../../components/Decorations/Decorations1';
import Button from '../../components/Button/Button';
import generalStyles from './PortfolioArticle.module.css';

export default function Memorize() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article>
      <Decoration />
      <ArticleTitle>Memorize</ArticleTitle>
      <ArticleSubtitle>React Progressive Web App</ArticleSubtitle>
      <div className={[generalStyles.center, generalStyles.flex].join(' ')}>
        <ExternalLink to={Links.MEMORIZE_LIVE} underline={false}>
          <Button>See Live</Button>
        </ExternalLink>
        <ExternalLink to={Links.MEMORIZE_CODE} underline={false}>
          <Button>See Code</Button>
        </ExternalLink>
      </div>
      <ArticleHeading>About</ArticleHeading>
      <ArticleParagraph>
        The art of memory has been a fascination of mine for a long time. Over
        the years, I&quot;ve practiced memorizing many different kinds of
        information, but extended memorization of the Bible in particular has
        proven to me to be one of the greatest personal treasures.
      </ArticleParagraph>

      <ArticleParagraph>
        Memorization for the vast majority of people, however, isn&quot;t enjoyable.
        More often than not, it&quot;s a laborious process, filled with frustration
        and failure rather than success. For this reason, many people give up
        when trying to memorize Bible verses or stop after they&quot;ve learned only
        a verse or two. But I don&quot;t think it has to be this way. Most people
        have just never learned
        {' '}
        <em>how</em>
        {' '}
        to learn.
      </ArticleParagraph>

      <ExternalLink
        to={Links.MEMORIZE_LIVE}
        style={{
				  display: 'block',
				  width: '90vw',
				  margin: 'auto',
				  position: 'relative',
				  height: '75vw',
				  backgroundColor: 'lightgray',
        }}
      >
        <img
          alt="photos of the Memorize Scripture website"
          src={hero1}
          className={generalStyles.heroBiggerNoClip}
        />
      </ExternalLink>

      <ArticleParagraph>
        I first stumbled on the idea of condensing a text to memorize it via
        {' '}
        <ExternalLink to={Links.HOW_TO_MEMORIZE_VERBATIM}>
          this article
        </ExternalLink>
        {' '}
        by Mark Shead. After finding the article, I began implementing the
        process in my own Bible memorization, and I have personally found the
        process to be so much more quick and painless ever since then. And
        that&quot;s my end goal for this app: to facilitate the extended memorization
        of God&quot;s Word. This same technique is also used by a few other scripture
        memory softwares (
        <ExternalLink to={Links.MEMVERSE}>memverse.com</ExternalLink>
        {' '}
        for example), but I hope to offer a more mobile-friendly, streamlined
        app here, one that is focused on extended memorization, rather than
        collections of shorter verses.
      </ArticleParagraph>

      <ArticleParagraph>
        Basically, this app works by condensing the text of the English Standard
        Version Bible (ESV) down to only its first letters alone. Users then
        practice speaking the
        {' '}
        <em>original</em>
        {' '}
        text while looking at the
        {' '}
        <em>condensed text</em>
        {' '}
        and/or listening to the spoken ESV Audio. Once
        the full text can be spoken while looking at the condensed version, the
        text is essentially memorized, and all that remains is to solidify any
        weaker parts.
      </ArticleParagraph>

      <ArticleParagraph>
        This process works well for most people because of a psychological
        principle called
        {' '}
        <ExternalLink to={Links.CHUNKING}>
          &quot;chunking&quot;
        </ExternalLink>
        , in which individual pieces of information are grouped together into a
        collected whole. Chunking helps us remember more than we normally would
        be able to if we were trying to remember the same information as
        individual pieces. This is why we tend to group long numbers into 3
        groups of 3 or 4, such as phone numbers: &quot;(012) 345-6789&quot; rather than
        &quot;0123456789.&quot; The principle also applies when memorizing a text:
        reducing a passage down to its first letters allows us to &quot;chunk&quot; a text
        in groups of phrases, sentences, and verses rather than as individual
        words.
      </ArticleParagraph>

      <ArticleParagraph>
        I have included other additional tools in the app, such as a review tool
        and a tool for condensing other, general texts down to their first
        letters for those interested in memorizing texts beside the Bible.
      </ArticleParagraph>

      <ArticleParagraph>
        This app has been created with the permission of the creators of the
        {' '}
        <ExternalLink to={Links.ESV}>
          English Standard Bible (ESV)
        </ExternalLink>
        , from which all Bible quotes are drawn, unless otherwise indicated.
      </ArticleParagraph>
      <ArticleHeading>Tech</ArticleHeading>
      <ArticleParagraph>
        This project uses React, TypeScript, Redux, and the ESV Bible API.
        End-to-end tests with Cypress. Integration and unit tests with React
        Testing Library and Jest.
      </ArticleParagraph>
      <div className={[generalStyles.center, generalStyles.flex].join(' ')}>
        <InternalLink to="/#memorize">
          <Button arrow="left">Portfolio</Button>
        </InternalLink>
        <InternalLink to={Routes.CONTACT} className={generalStyles.Link}>
          <Button arrow="right">Contact Me</Button>
        </InternalLink>
      </div>
    </article>
  );
}
