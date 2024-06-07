import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div>
      <div className={styles.circle}></div>
      <span className={styles.error}>404 error</span>
      <h2 className={styles.title}>We've lost this page</h2>
      <p className={styles.copy}>Sorry, the page you are looking for doesn't exist or has been moved.</p>
      <Link to="/">Go to main</Link>
      </div>
    </div>
  )
}

export default NotFound;