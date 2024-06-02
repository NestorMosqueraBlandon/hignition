import React from 'react';
import styles from './Services.module.css';
import Button from '@/components/Button';
import Image from 'next/image';

const Services = () => {
  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.caps}>
          <h4>SERVICIOS</h4>
        </div>
        <h2>Un experto para cada necesidad</h2>
      </div>

      <div className={styles.services}>
        <article className={styles.service}>
          <picture>
            <Image src="/consult.svg" objectFit='contain' layout='fill' alt='Consultorias' />
          </picture>
          <div className={styles.information}>
            <div className={styles.caps}>
              <h3>ESTRATEGIA</h3>
            </div>
            <h2>Consultorías</h2>
            <p>
              Alacanza tus metas más rápido con recomendaciones especificas para
              tu caso.
            </p>

            <Button href="/consultorias">Ver Precios de Consultorías</Button>

            <div className={styles.description}>
              <div>
                <p>Auditorías, Investigaciones, y Recomendaciones</p>
              </div>
              <div>
                <p>Planes de Marketing Personalizados.</p>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.service}>
      
          <div className={styles.information}>
            <div className={styles.caps}>
              <h3>Creatividad</h3>
            </div>
            <h2>Logos & Branding</h2>
            <p>
              Dale vida a tu proyecto con una identidad visual única.
            </p>

            <Button href="/logos">Ver Precios de Logos</Button>

            <div className={styles.description}>
              <div>
                <p>Logos, Guías de Marca</p>
              </div>
              <div>
                <p>Patentes y Registros</p>
              </div>
            </div>
          </div>
          <picture>
            <Image src="/logos.svg" objectFit='contain' layout='fill' alt='Consultorias' />
          </picture>
        </article>
        <article className={styles.service}>
          <picture>
            <Image src="/grafico.svg" objectFit='contain' layout='fill' alt='Consultorias' />
          </picture>
          <div className={styles.information}>
            <div className={styles.caps}>
              <h3>CREATIVIDAD</h3>
            </div>
            <h2>Diseño Gráfico</h2>
            <p>
              Haz que tu marca luzca como merece, en todos los espacios.
            </p>

            <Button href="/diseno-grafico">Ver Precios de Diseño</Button>

            <div className={styles.description}>
              <div>
                <p>Diseños para Redes, Banners, Ilustraciones.</p>
              </div>
              <div>
                <p>Presentaciones, Empaques, Etiquetas, Libros.</p>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.service}>
      
      <div className={styles.information}>
        <div className={styles.caps}>
          <h3>Creatividad</h3>
        </div>
        <h2>Edición de Videos</h2>
        <p>
          Capta la atención de tus clientes en cada plataforma.
        </p>

        <Button href="/videos">Ver Precios de Edición</Button>

        <div className={styles.description}>
          <div>
            <p>Clips para Instagram, TikTok y YouTube.</p>
          </div>
          <div>
            <p>Podcasts, Cursos, y Webinars.</p>
          </div>
        </div>
      </div>
      <picture>
        <Image src="/videos.svg" objectFit='contain' layout='fill' alt='Consultorias' />
      </picture>
    </article>

    <article className={styles.service}>
    <picture>
        <Image src="/marketing.svg" objectFit='contain' layout='fill' alt='Consultorias' />
      </picture>
      <div className={styles.information}>
        <div className={styles.caps}>
          <h3>ESTRATEGIA</h3>
        </div>
        <h2>Marketing de Conversión</h2>
        <p>
        Activa tu embudo de ventas para adquirir más clientes y aumentar su valor en el tiempo.
        </p>

        <Button href="/marketing">Ver Precios de Marketing</Button>

        <div className={styles.description}>
          <div>
            <p>Redacción de Contenido, Guiones, Blogs.</p>
          </div>
          <div>
            <p>Anuncios Pagos & Email Marketing.</p>
          </div>
        </div>
      </div>
   
    </article>
      </div>
    </section>
  );
};

export default Services;
