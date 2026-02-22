
"use client";

import Link from 'next/link';
import styles from './page.module.css';
import heroImg from '../../images/pricing-img.png';
import AppImage from "@/components/AppImage";

export default function Pricing() {
   return (
     <section className={styles.hero}>
       <div className={styles.container}>
         <div className={styles.heroContent}>
           <div className={styles.heroText}>
             <h1>Affordable product analysis for everyone</h1>
             <p>
              When you collect and analyze a lot of data, you can make
              effective decisions: turn off unprofitable ads or modify the
              interface. Control all processes on your site 
             </p>

            <div className={styles.ctaRow}>
              <Link href="/features" className={styles.btnPrimary}>
                Explore
              </Link>
            </div>
           </div>
           <div className={styles.heroImage}>
             <AppImage
              src={heroImg}
              alt="Profile photo"
              aspectRatio={16 / 9}
              rounded
            />
           </div>
         </div>
       </div>
     </section>
   );
 }

