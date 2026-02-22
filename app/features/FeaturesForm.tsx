"use client";
import styles from "../../components/TextContainer.module.css"; // reuse your page styles
import TextContainer from '../../components/TextContainer';
import { useRouter } from 'next/navigation';
import firstImg from '../../images/sparkles.png';
import secImg from '../../images/wheat.png';
import thirdImg from '../../images/wrench-simple.png';
import forthImg from '../../images/ruler-triangle.png';
import fifthImg from '../../images/sparkles.png';
import sixthImg from '../../images/mobile-button.png';



export default function FeatureForm() {
  const router = useRouter();

  return (
<div className={styles.pageContent}>
  <h1>Features</h1>
    <div className={styles.grid}>
      <TextContainer
        title="Traffic sources by group"
        icon={<img src={firstImg.src} alt="Sparkles Icon" />}
        headingLevel="h3"
      >
        <p>Information on transitions from
various traffic sources: search
engines, ad block, website, forum.</p>

      </TextContainer>

      <TextContainer
        title="Popular Pages"
        icon={<img src={secImg.src} alt="Sparkles Icon" />}
        headingLevel="h3"
      >
        <p>Analytics calculates the number of views for each page and allows you to find out the most visited.</p>
      </TextContainer>

      <TextContainer
        title="Audience activity"
        icon={<img src={thirdImg.src} alt="Sparkles Icon" />}
        headingLevel="h3"
      >
        <p>Analytics shows the number of pages
visited by the user. From here the
average visitor interest is calculated.</p>
      </TextContainer>

      <TextContainer
        title="Popular Pages"
        icon={<img src={forthImg.src} alt="Sparkles Icon" />}
        headingLevel="h3"
      >
        <p>Analytics calculates the number of views for each page and allows you to find out the most visited.</p>
      </TextContainer>

            <TextContainer
        title="Audience activity"
        icon={<img src={fifthImg.src} alt="Sparkles Icon" />}
        headingLevel="h3"
      >
        <p>Analytics shows the number of pages
visited by the user. From here the
average visitor interest is calculated.</p>
      </TextContainer>

      <TextContainer
        title="Traffic sources by group"
        icon={<img src={sixthImg.src} alt="Sparkles Icon" />}
        headingLevel="h3"
      >
        <p>Information on transitions from
various traffic sources: search
engines, ad block, website, forum.</p>
</TextContainer>
</div>
    </div>
  );
}