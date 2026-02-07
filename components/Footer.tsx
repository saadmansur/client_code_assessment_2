import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2026 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}
