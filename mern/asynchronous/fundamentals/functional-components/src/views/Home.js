import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './Home.module.scss';
import CommentsList from './CommentsList';

const Home = () => {

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [indexForEdition, setIndexForEdition] = useState();

    const handlerComment = (e) => {
        console.log(e.target);
        setComment(e.target.value);        
    }

    const sendComments = (e) => {
        e.preventDefault();
        if(editMode){
            const editComments = [...comments];
            editComments[indexForEdition] = comment;
            setComments(editComments);
            setEditMode(false);
            setIndexForEdition();
        } else {
            setComments([...comments, comment]);
        }
        setComment('');
    }

    const removeComments = (index) =>{
        const newComments = comments?.filter((comments,idx) => idx !== index )
        setComments(newComments);
    }

    const editComment = (index) => {
        setComment(comments[index]);      
        setIndexForEdition(index);
    }

    return(
        <div className={styles["form-container"]}>
                <Form onSubmit={(e) => sendComments(e)}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>What's your thought  </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Place your comment" 
                            value={comment} 
                            name='comment'
                            onChange={(e) => handlerComment(e) }
                        />
                    </Form.Group>                    
                    <Button variant="secondary" type="submit">
                        Submit comment
                    </Button>
                </Form>
                <CommentsList 
                    comments={comments}
                    removeComments={removeComments}
                    editComment={editComment}
                    setEditMode={setEditMode}
                />
            </div>
    )
}

export default Home;