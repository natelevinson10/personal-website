import Navbar from './Navbar';
import styles from '../styles/Projects.module.css';
import chessProject from '../public/static/linked.png';
import resyProject from '../public/static/email.png';
import trcProject from '../public/static/linked.png';
import vapeescapeProject from '../public/static/email.png';
import geoGuessr from '../public/static/email.png';
import Head from 'next/head';
import Stack from 'react-bootstrap/Stack'
import Project from '../components/Project';


export default function Projects() {
  return (
      <div className={styles.container}>
          <Head>
              <title>Projects - Nate Levinson</title>
              <meta name='description' content='My personal website' />
              <link rel='icon' type='image/x-icon' href='/static/hand.png' />
          </Head>
          <Navbar></Navbar>
          <main className={styles.main}>
              <h1 className={styles.title}>Projects</h1>
              <Stack gap={3} className='align-items-center'>
                  <Project
                      name='SeatSecure'
                      iconUrl='https://medium.com/@natelevinson10/reverse-engineering-resys-api-to-book-the-most-exclusive-restaurants-in-seconds-b64e36315e2a'
                      duration='August 2022 - Present'
                      description={[
                        "A tool to effortlessly book dinner reservations at the most popular venues around the country. SeatSecure automates the dinner reservation process, taking information such as location, time, party size, and date into account and ensures the first open table matching given criteria will be reserved.  By reverse engineering Resy.com's API, SeatSecure is able to mimic the flow of the reservation process as a human does in an extremely efficient manor. This system also leverages a proxy server and a multi-threaded monitoring process, ensuring unmatched speed and reliability and eliminating the need for endless refreshing or long phone wait times. Seatsecure has secured customers tables at exclusive venues such as: 4 Charles Prime Rib(NY), Anajak Thai(CA), Zahav(PA), Boja De(FL), Mujo(GA), and many more.",
                        '\n',
                        "I wrote a technical walkthrough of my code, which can be read by clicking the medium logo at the top of this card."
                      ]}
                      skills={['Python', 'HTML/CSS', 'APIs', 'Requests']}
                      image={resyProject}
                      imageWidth={100} />
                  <Project
                      name='Personal Business'
                      duration='March 2019 - Present'
                      description={["Monitoring system assisting to the generation of over $500,000 in revenue. This software constantly scrapes a handful of retail websites and notifies me when a profitable product is restocked on loaded onto the website's product endpoint. "]}
                      skills={['Python', 'HTML/CSS']}
                      image={trcProject}
                      imageWidth={100} />
                <Project
                      name='Sports Betting Optimizer'
                      duration='December 2022'
                      description={['A script designed to maximize the expected value (EV) of sports bets on PrizePicks.com by scraping data from both PrizePicks and NHL.com. The tool scrapes player statistics and projections and compares them to locate the lines with the best odds of hitting for categories such as Shots On Goal, Hits, Assists, Points, Goals, and Blocked Shots. This script implements a z-score calculation to sort players based on their recent performance, helping users make informed and strategic sports betting decisions in NHL games.']}
                      skills={['Python', 'Pandas', '.CSV', 'APIs', 'Statistics']}
                      image={chessProject}
                      imageWidth={80}
                      centerImage />  
                   <Project
                    name='Geoguessr Tool'
                    duration='December 2022'
                    iconUrl='https://medium.com/@natelevinson10/how-i-reverse-engineered-geoguessrs-api-and-landed-the-1-global-score-1fd17d8a37c6'
                    description={[
                    "Script designed to automate the gameplay process of GeoGuessr, a web-based game where players must guess their location based on visual clues from real-world images. This bot fetches the exact coordinates of the current round's location and submits a guess with those coordinates, ensuring a perfectly optimized score for every round played. By analyzing the API calls made during game initialization and guess submission, the script constructs the necessary requests, handles request headers, and verifies the successful placement of the guess.",
                    '\n',
                    "I used this script to obtain the #1 global score in GeoGuessr. I wrote a technical walkthrough of my code, which can be read by clicking the medium logo at the top of this card."]}                      skills={['Python', 'File I/O', 'APIs', 'CSV']}
                    image={geoGuessr}
                    imageWidth={80}
                    centerImage />
              </Stack>
          </main>
      </div>
  )
}