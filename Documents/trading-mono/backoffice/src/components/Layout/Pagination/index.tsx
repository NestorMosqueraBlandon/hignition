import { ChevronLeft, ChevronRight } from 'react-feather'
import styles from './Pagination.module.css'
import { useSearchParams } from 'react-router-dom'

const Pagination = ({count}: {count: number}) => {

    const [searchParams] = useSearchParams();

    const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

    const nextPage = () => {

    }

    const prevPage = () => {
        
    }
  return (
    <div className={styles.pagination}>
        <p>Showing <span>{currentPage}</span> to <span>10</span> of <span>{count}</span> results</p>
        <div>
            <button onClick={prevPage}><ChevronLeft /> Previous</button>
            <button onClick={nextPage} >Next <ChevronRight /></button>
        </div>    
    </div>
  )
}

export default Pagination