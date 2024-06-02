import React from "react";
import styles from "./CeroToMillion.module.css";
import Link from "next/link";
import Image from "next/image";

const CeroToMillion = () => {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h2>De 0 a $Millones</h2>
        <h3>Empresas de todos los tamaños han confiado en nuestro equipo</h3>
      </div>
      <div className={styles.box_rigth} >
        <div className={styles.content} >
          <div>
            <div className={styles.caps}>
              <h3>CASOS DE ÉXITO</h3>
            </div>
            <h2>Resultados que hablan por sí solos.</h2>
          </div>
          <Link href="/">Ver Portafolio</Link>
        </div>

            <Image width={350} height={400} alt="Imagen" src="https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303d5c_Mask%2520group-p-500.png" />
      </div>
    </section>
  );
};

export default CeroToMillion;
