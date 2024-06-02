import React from 'react'
import styles from "./Growth.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Growth = () => {
  return (
    <section className={styles.section} >
        <div>
            <div className={styles.caps} >
                <h3>Comienza Ahora</h3>
            </div>
            <h2>Crece más rápido</h2>
            <p>Despídete de los freelancers sin experiencia, y evita los altos costos de agencias lentas.</p>
        </div>

        <Link className={styles.link} href="https://1qiwzbrz2mf.typeform.com/to/gwDVacmB" >Agenda una Llamada Gratuita</Link>

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
     
    </section>
  )
}

export default Growth