import React from 'react';
import './styles.css';
import styles from './styles.module.css';


function Socialnetwork({iconName='bx bxl-facebook', text='Facebook', color='blue', total='5.000.000', unitName='Likes'}) {
    return (
        <div className={styles.socialMedia}>
            <div className={styles.brand}>
                <div className={styles.icon}>                    
                    <i className={iconName}></i>
                </div>

                <div className={styles.number}>
                    <h3>{text}</h3>
                    <p>{total} {unitName}</p>
                </div>
            </div>            
        </div>
        
    );
}

export default Socialnetwork;