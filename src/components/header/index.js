import React from 'react';
import logo from '../../images/logo.png'
import styles from './index.module.css';
import NavigLinks from '../navigLinks';
import Aux from '../../hoc/AuxFile'


const Header = ( props ) => (
    <Aux>
    
    <header className={styles.toolbar}>
        <div>
        <img alt="logo" className={styles.logo} src={logo} />
        </div>   
        
        <nav className={styles.DesktopOnly}>
            <NavigLinks isAuthenticated = {props.isAuth}/>
        </nav>
    </header>
    </Aux>
);

export default Header;