import React from 'react';
import styles from './Why.module.css';
import Image from 'next/image';

const Why = () => {
  return (
    <section className={styles.section} >
        <div className={styles.container}>
            <div>
                <div className={styles.caps} >
                    <h3>¿POR QUÉ HIGNITION?</h3>
                </div>
                <h2 className={styles.subtitle}>El equipo que siempre has necesitado</h2>
            </div>
            <div className={styles.column} >
                <div className={styles.node} >
                    <div className={styles.line} ></div>
                    <Image width={25} height={25} src='https://web.archive.org/web/20250302150701im_/https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303db9_checkmark.svg' alt='' />
                    <h6>Precio Fijo Mensual</h6>
                    <div className={styles.copy} >Transparente, sin sorpresas. Pausa o cancela cuando lo necesites.</div>
                </div>
                <div className={styles.node} >
                    <div className={styles.line} ></div>
                    <Image width={25} height={25} src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303e15_User%20Shield%201.svg' alt='' />
                    <h6>Expertos Probados</h6>
                    <div className={styles.copy} >Transparente, sin sorpresas. Pausa o cancela cuando lo necesites.</div>
                </div>
                <div className={styles.node} >
                    <div className={styles.line} ></div>
                    <Image width={25} height={25} src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303e13_Launch%201.svg' alt='' />
                    <h6>Revisiones Ilimitadas</h6>
                    <div className={styles.copy} >Transparente, sin sorpresas. Pausa o cancela cuando lo necesites.</div>
                </div>
                <div className={styles.node} >
                    <div className={styles.line} ></div>
                    <Image width={25} height={25} src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303e12_Bar%20Chart%201.svg' alt='' />
                    <h6>Ejecución Rápida</h6>
                    <div className={styles.copy} >Transparente, sin sorpresas. Pausa o cancela cuando lo necesites.</div>
                </div>
                <div className={styles.node} >
                    <div className={styles.line} ></div>
                    <Image width={25} height={25} src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303e15_User%20Shield%201.svg' alt='' />
                    <h6>Equipo Completo</h6>
                    <div className={styles.copy} >Transparente, sin sorpresas. Pausa o cancela cuando lo necesites.</div>
                </div>
                <div className={styles.node} >
                    <div className={styles.line} ></div>
                    <Image width={25} height={25} src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303d5e_Sheets%201.svg' alt='' />
                    <h6>Plataforma Online</h6>
                    <div className={styles.copy} >Transparente, sin sorpresas. Pausa o cancela cuando lo necesites.</div>
                </div>
                <div className={styles.node} >
                    <div className={styles.line} ></div>
                    <Image width={25} height={25} src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303d5d_Layers%201.svg' alt='' />
                    <h6>Asíncrono</h6>
                    <div className={styles.copy} >Transparente, sin sorpresas. Pausa o cancela cuando lo necesites.</div>
                </div>
                <div className={styles.node} >
                    <div className={styles.line} ></div>
                    <Image width={25} height={25} src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303e30_Query%20Inner%20Join%201.svg' alt='' />
                    <h6>Garantía de 100%</h6>
                    <div className={styles.copy} >Transparente, sin sorpresas. Pausa o cancela cuando lo necesites.</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Why