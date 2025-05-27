"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { ChevronDown, ChevronRight } from "react-feather";
import styles from "./Header.module.css";

const Navigator = () => {
  useEffect(() => {
    const handleDropdownClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isDropdownButton = target.matches("[data-dropdown-button]");
      const dropdown = target.closest("[data-dropdown]") as HTMLElement | null;

      if (isDropdownButton && dropdown) {
        const isDropdownActive = dropdown.classList.contains(styles.active);
        if (!isDropdownActive) {
          // Cerrar cualquier otro dropdown abierto
          document
            .querySelectorAll(`.${styles.dropdown}.${styles.active}`)
            .forEach((dropdown) => {
              dropdown.classList.remove(styles.active);
            });
        }
        // Abrir o cerrar el dropdown actual
        dropdown.classList.toggle(styles.active);
      } else {
        // Cerrar todos los dropdowns cuando se hace clic fuera de ellos
        document
          .querySelectorAll(`.${styles.dropdown}.${styles.active}`)
          .forEach((dropdown) => {
            dropdown.classList.remove(styles.active);
          });
      }
    };

    document.addEventListener("click", handleDropdownClick);

    return () => {
      document.removeEventListener("click", handleDropdownClick);
    };
  }, []);
  return (
    <nav className={`${styles.nav}`}>
      <ul className={styles.menud}>
        <div className={styles.dropdown} data-dropdown>
          <button className={styles.link} data-dropdown-button>
            <>Planes</> <ChevronDown size={18} />
          </button>
          <div className={`${styles.dropdown_menu} ${styles.pcs}`}>

            <div className={styles.flex} >
            <h4>Estrategia</h4>
            <ul>
              <li>
                <Link href="/consultorias">Consultorías</Link>
              </li>
              <li>
                <Link href="/marketing">Marketing</Link>
              </li>
            </ul>
            </div>
            <div className={styles.flex}>
              <h4>Creatividad</h4>
              <ul>
                <li>
                  <Link href="/logos"> Logos & Branding</Link>
                </li>
                <li>
                  <Link href="/diseno-grafico"> Diseño Grafico</Link>
                </li>
                <li>
                  <Link href="/videos"> Edición de Videos</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
 
        <Link href="/portafolio">Casos de Exito</Link>
        <div className={styles.dropdown} data-dropdown>
          <button className={styles.link} data-dropdown-button>
            <>Comunidad</> <ChevronDown size={18} />
          </button>
          <div className={`${styles.dropdown_menu} ${styles.pcs} ${styles.community}`}>

            <div className={styles.flex} >
            <ul>
              <li>
                <Link href="/consultorias">Newsletter</Link>
              </li>
              <li>
                <Link href="/marketing">Podcast</Link>
              </li>
              <li>
                <Link href="/marketing">Blog</Link>
              </li>
            </ul>
            </div>
         
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navigator;
