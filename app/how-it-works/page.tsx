import AppImage from "@/components/AppImage";
import styles from "../../components/login.module.css";
import heroImg from '../../images/stats-img.png';

export default function HowItWorks() {
  return (
    <main className={styles.pageContent}>
      <div className={styles.container}>
        <h1>How it Works</h1>
             <AppImage
              src={heroImg}
              alt="Profile photo"
              fill
              aspectRatio={16 / 9}
              rounded
              style={{
    objectFit: "fill",
    objectPosition: "center top",
  }}
            />
            <br />
        <p>
          Our platform is designed to help you analyze and improve your product in detail. We provide you with powerful tools and insights to streamline your operations and boost productivity. 
          With our solution, you can manage all aspects of your work in one place, making collaboration easier and results better.
        </p> 
      </div>
    </main>
  );
}
/* */