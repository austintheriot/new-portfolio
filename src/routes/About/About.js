import React from 'react';
import styles from './About.module.css';

import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

import headshot from '../../assets/images/headshot.jpg';

export default function About() {
	window.scrollTo(0, 0);
	const OPEN_SOURCE_JAVASCRIPT_ALGORITHMS =
		'https://github.com/trekhleb/javascript-algorithms';

	const AUSTINS_GITHUB = 'https://github.com/austintheriot';

	return (
		<section className={styles.aboutme}>
			<Decoration />
			<h1>About Me</h1>
			<div className={styles.flexContainer}>
				<img
					src={headshot}
					alt='headshot of Austin Theriot'
					className={styles.headshot}
				/>
				<div className={styles.wrapper}>
					<h2>front end developer</h2>
					<p>
						I am self-taught front end developer based in Austin, TX, with
						experience developing web sites and web apps using JavaScript
						(ES6+), TypeScript, React, Redux, CSS3, Sass/Scss, HTML5, Rest APIs,
						JSON, and Git/GitHub.
					</p>

					<p>
						Check out my open-source contributions to the largest JavaScript
						algorithms &amp; data structures repo on GitHub:{' '}
						<ExternalLink to={OPEN_SOURCE_JAVASCRIPT_ALGORITHMS}>
							{OPEN_SOURCE_JAVASCRIPT_ALGORITHMS}
						</ExternalLink>
						.
					</p>

					<p>
						I believe that objective metrics are one of the best tools a
						developer can use to measure success throughout the development
						process. Because of this, I use automated testing tools like
						Cypress, React Testing Library, and Jest, along with the static
						tests available through TypeScript to ensure my React apps and
						JavaScript code work 100% to specification. I regularly audit my
						websites with Google Lighthouse to ensure top notch performance,
						SEO, best practices, and accessibility. I use Google Analytics to
						know how many people are using my software and how they’re
						interacting with it. Why settle for *hoping* your software works,
						when you can *know* that it does through objective metrics?
					</p>

					<p>
						Before I became a software developer, I was an award-winning
						classical composer. Problem solving and creativity—whether audio,
						visual or text—have always been two of my greatest strengths. When I
						first discovered programming during my masters degree in music at
						the University of Texas at Austin, I instantly fell in love,
						realizing that coding provided a way for me to use my talents in
						tangible ways for other people. Now I design and develop websites
						and applications for clients as a freelance web developer.
					</p>

					<p>
						Check out my GitHub{' '}
						<ExternalLink to={AUSTINS_GITHUB}>({AUSTINS_GITHUB})</ExternalLink>{' '}
						to see some examples of my work. If you're interested in hiring me,
						or just want to say hi, please don't hesitate to drop a line.
					</p>
					<div className={styles.buttonContainer}>
						<Link to='/contact' className={styles.Link}>
							<Button arrow={'true'}>Contact Me</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
