import Navbar from './Navbar';
import styles from '../styles/Projects.module.css';
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
                <h1 className={styles.title}>Projects⬇️</h1>
                <Stack gap={3} className='align-items-center'>
                <Project
                        name='🌎 GeoGames LLC (Acquired) '
                        iconUrl='https://www.geogridgame.com/'
                        duration='March 2024 - June 2024'
                        description={[
                            "GeoGrid - A daily trivia game made to put your geography knowledge to the test. GeoGrid has been played 2.5+ million and has over 10,000 active daily players. This game was acquired by a game development studio within 30 days of the initial launch.",
                            '\n',
                            "Play now by clicking the clip symbol at the top of this card!"
                        ]}
                        skills={['Python', 'fastAPI', 'Vue.JS', 'mongo DB']}
                    />
                    <Project
                        name='🍽️ SeatSecure'
                        iconUrl='https://medium.com/@natelevinson10/reverse-engineering-resys-api-to-book-the-most-exclusive-restaurants-in-seconds-b64e36315e2a'
                        duration='August 2022 - Present'
                        description={[
                            "A tool to conveniently book dinner reservations at the most popular venues around the country. SeatSecure automates the dinner reservation process, taking information such as location, time, party size, and date into account and ensuring the first open table matching the given criteria will be reserved.  By analyzing backend network requests to and from Resy.com, SeatSecure is able to mimic the flow of the reservation process as a human does in an extremely efficient manner. This system also leverages a proxy server and a multi-thread monitoring process, ensuring unmatched speed and reliability and eliminating the need for endless refreshing or long phone wait times. Seatsecure has secured customers tables at exclusive venues such as: 4 Charles Prime Rib (NY), Anajak Thai (CA), Zahav (PA), Boja De (FL), Mujo (GA), and many more.",
                            '\n',
                            "I wrote a technical summary of my code, which can be read by clicking the clip symbol at the top of this card."
                        ]}
                        skills={['Python', 'HTML/CSS', 'Restful API', 'Requests']}
                    />
                    <Project
                        name='🛍️ Personal Business'
                        duration='March 2019 - Present'
                        description={["Developed Python software assisting in the generation of over $500,000 in revenue and a six-figure profit. This software monitors 60 websites that release products with high demand at retail prices which can be bought up and sold on secondary markets for substantial markups (sports cards, shoes, etc.). By reverse engineering the Restful API framework of these retail websites, a backend multi-thread monitoring system is established using Python's Requests library to send an alert when an item matching given keywords (e.g. 'Air Jordan 1' or 'Wayne Gretzky' ) is loaded onto a website. This efficient monitoring process helps track product releases online and ensures timely attention to valuable opportunities leading to profit in the secondary market."]}
                        skills={['Python', 'Restful API', 'HTML/CSS']}
                    />
                    <Project
                        name='🏒 Sports Betting Optimizer'
                        iconUrl='https://github.com/natelevinson10/prizepicks_nhl_optimizer'
                        duration='Jan 2023'
                        description={['A script designed to maximize the expected value (EV) of sports bets on PrizePicks.com by scraping data from both PrizePicks and NHL.com. The tool scrapes player statistics and projections and compares them to locate the lines with the best odds of hitting for categories such as Shots On Goal, Hits, Assists, Points, Goals, and Blocked Shots. This script implements a z-score calculation to sort players based on their recent performance, helping users make informed and strategic sports betting decisions in NHL games.']}
                        skills={['Python', 'Pandas', '.CSV', 'Restful API', 'Statistics']}
                    />
                    <Project
                        name='🔎 Geoguessr Tool'
                        duration='December 2022'
                        iconUrl='https://medium.com/@natelevinson10/how-i-reverse-engineered-geoguessrs-api-and-landed-the-1-global-score-1fd17d8a37c6'
                        description={[
                            "A script designed to automate the gameplay process of GeoGuessr, a web-based game where players must guess their location based on visual clues from real-world images. This bot fetches the exact coordinates of the current round's location and submits a guess with those coordinates, ensuring a perfectly optimized score for every round played. By analyzing the API calls made during game initialization and guess submission, the script constructs the necessary requests, handles request headers, and verifies the successful placement of the guess.",
                            '\n',
                            "I used this script to obtain the #1 global score in GeoGuessr. I wrote a technical summary of my code, which can be read by clicking the clip symbol at the top of this card."]} 
                            skills={['Python', 'File I/O', 'Restful API', 'CSV']}
                    />
                </Stack>
            </main>
        </div>
    )
}