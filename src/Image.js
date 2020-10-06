import React, { useState } from "react";
import styles from "./image.module.css";

const Image = ({ alt, src }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img className={styles.img} alt={alt} onLoad={handleLoad} src={src} />
    </div>
  );
};

export default Image;
