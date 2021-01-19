import React from 'react';
import styles from './RadioButton.modal.scss'

const RadioButton = ({ id, checked, children, changeFn}) => (
    <> 
        <div className={styles.wrapper}>
            <input className={styles.button}
                id={id}    
                type="radio"
                checked={checked}
                onChange={changeFn}
            />
            <label fro={id} className={styles.label}>{children}</label>
        </div>
    </>
);

export default RadioButton;