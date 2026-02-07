import styles from './page.module.css';

export default function SignIn() {
  return (
    <main className={styles.pageContent}>
      <div className={styles.container}>
        <h1>Sign In</h1>
        <p>Welcome back! Sign in to your account.</p>
      </div>
    </main>
  );
}
