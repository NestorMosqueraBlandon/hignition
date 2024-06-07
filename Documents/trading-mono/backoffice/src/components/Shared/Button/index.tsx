import { forwardRef } from 'react';
import { Loader } from '..';
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'link' | '' | 'outline' | 'secondary' | 'cancel' | 'third' | 'danger';
    className?: string;
    children?: React.ReactNode
    loading?: boolean;
    size?: 'default' | 'sm' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant = 'primary', size='default', className = '', loading, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={`${styles.button} ${styles[size]} ${styles[variant]} ${className}`}
      {...rest}

>
    {loading ? <Loader small={true} /> :
      <>
        {children}
      </>
    }
    </button>
  )
})

export default Button