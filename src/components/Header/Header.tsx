import React, { FC } from 'react';
import classes from './Header.module.scss';
import MyButton from '../UI/button/MyButton';

const Header: FC = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__wrapper}>
                <h2 className={classes.header__title}>Пройди онлайн тест и узнай свои способности!</h2>
                <img width='130px' className={classes.header__ikon} src={require('../../assets/img/iis.jpg')}></img>
                <p className={classes.header__content}>
                    Каждому человеку характерны определенные физические и духовные возможности, определяющие образ его жизни, переживания, поведение, мышление и т.п. При выборе профессии очень важно учитывать свою предрасположенность к какому-либо занятию. Для того, чтобы определить какое направление Вам больше всего подходит при выборе дальнейшей профессии предлагаем пройти наш «Тест на профориентацию, выбор профессии». Вам необходимо выбрать один из двух вариантов ответа на каждый вопрос. Весь тест состоит из 30 вопросов. После ответов на все вопросы нажмите кнопку «Узнать результат».
                </p>
                <a className={classes.header__button} href='#testList'><MyButton>Начнем!</MyButton></a>
            </div>
        </div>
    );
};

export default Header;