"use client";
import SignUpForm from "./SignUpForm";
import styles from "../../components/login.module.css";

export default function SignUpPage() {
  return (
    <main className={styles.pageContent}>
      <div className={styles.container}>
        <h1>Try for Free</h1>
        <p>Start your free trial today. No credit card required.</p>
        <SignUpForm />
      </div>
    </main>
  );
}