import React from 'react'
import styles from "./Frequent.module.css"

const Frequent = () => {
  return (
    <section className={styles.section} >
        <div>
            <div className={styles.caps} >
                <h3>PREGUNTAS FRECUENTES</h3>
            </div>
            <h2>La respuesta que buscas</h2>
        </div>
        <div className={styles.list}>
            <details>
                <summary>¿Qué significa &quot;Servicios Ilimitados&quot;?</summary>
            </details>
            <details>
                <summary>¿Cuantos trabajos puedo recibir en un mes?</summary>
            </details>
            <details>
                <summary>¿Con quién estaré trabajando?</summary>
            </details>
            <details>
                <summary>¿Cómo me comunico con mi equipo?</summary>
            </details>
            <details>
                <summary>¿Cual es el horario de trabajo?</summary>
            </details>
            <details>
                <summary>¿Cómo funciona la garantía del 100%?</summary>
            </details>
        </div>
    </section>
  )
}

export default Frequent