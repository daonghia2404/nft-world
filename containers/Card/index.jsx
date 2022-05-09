import React from "react";
import classNames from "classnames";
import Tilt from "react-tilt";

import Img from "components/Img";

import BgBanner4 from "/assets/images/bg-banner-4.png";
import ImageCard1 from "/assets/images/image-card-1.png";
import ImageCard2 from "/assets/images/image-card-2.png";
import VideoSource from "/assets/videos/video.mp4";
import ImageCollectNft from "/assets/images/image-collect-nft.png";
import ImageUseIngame from "/assets/images/image-use-ingame.png";

import styles from "./Card.module.scss";
import Video from "components/Video";

const Card = () => {
  return (
    <section className={classNames(styles.Card, "section")} id="collection">
      <div className={styles.Card_background}>
        <div className={styles.Card_background_image}>
          <Img src={BgBanner4} />
        </div>
      </div>
      <div
        className={classNames(
          styles.Card_wrapper,
          "flex justify-center flex-wrap"
        )}
      >
        <div className={styles.Card_item}>
          <div className={styles.Card_item_wrapper}>
            <Tilt className={classNames(styles.Card_image, "js-tilt")}>
              <Img src={ImageCard1} />

              <div className={styles.Card_label} style={{ width: "27rem" }}>
                <Img src={ImageCollectNft} />
              </div>
            </Tilt>
            <div className={styles.Card_description}>
              OWNING YOUR ITEMS AS NFT GIVES YOU THE FREEDOM TO TRADE AND SELL
              THEM ON ANY ETHEREUM PLATFORM.
            </div>
          </div>
        </div>
        <div className={styles.Card_item}>
          <div className={styles.Card_item_wrapper}>
            <Tilt className={classNames(styles.Card_image, styles.video, "js-tilt")}>
              <Video src={VideoSource} />

              <div className={styles.Card_label} style={{ width: "37rem" }}>
                <Img src={ImageUseIngame} />
              </div>
            </Tilt>
            <div className={styles.Card_description}>
              NFT ITEMS CAN BE USED TO CRAFT RARER ONES. UNLOCK POWER UPS OR
              RIDE AROUND THE METAVERSE.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
