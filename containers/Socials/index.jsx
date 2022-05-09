import React from "react";

import IconFacebook from "/assets/icons/icon-facebook.png";
import IconTwitter from "/assets/icons/icon-twitter.png";
import IconTelegram from "/assets/icons/icon-telegram.png";
import IconTiktok from "/assets/icons/icon-tiktok.png";
import IconYoutube from "/assets/icons/icon-youtube.png";
import IconDiscord from "/assets/icons/icon-discord.png";
import IconMore from "/assets/icons/icon-more.png";

import styles from "./Socials.module.scss";
import Img from "components/Img";

const Socials = () => {
  const dataSocials = [
    // { link: "#", icon: IconFacebook },
    { link: "#", icon: IconTwitter },
    // { link: "#", icon: IconTelegram },
    // { link: "#", icon: IconTiktok },
    // { link: "#", icon: IconYoutube },
    { link: "#", icon: IconDiscord },
    // { link: "#", icon: IconMore },
  ];
  return (
    <div className={styles.Socials}>
      {dataSocials.map((item, index) => (
        <a key={index} className={styles.Socials_item} href={item.link}>
          <Img src={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
