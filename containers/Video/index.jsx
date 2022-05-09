import React from "react";
import classNames from "classnames";
import Img from "components/Img";

import BgBanner3 from "/assets/images/bg-banner-3.png";
import Logo from "/assets/images/logo.svg";
import VideoSource from "/assets/videos/video.mp4";

import styles from "./Video.module.scss";
import Video from "components/Video";

const VideoContainer = () => {
  return (
    <div className={styles.Video}>
      <div className={classNames(styles.Video_background, "scence")}>
        <div className={styles.Video_background_image} data-depth="0.2">
          <Img src={BgBanner3} />
        </div>
      </div>
      <div
        className={classNames(
          styles.Video_wrapper,
          "flex flex-col items-center justify-center"
        )}
      >
        <div className={styles.Video_video}>
          <div className={styles.Video_video_logo}>
            <Img src={Logo} />
          </div>
          <div className={styles.Video_video_source}>
            <Video src={VideoSource} />
          </div>
          <div
            className={classNames(
              styles.Video_video_description,
              styles.Video_description
            )}
          >
            Multi gameplay and build the word
          </div>
        </div>
        <div className={styles.Video_description}>
          WORLDWIDE WEB3 IS AN MMORPG METAVERSE <br /> WHERE YOU PLAY GAMES TO
          EARN NFT ITEMS AND COINS.
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
