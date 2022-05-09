import React from "react";
import classNames from "classnames";

import Img from "components/Img";

import BgBanner4 from "/assets/images/bg-banner-4.png";
import ImageMap from "/assets/images/image-map.png";

import styles from "./Map.module.scss";

const Map = () => {
  return (
    <section className={classNames(styles.Map, "section")} id="map">
      <div className={classNames(styles.Map_background)}>
        <div className={classNames(styles.Map_background_image)}>
          <Img src={BgBanner4} />
        </div>
      </div>
      <div
        className={classNames(
          styles.Map_wrapper,
          "flex items-center justify-center flex-wrap"
        )}
      >
        <div className={classNames(styles.Map_item)}>
          <div className="scence">
            <div className={styles.Map_image} data-depth="0.2">
              <Img src={ImageMap} />
            </div>
          </div>
        </div>
        <div className={classNames(styles.Map_item)}>
          <div className={styles.Map_title}>LAND NFT AND META WORLD</div>
          <div className={styles.Map_description}>
            BUILT AROUND CUSTOMIZABLE WEB3 + NFT SPACES, APARTMENTS MAKE
            SPENDING TIME WITH YOUR COMMUNITIES JUST AS EASY AS REAL LIFE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
