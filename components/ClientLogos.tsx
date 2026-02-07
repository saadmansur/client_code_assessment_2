import Image from 'next/image';
import styles from './ClientLogos.module.css';

export default function ClientLogos() {
  // Using placeholder service that works - you should replace these with actual logos
  // Download real logos from brandfetch.com or your preferred source
  const clients = [
    { 
      name: 'Google', 
      logo: 'https://placehold.co/150x60/4285F4/white?text=Google&font=roboto'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://placehold.co/150x60/00A4EF/white?text=Microsoft&font=roboto'
    },
    { 
      name: 'Apple', 
      logo: 'https://placehold.co/150x60/000000/white?text=Apple&font=roboto'
    },
    { 
      name: 'Amazon', 
      logo: 'https://placehold.co/150x60/FF9900/white?text=Amazon&font=roboto'
    },
    { 
      name: 'Netflix', 
      logo: 'https://placehold.co/150x60/E50914/white?text=Netflix&font=roboto'
    },
  ];

  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <div className={styles.clientLogos}>
          {clients.map((client, index) => (
            <Image 
              key={index}
              src={client.logo}
              alt={client.name}
              width={150}
              height={60}
              unoptimized // Add this for external URLs
            />
          ))}
        </div>
      </div>
    </section>
  );
}
