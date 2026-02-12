"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../app/context/AuthContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  // avoid rendering user-dependent UI during SSR/hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
            <div>
              {/* render static fallback on server, render user after mount */}
              {mounted && user ? (
                <span>Welcome {user.name}</span>
              ) : (
                <Link href="/signin">Sign in</Link>
              )}
            </div>
            <div>
              {mounted && user ? (
                <button
                  type="button"
                  className={styles.btnTryFree}
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                >
                  Sign Out
                </button>
              ) : (
                <Link href="/signup" className={styles.btnTryFree}>
                  Try for free
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}