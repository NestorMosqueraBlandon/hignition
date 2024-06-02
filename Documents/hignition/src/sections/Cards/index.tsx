import React from "react";
import styles from "./Cards.module.css";
import Link from "next/link";
import Image from "next/image";

const Cards = ({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.caps}>
        <h3>CUPOS LIMITADOS</h3>
      </div>
      <h2>{title}</h2>
      <p>
        {description}
      </p>

      <div className={styles.items} >

      {children}
      </div>
     
    </section>
  );
};

export default Cards;
