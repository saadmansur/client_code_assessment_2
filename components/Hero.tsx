"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import heroImg from '../main-img.svg';
import AppImage from './AppImage';

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
              <Link href="/signup" className={styles.btnPrimary}>
                Get Started
              </Link>
            </div>
           </div>
           <div className={styles.heroImage}>
             <AppImage
              src={heroImg}
              alt="Profile photo"
              fill
              aspectRatio={16 / 9}
              rounded
            />
           </div>
         </div>
       </div>
     </section>
   );
 }
// ...existing code...
