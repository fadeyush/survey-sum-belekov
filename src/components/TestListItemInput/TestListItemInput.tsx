import React, { FC } from 'react';
import classes from './TestListItemInput.module.scss'
import { TestListItemInputProps } from '../../types/testListItemInput';

const TestListItemInput: FC<TestListItemInputProps> = ({answer, value, id}) => {
    return (
        <label className={classes.testListItemInput}>
            <input name={id.toString()} type='radio' value={value}/>
            {answer}
        </label>
    );
};

export default TestListItemInput;