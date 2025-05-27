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
                <p>Puedes solicitar una cantidad ilimitada de tareas a tu línea de trabajo, y se realizarán de una en una, por orden de prioridad. <br /> <br />

Las revisiones también son ilimitadas, hasta que estés satisfecho.</p>
            </details>
            <details>
                <summary>¿Cuantos trabajos puedo recibir en un mes?</summary>
                <p>

                Esto depende de la complejidad y el número de revisiones de la solicitud. Cada tarea es diferente, y recibirá avances todos los días hábiles. <br /> <br />

Entrenamos a nuestro equipo para ser ultra-rápidos. Algunos ejemplos de estimados promedios son: <br /> <br />

🎨 Crear +25 conceptos de logo: 10-15 días. <br />
🎥 Editar un video de 60 min: 3-4 días. <br />
💻 Crear un website desde cero: 20-30 días. <br />
📣 Crear una campaña de Ads: 10-15 días. <br /> <br />

Antes de realizar cualquier tarea, el experto te dará un estimado de entrega.
</p>

            </details>
            <details>
                <summary>¿Con quién estaré trabajando?</summary>
                <p>
                Asignaremos un experto de acuerdo a tus necesidades (diseñador, desarrollador, editor de videos, etc). <br /> <br />

Adicionalmente, un Supervisor de Éxito estará disponible para respaldarte con cualquier inquietud, garantizando que el talento esté cumpliendo tus expectativas. <br /> <br />

Si consideras que el talento no encaja en tu visión, te asignamos uno nuevo.
                </p>
            </details>
            <details>
                <summary>¿Cómo me comunico con mi equipo?</summary>
                <p>
                Todas las solicitudes están organizadas en tu tablero en Asana (nuestra herramienta de gestión de proyectos). Cada tarea tiene su propio chat para facilitar la comunicación. <br /> <br />

Puedes compartir textos, imágenes, documentos, o incluso grabar un breve video (para aquellos que prefieren hablar y no escribir). Mientras más clara sea la solicitud, más rápida será la entrega. <br /> <br />

En Asana, puedes crear solicitudes en minutos, y estar al tanto del estatus de cada tarea. <br /> <br />

Adicionalmente, podemos crear un chat general en Slack para comunicar temas más generales.
                </p>
            </details>
            <details>
                <summary>¿Cual es el horario de trabajo?</summary>
                <p>
                Cada talento está disponible de lunes a viernes, de 9:00 am a 5:00 pm. <br /> <br />

Reclutamos expertos de todo el mundo, y cada uno tiene su hora local. Velamos porque su zona horaria coincida con la tuya.
                </p>
            </details>
            <details>
                <summary>¿Cómo funciona la garantía del 100%?</summary>
                <p>
                Si en los primeros 15 días consideras que el servicio no es para ti, te devolvemos le dinero. Válido para todos los planes, solo el primer mes. <br /> <br />

En algunos casos podemos rechazar una solicitud de reembolso si encontramos evidencia de fraude, abuso de la política, o comportamiento manipulador. <br /> <br />

Para calificar a la garantía, debes haber proporcionado una dirección clara durante el proceso.
                </p>
            </details>
        </div>
    </section>
  )
}

export default Frequent