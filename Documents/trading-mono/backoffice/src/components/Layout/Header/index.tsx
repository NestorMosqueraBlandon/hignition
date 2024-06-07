import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { DropdownMenu, Loader, Menus } from '@/components';
import { headerOptions } from './header-options';
import { useUser } from '@/hooks';
import { LogOut, User } from 'react-feather';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
    const { isLoading, user } = useUser();

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const logout = () =>{
        queryClient.removeQueries();
        localStorage.removeItem('token')
        navigate('/login')
    }

    if(isLoading) return <Loader />


  return (
    <Menus>

    <header className={styles.header}>
       <div className={styles.header_left}>
                <div className={styles.logo}>
                    <img src="/isotype.png" />
                </div>
                <nav className={styles.nav}>
                    <Link className={styles.main} to='/'>Dashboard</Link>
                    {headerOptions.filter(option => option.role.includes(user?.team))
                    .map((option) => (
                        <DropdownMenu 
                            key={option.title}
                            title={option.title}
                            items={option.items}
                        />
                    ))}
                    
                </nav>
            </div>

            <div className={styles.user_info}>
                <div className={styles.user_photo}>
                        <img src={user?.photo} alt="" />
                </div>
                <div>
                    <h4>{user?.name} {user?.lastname}</h4>
                    <p>{user?.position}</p>
                </div>
                <div className={styles.menu}>
            <ul>

            <li> <User size={18} color='#fff' /> Edit Profile</li>
                <li> <LogOut size={18} color='#fff' /><button onClick={logout}> Logout</button></li>
                </ul>

            </div>
            </div>

         
    </header>
    </Menus>

  )
}

export default Header