import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import { Instagram, Linkedin, X } from "react-feather";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content} >
        <div>
        <picture className={styles.logo}>
        <Image
          style={{
            marginTop: 6,
          }}
          layout="fill"
          objectFit="contain"
          src="/logo-igni.png"
          alt="Logo Hignition"
        />

        </picture>
        <p>Una suscripción. Servicios Ilimitados de Marketing.</p>

        <div className={styles.social} >
            <Link href="/"> <Instagram color="#121212" size={20} /> </Link>
            <Link href="/"> <X color="#121212" size={20} /> </Link>
            <Link href="/"> <Linkedin color="#121212" size={20} /> </Link>
        </div>
        </div>

        <div className={styles.options}>
          <div>
          <h4>Menú</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portafolio" >Casos de Éxito</Link> </li>
            <li><Link href="https://1qiwzbrz2mf.typeform.com/to/gwDVacmB" >Agenda Una Demostración</Link></li>
          </ul>
          </div>
          <div>
          <h4>Planes</h4>
          <ul>
            <li>Consultorías</li>
            <li>Logos</li>
            <li>Diseño & Branding</li>
            <li>Edición de Videos</li>
            <li>Desarrollo Web & Automatización</li>
            <li>Marketing De Conversión</li>

          </ul>
          </div>
          <div>
          <h4>Comunidad</h4>
          <ul>
            <li>Newsletter</li>
            <li>Poscast</li>
            <li>Youtube</li>
          </ul>
          </div>

        </div>
      </div>
      <div>
        <div className={styles.legal} >
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Use</Link>
          <Link href="/">Subscription Agreement</Link>
          <Link href="/">Disclaimer</Link>
          <Link href="/">Cookie Policy</Link>
          <Link href="/">Consent Prefernces</Link>
        </div>
        <p>Copyright &copy; {new Date().getFullYear()} Hignition. LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
