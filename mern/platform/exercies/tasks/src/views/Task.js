import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './Home.module.scss';
import Button from 'react-bootstrap/Button';

const Task = ({ tasks, values, deleteTask, updateValues }) => {

    return (
        <div className="mt-10">
            {tasks?.map((task, idx) => (
                <div className="d-flex justify-content-center text-center" key={idx}>
                    <p className={values[idx]? styles.normal: styles.line}>{task}</p>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check 
                            type="checkbox"
                            onChange={() => updateValues(idx)}
                        />
                    </Form.Group>
                    <Button onClick={() => deleteTask(idx)}>
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default Task;