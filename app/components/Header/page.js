import React from "react";
import styles from "../../../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/pick.jpg"
        alt="Profile"
        width={250}
        height={150}
        className={styles.profileImage}
      />
      <h1 className={styles.username}>Daniel Cuello</h1>
    </header>
  );
};

export default Header;
