"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import styles from "./AppImage.module.css";

type AppImageProps = ImageProps & {
  rounded?: boolean;
  aspectRatio?: number; // example: 16/9 = 1.777
  containerClassName?: string;
};

export default function AppImage({
  rounded = false,
  aspectRatio,
  containerClassName = "",
  className = "",
  sizes,
  ...props
}: AppImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`
        ${styles.container}
        ${rounded ? styles.rounded : ""}
        ${isLoading ? styles.loading : ""}
        ${containerClassName}
      `}
      style={
        aspectRatio
          ? { aspectRatio: aspectRatio.toString() }
          : undefined
      }
    >
      <Image
        {...props}
        sizes={sizes ?? "100vw"}
        className={`${styles.image} ${className}`}
        style={{
          objectFit: props.style?.objectFit ?? "cover",
          ...props.style,
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}