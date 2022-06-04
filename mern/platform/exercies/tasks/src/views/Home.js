import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Home.module.scss';
import Task from './Task';

const Home = () => {


    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [values, setValues] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks,task]);
        setValues([...values,true])        
        setTask('');
    }

    const updateValues = (index, valor) => {
        console.log("index" + index);
        setValues(values.map((value,idx)=>{
            if(index === idx){
                if(!value)
                    return true;
                else 
                    return false;
            }
            else{
                return value;
            }
        }))
        console.log(values);
    }

    const deleteTask = (index) => {
        setTasks(tasks?.filter((task,idx)=> idx !== index));
        setValues(values?.filter((value,idx)=> idx !== index));
    }

    return (
        <div className={styles.container}>
            <Form onSubmit={(e) => addTask(e)}>                
                <Form.Group className="mb-3" controlId="formGridTask">
                    <Form.Label>Tarea</Form.Label>
                    <Form.Control
                        type="text"
                        value={task}
                        onChange = { (e) => setTask(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
            <Task
                tasks={tasks}
                values={values}
                deleteTask={deleteTask}
                updateValues = {updateValues}
            />
                
            
        </div>
    )
}

export default Home;