import styles from '../styles/Navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a href="/" className={styles.navbarLink}>Home</a>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/about" passHref legacyBehavior>
            <a className={styles.navbarLink}>About</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <a href="/projects" className={styles.navbarLink}>Projects</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/pictures" className={styles.navbarLink}>Pictures</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;