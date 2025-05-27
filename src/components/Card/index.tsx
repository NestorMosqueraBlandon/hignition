import React from 'react'
import styles from "./Card.module.css"
import Link from 'next/link'
import { DivisaFormater } from '@/hooks/divisa-formater'

const Card = ({ title, description, price, currency, items, isRecommended }: { title: string, description: string, price: number, currency: string, items: string[], isRecommended?:boolean }) => {
  return (
    <div className={styles.box}>
    <h4>{title}</h4>
    <p>{description}</p>
    
    <h3 className={styles.price} >{DivisaFormater({ value: price, currency})}<span>({currency})</span></h3>
    
    <div className={styles.line} />
    <Link href="https://form.typeform.com/to/wMLy2PQ4" >Comprar Ahora</Link>

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