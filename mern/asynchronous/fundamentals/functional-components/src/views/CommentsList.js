import React from 'react';
import trashicon from '../trash.png';
import editIcon from '../pencil.png';
import styles from './Home.module.scss';

const CommentsList = ({ comments, removeComments, editComment, setEditMode}) =>{
    
    const handlerEdition = (index) => {
        editComment(index);
        setEditMode(true);
    }

    return (
        <div>
                <ul>
                    {
                        comments?.reverse().map((comment, index) => (
                            <li key={index}>
                                <div className={styles["comment-container"]}>
                                    {comment}
                                    <div>
                                        <img src={trashicon} alt="trashicon" onClick={() => removeComments(index)}/>
                                        <img src={editIcon} alt="Pencil" onClick={() => handlerEdition(index)} />
                                    </div>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>
    )
}

export default CommentsList;
