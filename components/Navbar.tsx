import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <div className={styles.logo}>
            <Link href="/">Analytics</Link>
          </div>
          
          <div className={styles.navLinks}>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          
          <div className={styles.navButtons}>
            <Link href="/signin" className={styles.btnSignin}>Sign in</Link>
            <Link href="/signup" className={styles.btnTryFree}>Try for free</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
