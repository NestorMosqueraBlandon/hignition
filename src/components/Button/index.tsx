import React from 'react'
import styles from "./Button.module.css"
import Link from 'next/link';

const Button = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <div className={styles.btn} >
    <Link href={href}>{children}</Link>
  </div>
  )
}

export default Button