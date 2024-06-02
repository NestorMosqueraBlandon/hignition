import React from 'react'
import styles from "./Portfolio.module.css"
import Growth from '@/sections/Home/Growth'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div>
        <section className={styles.section}>
            <div className={styles.caps}>
                <h3>(ESTAREMOS AGREGANDO MÁS CASOS PRONTO)</h3>
            </div>
            <h2>Proyectos exitosos, y nada más</h2>

            <div className={styles.list} >
                <div className={styles.card}>
                    <picture>
                    <Image src="/vita.png" layout='fill' alt='' />
                    </picture>
                    <div className={styles.content} >
                        <h3>Vitalut Saas</h3>
                        <p>Salud</p>

                        <div className={styles.tags}>
                            <span>Branding</span>
                            <span>Marketing</span>
                            <span>Web</span>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <picture>
                    <Image src="/tro.png" layout='fill' alt='' />
                    </picture>
                    <div className={styles.content} >
                        <h3>Trooved</h3>
                        <p>Tecnología</p>

                        <div className={styles.tags}>
                            <span>Diseño</span>
                            <span>Branding</span>
                            <span>Marketing</span>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <picture>
                        <Image src="/fit.png" layout='fill' alt='' />
                    </picture>
                    <div className={styles.content} >
                        <h3>Fitnopolis</h3>
                        <p>E-Commerce</p>

                        <div className={styles.tags}>
                            <span>Marketing</span>
                            <span>Diseño</span>
                            <span>Videos</span>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <picture>
                    <Image src="/houl.webp" layout='fill' alt='' />
                    </picture>
                    <div className={styles.content} >
                        <h3>Houlob</h3>
                        <p>Real State</p>

                        <div className={styles.tags}>
                            <span>Branding</span>
                            <span>Marketing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Growth />
    </div>
  )
}

export default Portfolio