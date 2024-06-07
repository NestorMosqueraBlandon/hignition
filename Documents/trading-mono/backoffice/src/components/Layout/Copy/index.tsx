import styles from './Copy.module.css'

interface Props{
    text: string
}

const Copy = ({text}: Props) => {
  return (
    <p className={styles.copy}>{text}</p>
  )
}

export default Copy