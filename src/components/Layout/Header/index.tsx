import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import Navigator from "./Navigator";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <picture className={styles.logo}>
          <Link href="/">
            <Image
              style={{
                marginTop: 6,
              }}
              layout="fill"
              objectFit="contain"
              src="/logo-igni.png"
              alt="Logo Hignition"
            />
          </Link>
        </picture>

        <Navigator />
        <button
          className={styles.menu}
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
          <svg
            fill="#fff"
            className={styles.hamburger}
            viewBox="0 0 100 100"
            width="25"
          >
            <rect
              className={`${styles.line} ${styles.top}`}
              width="80"
              height="10"
              x="10"
              y="25"
              rx="5"
            ></rect>
            <rect
              className={`${styles.line} ${styles.middle}`}
              width="80"
              height="10"
              x="10"
              y="45"
              rx="5"
            ></rect>
            <rect
              className={`${styles.line} ${styles.bottom}`}
              width="80"
              height="10"
              x="10"
              y="65"
              rx="5"
            ></rect>
          </svg>
        </button>
        <button className={styles.speak}><Link href="https://form.typeform.com/to/wMLy2PQ4">Hablemos</Link></button>
      </div>
    </header>
  );
};

export default Header;
