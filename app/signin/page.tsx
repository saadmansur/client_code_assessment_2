"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import styles from './page.module.css';

export default function SignIn() {
    const { login } = useAuth();
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call your auth API
          setIsSubmitting(true);
      try {
        const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
        const url = `${base.replace(/\/$/, '')}/users/login`;
  
        const resp = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: password,
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
          login({ name, email: data.email || email });
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
    <main className={styles.pageContent}>
      <div className={styles.container}>
        <h1>Sign In</h1>
        <p>Welcome back! Sign in to your account.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className={styles.btnPrimary}>
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
