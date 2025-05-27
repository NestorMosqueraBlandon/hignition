import React from 'react';
import styles from './Timeline.module.css';
import Image from 'next/image';

const Timeline = () => {
  return (
    <section>
        <div className={styles.container}>
            <div className={styles.content} >
                <div className={styles.caps} >
                    <h3>CÓMO FUNCIONA</h3>
                </div>
                <h2 className={styles.main_title} >No reinventamos la rueda, <br /> solo a las agencias</h2>
            </div>
            <div className={styles.timeline} >
                <div className={styles.progress} ></div>
                <div className={styles.item} >
                    <div className={styles.node}  >
                        <div className={styles.subtitle}>Suscribete</div>
                    </div>
                    <div className={styles.centre} >
                        <div className={styles.circle} ></div>
                    </div>
                    <div className={styles.content} >
                        <div>
                            <div className={styles.text} >
                            ✅ Selecciona un plan de acuerto a tus necesidades.
                            </div>
                        </div>
                        <div className={styles.image} >
                            <Image src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/65b9d44ddb6617c1ded91c38_working-vacation%20(W).svg' width={480} height={480}  alt='' />
                        </div>
                    </div>
                </div>
                <div className={styles.item} >
                    <div className={styles.node} >
                        <div className={styles.subtitle} >Saluda a tu equipo</div>
                    </div>
                    <div className={styles.centre} >
                        <div className={styles.circle} ></div>
                    </div>   
                    <div className={styles.content} >
                        <div>
                            <div className={styles.text} >
                                🤝 Expertos basados en tu contexto y metas.
                            </div>
                            <div className={styles.copy} >
                                Si el talento no se adapta a tus necesidades, asignamos uno nuevo.
                            </div>
                        </div>
                        <div className={styles.image} >
                            <Image src='https://web.archive.org/web/20240305050858im_/https://assets-global.website-files.com/656678c749020be98c303cc2/65b9d5b68f0dd4261bb8d996_shaking-hands%201.svg' width={480} height={480}  alt='' />
                        </div>
                    </div>
                </div>
                <div className={styles.item} >
                    <div className={styles.node}  >
                        <div className={styles.subtitle} >Solicita</div>
                    </div>
                    <div className={styles.centre} >
                        <div className={styles.circle} ></div>
                    </div>
                    <div className={styles.content} >
                        <div>
                            <div className={styles.text} >
                            📥 Crea tareas y proyectos en Asana
                            </div>
                            <div className={styles.copy} >
                            Realizar solicitudes toma minutos, no horas.
                            </div>
                        </div>
                        <div className={styles.image_asana} >
                            <Image src='/asana.webp' width={480} height={380}  alt='' />
                        </div>
                    </div>
                </div>
                <div className={styles.item} >
                    <div className={styles.node}  >
                        <div className={styles.subtitle} >Recibe</div>
                    </div>
                    <div className={styles.centre} >
                        <div className={styles.circle} ></div>
                    </div>
                    <div className={styles.content} >
                        <div>
                              <div className={styles.title} >
                              🚀 comienza a crecer
                            </div>
                            <div className={styles.text} >
                            Revisa y aprueba las entregas.
                            </div>
                            <div className={styles.copy} >
                            Con revisiones ilimitadas, hasta que estés satisfecho.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Timeline