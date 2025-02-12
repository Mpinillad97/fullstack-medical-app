import { useUser } from '../../context/userContext';
import styles from './NavBar.module.css'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const {user, setUser} = useUser();
    const navigate = useNavigate();

    const logOutUser = () => {
        setUser({})
        navigate('/')
    }

    return (
        <>
            <nav className={styles.NavBar}>
                <div className={styles.container}>
                    <Link to={"/"} className={styles.a}>
                        <div className={styles.logoContainer}>                      
                            <img src="/logomedical.png" alt="Logo de Medicare" className={styles.logo}/>
                            <h1 className={styles.title}>Medical Care</h1>
                        </div>
                    </Link>
                    <ul className={styles.navList}>
                        <Link to={"/"} className={styles.a}>
                            <li className={styles.navItem}>Home</li>
                        </Link>
                        {!user.name ? <li className={`${styles.navItem} ${styles.disabled}`}>Appointments</li> : (
                            <Link to={"/appointments"} className={`${styles.a} ${!user ? styles.disabled : ''}`}>
                                <li className={styles.navItem}>Appointments</li>
                            </Link>
                        )}
                        {
                            user.name ? (
                                    <li className={styles.signIn} onClick={logOutUser}>Log Out</li>
                            ) : (
                                <>
                                    <Link to={"/login"} className={styles.a}>
                                        <li className={styles.signIn}>Login</li>
                                    </Link>
                                    <Link to={"/register"} className={styles.a}>
                                        <li className={styles.register}>Register</li>
                                    </Link>
                                </>
                            )
                        }
                        
                    </ul>
                </div>
                <h2 className={styles.subtitle1}>¿Need To Consult With a Doctor?</h2>
                <h3 className={styles.subtitle2}>Create your Account to Schedule Your Appointments!</h3>
            </nav>
        </>
    )
}

export default NavBar;