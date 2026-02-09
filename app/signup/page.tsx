"use client";
import { useState } from 'react';
import styles from './page.module.css';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (form.password !== form.confirm) {
        alert('Passwords do not match');
        return;
      }
      setIsSubmitting(true);
      try {
        const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003';
        const url = `${base.replace(/\/$/, '')}/users`;
  
        const resp = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
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
          alert(data.message || 'Account created');
          setForm({ name: '', email: '', password: '', confirm: '' });
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
        <h1>Try for Free</h1>
        <p>Start your free trial today. No credit card required.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirm">Confirm password</label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
            {isSubmitting ? 'Creating…' : 'Create account'}
          </button>
        </form>
      </div>
    </main>
  );
}
