import React, { FC } from 'react';
import classes from './TestListItem.module.scss';
import { TestItemProps } from '../../types/myTest';
import TestListItemInput from '../TestListItemInput/TestListItemInput';

const TestListItem: FC<TestItemProps> = ({ id, question, answerFirst, answerSecond}) => {
  return (
    <div className={classes.testListItem__labelGradient}>
        <div className={classes.testListItem}>
            <p className={classes.testListItem__label}>{id}. {question}</p>
            <TestListItemInput id={id} answer={answerFirst} value='1'/>
            <TestListItemInput id={id} answer={answerSecond} value='2'/>
        </div>
    </div>
  )
}

export default TestListItem;