import Image from 'next/image';
import profilePic from '../public/static/headshot.png';
import medium from '../public/static/medium.png';
import styles from '../styles/Home.module.css';
import Navbar from './Navbar';
import Head from 'next/head';
import { faGithubSquare, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Nate Levinson</title>
        <meta name='description' content='My personal website' />
        <link rel='icon' type='image/x-icon' href='/static/hand.png' />
      </Head>
      <Navbar></Navbar>
      <main className={`${styles.Home_container}`}>
        <div className={`${styles.Home_main}`}>
          <div className={`${styles.Home_content} ${styles.container}`}>
            <div className={`${styles.Img_wrapper} ${styles.pfp_circle} `}>
              <Image
                draggable={false}
                alt="pfp"
                src={profilePic}
                className={`${styles.img}`}
              />
            </div>
            <div className={`${styles.Home_info}`}>
              <h1 className={`${styles.title}`}>Hi, I'm</h1>
              <h2 className={`${styles.subtitle}`}>Nate Levinson</h2>
              <a href="/about"><h3 className={`${styles.description}`}>click here to get to know me ➡️ </h3></a>
              <br />
              <a href="/projects"><h4 className={`${styles.description}`}>click here to see my projects ➡️ </h4></a>

            </div>
            <div className={`${styles.Home_socials} ${styles.flex} ${styles.justify_center} ${styles.space_x_4}`}>
              <div className={`${styles.Home_email}`}>
                <a href="mailto:nlevinson@wesleyan.edu" target="_blank" rel="noopener noreferrer" className={`${styles.Home_email}`}>
                  <FontAwesomeIcon icon={faEnvelopeSquare} size='3x' color='white' />
                </a>
              </div>
              <div className={`${styles.Home_linkedin}`}>
                <a href="https://www.linkedin.com/in/nathaniel-levinson-889282252/" target="_blank" rel="noopener noreferrer" className={`${styles.Home_email}`}>
                  <FontAwesomeIcon icon={faLinkedin} size='3x' />
                </a>
              </div>
              <div className={`${styles.Home_github}`}>
                <a href="https://github.com/natelevinson10" target="_blank" rel="noopener noreferrer" className={`${styles.Home_email}`}>
                  <FontAwesomeIcon icon={faGithubSquare} size='3x' color='#c276de' />
                </a>
              </div>
              <div className={`${styles.Home_medium}`}>
                <a href="https://medium.com/@natelevinson10" target="_blank" rel="noopener noreferrer" className={`${styles.Home_medium_link}`}>
                  <Image
                    width="50"
                    height="50"
                    src={medium}
                    alt="medium"
                  />
                </a>
              </div>
              <div className={`${styles.Home_spotify}`}>
                <a href="https://open.spotify.com/user/31ocn6yijep43l6eq5yzryhqnggq?si=ae59f17b2ec505f6" target="_blank" rel="noopener noreferrer" className={`${styles.Home_email}`}>
                  <FontAwesomeIcon icon={faSpotify} size='3x' color='#28ab3e' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
