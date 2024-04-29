import React, { FC } from 'react';
import classes from './MyButton.module.scss';
import { PropsProperties } from '../../../types/button';

const MyButton: FC<PropsProperties> = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={className ? `${classes.MyButton} ${className}` : classes.MyButton}>
            {children}
        </button>
    );
};

export default MyButton;