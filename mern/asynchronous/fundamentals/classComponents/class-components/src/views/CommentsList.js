import React, {Component} from 'react';
import trashicon from '../trash.png';
import styles from './Home.module.scss';

class CommentsList extends Component{


    render(){
        const{ comments} = this.props;
        return(
            <div>
                <ul>
                    {
                        comments?.map((comment, index) => (
                            <li key={index}>
                                <div className={styles["comment-container"]}>
                                    {comment}
                                    <img src={trashicon} alt="trashicon" onClick={() => this.props.removeComments(index)}/>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default CommentsList;
