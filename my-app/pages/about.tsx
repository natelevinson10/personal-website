import styles from '../styles/About.module.css';
import Navbar from './Navbar';
import Head from 'next/head';
import img1 from '../public/static/pfp.jpeg';




export default function About() {
  return (
    <div className={`bg-purple-900 min-h-screen ${styles.container}`}>
      <Head>
        <title>About - Nate Levinson</title>
        <meta name='description' content='My personal website' />
        <link rel='icon' type='image/x-icon' href='/static/hand.png' />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>
        <h1><strong>About Me⬇️</strong></h1>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <div className={styles.about}>
              <div className={styles.aboutText}>
                <p>
                  Hello! I am a junior at <strong>Wesleyan University</strong> pursuing a Bachelor of Arts in  Computer Science. I'm 20 years old and am from <strong>Philadelphia, PA</strong> (go birds🦅). I have a deep passion for learning and problem-solving and love collaborating with others. In terms of technical skills, I am proficient in <strong>Python</strong>  and <strong>C</strong>, and have experience with HTML/CSS, SMLNJ, and JavaScript. I am eager to engage in meaningful projects and internships, actively applying my skillset to tackle challenges and gain valuable experience.
                </p>
                <p>
                  I find joy in crafting solutions to real-world problems. My personal projects often stem from a desire to overcome specific challenges, driving me to code with a clear sense of purpose. Building these problem-solving tools brings immense satisfaction and fuels my passion for the world of coding even further. I am eager to explore new possibilities and expand my skills as a developer.
                </p>
                <p>
                  In my free time, I enjoy playing soccer, tennis, and chess, running on local trails, watching shows (currently Criminal Minds and Suits), and challenging my friends to a game of Mario Kart. Outside of Computer Science, I love learning about history - especially about the Dark Ages🏰 and ancient Greek society / mythology🏛️. Music has become a major part of my life as I spend a few hours every day listening to and playing songs by my favorite artists. Currently, I'm into Red Hot Chilli Peppers🌶️, The Smashing Pumpkins🎃, and Daft Punk🤖. I have a passion for entrepreneurship and find joy in exploring innovative ideas and creating new ventures that have the potential to make a positive impact.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <img className={styles.borderCircle} src={img1.src} alt="Description of the image" width="500" height="300" />
                <p>Me and my dog Bailey🐶</p>
              </div>
              <div className={styles.funFacts}>
                <h2><strong>Some fun facts:</strong></h2>
                <ul>
                  <li>• I recently picked up <strong>electric guitar</strong> 🎸 (sincere apologies to my family members who have no other option but to endure the sound of me practicing in my room)</li>
                  <li>• I am very interested in  <strong >geography</strong> 🌎. I love to play geoguessr, memorize country/state/territory flags and cities, and learn obscure facts about foreign places. Did you know the country of Tuvalu does not accept credit or debit cards anywhere?</li>
                  <li>• I have never traveled outside of America and would love to visit<strong > Italy🍕.</strong> The culture (especially the food) is something I have always wanted to experience</li>
                  <li>• My favorite animal is a <strong >penguin</strong>🐧, and to no surprise, my favorite movie has been and always will be The Penguins of Madagascar.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
