import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";

import Img from "components/Img";
import IconPlay from "/assets/icons/icon-play.svg";
import Logo from "/assets/images/logo.svg";

import styles from "./Header.module.scss";
import { useOnClickOutside } from "utils/hooks";

const Header = () => {
  const [visibleMenuMobile, setVisibleMenuMobile] = useState(false);
  const [currentActiveMenu, setCurrentActiveMenu] = useState(null)
  const menuMobileRef = useRef(null);

  useOnClickOutside(menuMobileRef, () => {
    setVisibleMenuMobile(false);
  });

  const dataMenu = [
    {
      link: "#home",
      title: "Home",
    },
    {
      link: "#map",
      title: "Map",
    },
    {
      link: "#collection",
      title: "Collection",
    },
    {
      link: "#build",
      title: "Build",
    },
    {
      link: "#mint",
      title: "Mint",
    },
    {
      link: "#about",
      title: "About",
    },
  ];

  const activeSection = () => {
    window.addEventListener("scroll", () => {
      let current = "";
      const sections = document.querySelectorAll("section.section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setCurrentActiveMenu(current)
    });
  };

  useEffect(() => {
    activeSection()
  }, [])

  return (
    <header className={styles.Header}>
      <div
        className={classNames(
          styles.Header_wrapper,
          "flex items-center justify-between"
        )}
      >
        <div className={styles.Header_logo}>
          <div className={styles.Header_logo_image}>
            <Img src={Logo} />
          </div>
        </div>
        <div
          className={classNames(
            styles.Header_list,
            "Header_list flex items-center",
            { [styles.active]: visibleMenuMobile }
          )}
          ref={menuMobileRef}
        >
          {dataMenu.map((item) => (
            <a
              key={item.link}
              className={classNames(
                styles.Header_list_item,
                "Header_list_item",
                { [styles.active]: item.link.includes(currentActiveMenu) }
              )}
              href={item.link}
              data-id={item.link}
              onClick={() => setVisibleMenuMobile(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div
          className={styles.Header_btn_menu}
          onClick={() => setVisibleMenuMobile(!visibleMenuMobile)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
        <a
          className={classNames(styles.Header_btn, "flex items-center")}
          href="#"
        >
          <span className={styles.Header_btn_icon}>
            <Img src={IconPlay} />
          </span>
          Demo
        </a>
      </div>
    </header>
  );
};

export default Header;
