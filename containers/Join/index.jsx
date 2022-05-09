import React from "react";
import classNames from "classnames";

import Img from "components/Img";

import BgBanner4 from "/assets/images/bg-banner-4.png";
import ImageJoin from "/assets/images/image-join.png";
import ImageNft from "/assets/images/image-nft.png";
import VideoSource from "/assets/videos/video.mp4";

import styles from "./Join.module.scss";
import Video from "components/Video";

const Join = () => {
  return (
    <section className={classNames(styles.Join, 'section')} id="about">
      <div className={styles.Join_background}>
        <div className={styles.Join_background_image}>
          <Img src={BgBanner4} />
        </div>
      </div>
      <div className={classNames(styles.Join_wrapper, 'flex items-center justify-center flex-wrap')}>
        <div className={styles.Join_item}>
          <div className={styles.Join_video}>
            <div className={styles.Join_video_source}>
              <Video src={VideoSource} />
            </div>
            <div
              className={classNames(styles.Join_video_description, styles.Join_description)}
              style={{ textAlign: 'center' }}
            >
              BRING YOUR NFT TO THE METAVERSE
            </div>
          </div>
        </div>
        <div className={styles.Join_item}>
          <div className={styles.Join_join}>
            <Img src={ImageJoin} />
          </div>
          <div className={styles.Join_number}>5,000,000+</div>
          <div className={styles.Join_nft}>
            <Img src={ImageNft} />
          </div>
          <div
            className={styles.Join_description}
            style={{ marginBottom: '4rem', textAlign: 'center' }}
          >
            BRING YOUR NFT TO THE METAVERSE
          </div>
          <div className={styles.Join_description}>
            THE WORLDWIDE WEBB WAS THE FIRST METAVERSE GAMES THAT GIVES NFT
            HOLDERS THE POWER TO PLAY AS THEIR AVATAR.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
