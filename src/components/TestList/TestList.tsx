import React, { FC, useState } from 'react';
import classes from './TestList.module.scss';
import { TestItemProps } from '../../types/myTest';
import { getTestList } from '../../assets/info/getTestList';
import TestListItem from '../TestListItem/TestListItem';
import MyButton from '../UI/button/MyButton';
import MyModal from '../UI/modal/MyModal';
import Result from '../Result/Result';

const TestList: FC = () => {
    const testList: TestItemProps[] = getTestList();
    const [modalError, setModalError] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);

    const handleModalErr = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const form = document.querySelector('form');
        const formData = new FormData(form!);
        const res = Object.fromEntries(formData.entries());

        if(Object.keys(res).length < 30) {
            setModalError(true);
        } else {
            setModalSuccess(true)
            console.log(JSON.stringify(res))
        }
    };
    
    return (
        <form id='testList' className={classes.testForm}>
            {testList.map(testItem=>
                <TestListItem id={testItem.id} key={testItem.id} question={testItem.question} answerFirst={testItem.answerFirst} answerSecond={testItem.answerSecond}/>    
            )}
            <MyButton className={classes.testForm__submit} onClick={handleModalErr}>Узнать результат</MyButton>
            <MyModal className={classes.testForm__error} visible={modalError} setVisible={setModalError}>Ответьте, пожалуйста, на все вопросы!</MyModal>
            <MyModal visible={modalSuccess} setVisible={setModalSuccess}><Result setVisible={setModalSuccess}/></MyModal>
        </form>
    );
};

export default TestList;