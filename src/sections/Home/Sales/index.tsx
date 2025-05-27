'use client'
import React, { useEffect, useRef } from 'react';
import styles from './Sales.module.css';
import Image from 'next/image';
import { cases } from '@/app/portafolio/cases';

const Sales = () => {
    const col1Ref = useRef<HTMLDivElement>(null);
    const col2Ref = useRef<HTMLDivElement>(null);
    const col3Ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const y = window.scrollY;
  
        if (col1Ref.current) col1Ref.current.style.transform = `translate3d(0px, ${-scrollY * 0.5}px, 0px) scale3d(1, 1, 1)`;
        if (col2Ref.current) col2Ref.current.style.transform = `translate3d(0px, ${-scrollY * 0.5}px, 0px) scale3d(1, 1, 1)`;
        if (col3Ref.current) col3Ref.current.style.transform = `translate3d(0px, ${-scrollY * 0.5}px, 0px) scale3d(1, 1, 1)`;
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <div className={styles.container} >
        <div className={styles.sales} >
            <div className={styles.w_container} >
                <div className={styles.layout} >
                    <div  ref={col1Ref} className={`${styles.column} ${styles.tell}`} >
                    {cases.slice(0,3).map((project) => (
                        <picture key={project.name}>
                        <Image src={project.image} width={991}  height={300} alt={project.name} />
                        </picture>
                ))} 
                    </div>
                    <div ref={col2Ref} className={styles.column} >
                    {cases.slice(3,6).map((project) => (
                        <picture key={project.name}>
                        <Image src={project.image} width={991}  height={300} alt={project.name} />
                        </picture>
                ))} 
                    </div>
                    <div ref={col3Ref} className={`${styles.column} ${styles.tell}`} >
                    {cases.slice(6,9).map((project) => (
                        <picture key={project.name}>
                        <Image src={project.image} width={991}  height={300} alt={project.name} />
                        </picture>
                ))} 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sales