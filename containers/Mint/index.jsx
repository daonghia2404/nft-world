import React, { useState } from "react";
import classNames from "classnames";
import Tilt from 'react-tilt'

import Img from "components/Img";

import BgBanner2 from "/assets/images/bg-banner-2.png";
import ImageMint from "/assets/images/image-mint.png";

import styles from "./Mint.module.scss";

const Mint = () => {
  const [mintValue, setMintValue] = useState(1);

  return (
    <section className={classNames(styles.Mint, "section")} id="mint">
      <div className={classNames(styles.Mint_background, "scence")}>
        <div className={styles.Mint_background_image} data-depth="0.2">
          <Img src={BgBanner2} />
        </div>
      </div>
      <div
        className={classNames(
          styles.Mint_wrapper,
          "flex flex-col items-center justify-center"
        )}
      >
        <div className={styles.Mint_title}>ARCHER SHIBA</div>
        <Tilt className={classNames(styles.Mint_image, "js-tilt")}>
          <Img src={ImageMint} />
        </Tilt>
        <div
          className={styles.Mint_description}
          style={{ maxWidth: "57.5rem", marginBottom: "3rem" }}
        >
          The most popular Omnichain Nft to be mint on ETHERIUM blockchain
        </div>
        <div className={styles.Mint_tokens}>
          <div className={styles.Mint_description}>0 Tokens minted</div>
          <div className={styles.Mint_bar}>
            <div className={styles.Mint_bar_process} style={{ width: "20%" }} />
          </div>
          <div className={styles.Mint_description}>
            <span>2000</span> Tokens left to next goal
          </div>
        </div>
        <div className={classNames(styles.Mint_input, "flex items-center")}>
          <input
            type="text"
            value={mintValue}
            onChange={(e) => setMintValue(e.target.value)}
          />
          <button>Mint</button>
        </div>
        <div className={classNames(styles.Mint_quick, "flex flex-col")}>
          <div className={styles.Mint_description}>Quick mint</div>
          <div
            className={classNames(
              styles.Mint_quick_list,
              "flex justify-between"
            )}
          >
            <div className={styles.Mint_quick_list_item}>5 Tokens</div>
            <div className={styles.Mint_quick_list_item}>10 Tokens</div>
            <div className={styles.Mint_quick_list_item}>25 Tokens</div>
            <div className={styles.Mint_quick_list_item}>50 Tokens</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
