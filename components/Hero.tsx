"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import heroImg from '../main-img.svg';

export default function Hero() {
  const [email, setEmail] = useState('');
   return (
     <section className={styles.hero}>
       <div className={styles.container}>
         <div className={styles.heroContent}>
           <div className={styles.heroText}>
             <h1>Analyse and improve your product in detail</h1>
             <p>
               We help companies streamline their operations and boost productivity. 
               Our solution brings together everything you need to manage your work 
               in one place, making collaboration easier and results better.
             </p>

            <div className={styles.ctaRow}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                aria-label="Email address"
              />
              <Link href="/signup" className={styles.btnPrimary}>
                Get Started
              </Link>
            </div>
           </div>
           <div className={styles.heroImage}>
             <Image 
               src={heroImg} 
               alt="Product showcase"
               width={600}
               height={400}
               priority
             />
           </div>
         </div>
       </div>
     </section>
   );
 }
// ...existing code...
