import React, { FC } from 'react';
import classes from './Result.module.scss';
import MyButton from '../UI/button/MyButton';
import { ResultProps } from '../../types/reasult';

const Result: FC<ResultProps> = ({setVisible}) => {

    const handleVisible = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setVisible(false);
    };

    const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        setVisible(false);

        const inputArr = document.querySelectorAll('input');

        inputArr.forEach(input=>{
            input.checked = false
        })
    };

    return (
        <div className={classes.result}>
            <h2 className={classes.result__title}>Ваш результат</h2>
            <img width='70%' src={require('../../assets/img/iupsibk.png')} className={classes.result__img}/>
            <p className={classes.result__info}>Вероятно, Вас заинтересует работа в сфере <b> управления персоналом, социальных и бизнес-коммуникаций</b>: управление персоналом организации, гостиничный и ресторанный бизнес, международный бизнес (международная программа), экономическая безопасность (международная программа), менеджмент в кино и телевидении, менеджмент в спортивной и фитнес-индустрии, управление в здравоохранении</p>
            <a target="_blank" href='https://guu.ru/institute/iupsibk/' className={classes.result__link}>Сайт институт управления персоналом, социальных и бизнес-коммуникаций (ИУПСиБК) ГУУ</a>
            <div className={classes.result__buttonWrapper}>
                <MyButton className={classes.result__buttonReset} onClick={resetForm}>Пройти тест еще раз</MyButton>
                <MyButton  className={classes.result__buttonClose} onClick={handleVisible}>Закрыть</MyButton>
            </div>
        </div>
    );
};

export default Result;