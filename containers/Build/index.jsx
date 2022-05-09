import React from "react";
import classNames from "classnames";

import Img from "components/Img";

import BgBanner4 from "/assets/images/bg-banner-4.png";
import ImageBuild from "/assets/images/image-build.png";
import ImageTheMetaverse from "/assets/images/image-the-metaverse.png";
import VideoSource from "/assets/videos/video-2.mp4";
import ImageBtnTry from "/assets/images/image-btn-try.png";
import Video from "components/Video";

import styles from "./Build.module.scss";

const Build = () => {
  return (
    <section className={classNames(styles.Build, "section")} id="build">
      <div className={styles.Build_background}>
        <div className={styles.Build_background_image}>
          <Img src={BgBanner4} />
        </div>
      </div>
      <div
        className={classNames(
          styles.Build_wrapper,
          "flex items-center justify-center flex-wrap"
        )}
      >
        <div className={styles.Build_item}>
          <div className={styles.Build_video}>
            <div className={styles.Build_video_source}>
              <Video src={VideoSource} />
            </div>
            <div
              className={classNames(
                styles.Build_video_description,
                styles.Build_description
              )}
              style={{ textAlign: "center" }}
            >
              BRING YOUR NFT TO THE METAVERSE
            </div>
          </div>
        </div>
        <div className={styles.Build_item}>
          <div className={styles.Build_build}>
            <Img src={ImageBuild} />
          </div>
          <div className={styles.Build_the_metaverse}>
            <Img src={ImageTheMetaverse} />
          </div>
          <div
            className={styles.Build_description}
            style={{ marginBottom: "4rem", textAlign: "center" }}
          >
            BRING YOUR COMMUNITY TO LIFE{" "}
          </div>
          <div className={styles.Build_description}>
            WANT TO THROW A PARTY IN SPACE? MINT AN NFT IN THE JUNGLE? USE OUR
            WEB BUILDER TO CUSTOMISE YOUR SPACE IN JUST A FEW CLICKS.
          </div>
        </div>
        <div className={styles.Build_btn}>
          <div className={styles.Build_btn_image}>
            <Img src={ImageBtnTry} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Build;
