import React from "react";
import classNames from "classnames";

import IconFacebook from "/assets/icons/icon-footer-facebook.png";
import IconTwitter from "/assets/icons/icon-footer-twitter.png";
import IconTelegram from "/assets/icons/icon-footer-telegram.png";
import IconTiktok from "/assets/icons/icon-footer-tiktok.png";
import IconYoutube from "/assets/icons/icon-footer-youtube.png";
import IconDiscord from "/assets/icons/icon-footer-discord.png";
import Img from "components/Img";

import styles from './Footer.module.scss';

const Footer = () => {
  const dataFooter = [
    { link: '#', icon: IconFacebook },
    { link: '#', icon: IconTwitter },
    { link: '#', icon: IconTelegram },
    { link: '#', icon: IconTiktok },
    { link: '#', icon: IconYoutube },
    { link: '#', icon: IconDiscord },
  ]
  return (
    <footer className={styles.Footer}>
      <div className={classNames(styles.Footer_wrapper, 'flex flex-col items-center justify-center')}>
        <div className={styles.Footer_title}>FOLLOW US</div>
        <div className={classNames(styles.Footer_socials, 'flex items-center justify-center')}>
          {dataFooter.map((item, index) => <a key={index} className={styles.Footer_socials_item} href={item.link}>
            <Img src={item.icon} />
          </a>)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
