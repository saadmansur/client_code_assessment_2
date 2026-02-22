// components/TextContainer.jsx
import styles from './TextContainer.module.css'; // Import the CSS module

import React, { ReactNode } from "react";

type TextContainerProps = {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const TextContainer = ({
  title,
  icon,
  children,
  headingLevel = "h2",
}: TextContainerProps) => {
  const Heading = headingLevel;

  return (
    <div className={styles.container}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {title && <Heading className={styles.title}>{title}</Heading>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default TextContainer;
