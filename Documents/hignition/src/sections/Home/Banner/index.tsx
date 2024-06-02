import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import styles from "./Banner.module.css"

const Banner = () => {
  return (
    <>
    <section className={styles.banner}>
    <div className={styles.container}>
      <div className={styles.portrait} >
        <div>
          <div className={styles.clients_stack}>
            <Image width={40} height={40} alt='Cliente Hignition' src="https://assets-global.website-files.com/656678c749020be98c303cc2/65c0e8ad1c6a88ae232238e2_AlexGoncalves.webp" />
            <Image  width={40} height={40} alt='Cliente Hignition' src="https://assets-global.website-files.com/656678c749020be98c303cc2/65c0eaa9fd3238af7f58eeec_DaniDiGiacomo.webp" />
            <div className={styles.final} >
              <Image width={15} height={15} alt='Más Clientes Hignition' src="https://assets-global.website-files.com/656678c749020be98c303cc2/656678c749020be98c303d7e_plus.svg" />
            </div>
          </div>
          <div>
            <p className={styles.client_text} >+43 clientes felices</p>
          </div>
        </div>
        <Image height={100} width={100} alt='Unete' src="https://assets-global.website-files.com/656678c749020be98c303cc2/65b9ca2d09143dffc9ba6b43_U%CC%81nete.svg" />
      </div>
        <h4>Agencia de Social Ads & Marketing</h4>
        <h2>ESCALA MÁS RÁPIDO CUIDANDO TU MARCA</h2>
        <h4>Con menos estrés y más estabilidad.</h4>
        <div className={styles.buttons} >
          <button className={styles.white}>Ver Planes</button>
          <Button href='/'>Agendar Llamada Gratuita</Button>
        </div>
    </div>
  </section>
  <section className={styles.section_clients}>
    
    {/* <h2>Clientes que han escalado con nosotros</h2> */}
      
    <ul className={styles.clients}>
      <li><Image width={200} height={45} src="/img/brands/troveed.png" alt="Troveed" /></li>
      <li><Image  width={160} height={35} src="/img/brands/vitalut.png" alt="" /></li>
      <li><Image width={200} height={50} src="/img/brands/fitnopolis.png" alt="Fitnopolis" /></li>
      <li><Image  width={50} height={50} src="/img/brands/houlob.png" alt="" /></li>

    </ul> 
  </section>
  </>

  )
}

export default Banner