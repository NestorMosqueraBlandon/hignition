import React from 'react'
import styles from "./Portfolio.module.css"
import Growth from '@/sections/Home/Growth'
import Image from 'next/image'
import { cases } from './cases'

const Portfolio = () => {
  return (
    <div>
        <section className={styles.section}>
            <div className={styles.caps}>
                <h3>(ESTAREMOS AGREGANDO MÁS CASOS PRONTO)</h3>
            </div>
            <h2>Proyectos exitosos, y nada más</h2>

            <div className={styles.list} >
                {cases.map((project) => (
                <div className={styles.card}>
                        <picture>
                        <Image src={project.image} layout='fill' alt={project.name} />
                        </picture>
                        <div className={styles.content} >
                            <h3>{project.name}</h3>
                            <p>{project.category}</p>

                            <div className={styles.tags}>
                                {project.tags.map((tag) => (
                                <span>{tag}</span>
                                ))}
                            </div>
                        </div>
                </div>
                ))} 
            </div>
        </section>
        <Growth />
    </div>
  )
}

export default Portfolio