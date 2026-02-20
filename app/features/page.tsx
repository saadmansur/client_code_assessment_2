import styles from "../../components/login.module.css";
import FeatureForm from "./FeaturesForm";

export default function Features() {
  return (
    <main className={styles.pageContent}>
      <div className={styles.container}>
        <FeatureForm />
      </div>
    </main>
  );
}
