import React from 'react'
import styles from "./Card.module.css"
import Link from 'next/link'

const Card = ({ title, description, price, items, isRecommended }: { title: string, description: string, price: string, items: string[], isRecommended?:boolean }) => {
  return (
    <div className={styles.box}>
    <h4>{title}</h4>
    <p>{description}</p>
    
    <h3 className={styles.price} >{price}<span>(USD)</span></h3>
    
    <div className={styles.line} />
    <Link href="https://1qiwzbrz2mf.typeform.com/to/gwDVacmB" >Comprar Ahora</Link>

    <ul className={styles.list}>
        {items.map((item) => (
      <li key={item} >{item}</li>
        ))}
    </ul>
    {isRecommended && (
        <span className={styles.tag}>Recomendado</span>
    )}
  </div>
  )
}

export default Card