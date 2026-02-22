"use client";
import { useState } from "react";
import FormField from "../../components/FormField";
import styles from "../../components/login.module.css"; // reuse your page styles
import { useAuth } from "../context/AuthContext";

import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const { login } = useAuth();
const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
    const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // call our auth API
          setIsSubmitting(true);
      try {
        const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
        const url = `${base.replace(/\/$/, '')}/users/login`;
  
        const resp = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        });
  
        // read raw text first so we never throw on invalid JSON
        const text = await resp.text();
        const json = text ? JSON.parse(text) : {};
        const contentType = resp.headers.get('content-type') || '';
  
        if (!resp.ok) {
          console.error('Signup failed', { status: resp.status, body: text });
          alert(`Error: ${json?.message || text || 'No error message provided'}`);
          return;
        }
  
        if (contentType.includes('application/json')) {
          const data = JSON.parse(text);
          // data should include the user's name (adjust to your backend)
          const name = data.name || data.user?.name || data.email || "";
          login({ name, email: data.email || form.email });
          router.push('/');
        } else {
          console.warn('Expected JSON but got:', contentType, text);
          alert('Server returned non-JSON response — check backend logs (see console).');
        }
      } catch (err) {
        console.error('Request error', err);
        alert('Network error while contacting API. Check backend is running and CORS settings.');
      } finally {
        setIsSubmitting(false);
      }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
 

      <FormField
        id="email"
        label="Email address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        className={styles.formGroup}
      />

      <FormField
        id="password"
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        className={styles.formGroup}
      />

      <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
        {isSubmitting ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}