import styles from '../styles/Pictures.module.css';
import Navbar from './Navbar';
import Head from 'next/head';
import Image from 'next/image';
import img1 from '../public/static/water.jpg';
import img2 from '../public/static/work.jpg';
import img3 from '../public/static/kayak.jpg';
import img4 from '../public/static/turf.jpg';
import img5 from '../public/static/woods.jpeg';
import img6 from '../public/static/soccer.jpg';
import img7 from '../public/static/shoe.jpg';
import img8 from '../public/static/iv.jpg';
import img9 from '../public/static/hike.jpg';
import img10 from '../public/static/guitar.jpg';
import img11 from '../public/static/drive.jpg';
import img12 from '../public/static/dog2.jpg';
import img13 from '../public/static/dog1.jpg';
import img14 from '../public/static/concert.jpg';
import img15 from '../public/static/comp.jpg';
import img16 from '../public/static/burrito.jpg';
import img17 from '../public/static/bike.jpg';
import img18 from '../public/static/beach.jpg';
import img19 from '../public/static/concert2.jpeg';
import img20 from '../public/static/dog3.jpeg';
import img21 from '../public/static/street.jpg';
import img22 from '../public/static/vending.jpeg';
import img23 from '../public/static/walking.jpg'
import img24 from '../public/static/carnival.jpg'







export default function Pictures() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pictures - Nate Levinson</title>
        <meta name='description' content='My personal website' />
        <link rel='icon' type='image/x-icon' href='/static/hand.png' />
      </Head>
      <Navbar></Navbar>
      <h1 className={styles.photosTitle}>Pictures⬇️</h1>
      <main className={styles.main}>
        <div className={styles.pictureItem}>
          <Image src={img1} alt='Water' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img2} alt='Work' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img3} alt='Kayaks' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img4} alt='Turf' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img5} alt='Woods' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img6} alt='Soccer' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img7} alt='Shoe' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img8} alt='Iv' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img9} alt='Hike' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img10} alt='Guitar' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img11} alt='Drive' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img12} alt='Dog2' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img13} alt='Dog1' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img15} alt='Comp' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img16} alt='Burrito' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img17} alt='Bike' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img18} alt='Beach' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img19} alt='Concert2' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img20} alt='Dog3' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img21} alt='Street' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img22} alt='Vending' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img23} alt='Walking' className={styles.picture} />
        </div>
        <div className={styles.pictureItem}>
          <Image src={img24} alt='Carnival' className={styles.picture} />
        </div>
      </main>
    </div>
  )
}