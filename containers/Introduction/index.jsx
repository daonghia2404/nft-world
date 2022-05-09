import React from "react";
import classNames from "classnames";
import Img from "components/Img";
import Typed from 'react-typed';

import BgBanner1 from "/assets/images/bg-banner-1.png";
import ImageBannerTitle from "/assets/images/image-banner-title.png";

import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={classNames(styles.Introduction, "section")} id="home">
      <div className={classNames(styles.Introduction_background, "scence")}>
        <div className={styles.Introduction_background_image} data-depth="0.2">
          <Img src={BgBanner1} alt="" />
        </div>
      </div>
      <div
        className={classNames(
          styles.Introduction_wrapper,
          "flex flex-col items-center justify-center"
        )}
      >
        <div className={classNames(styles.Introduction_logo)}>
          <Img src={ImageBannerTitle} alt="" />
        </div>
        <div className={classNames(styles.Introduction_title)}>{`Play\n+\nEarn`}</div>
        <div className={styles.Introduction_description}>
          <Typed
            strings={[
              'A FREE TO PLAY INTEROPERABLE MMORPG\nMETAVERSE ON ETHEREUM'
            ]}
            typeSpeed={40}
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
