import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './Home.module.scss';
import CommentsList from './CommentsList';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            comment: '',
            comments: []
        }
        this.removeComments = this.removeComments.bind(this);
    }

    handlerComment(e){
        this.setState({ comment: e.target.value });
    }

    sendComments(e){
        e.preventDefault();
        this.setState({comments: [...this.state.comments, this.state.comment], comment: ''});
    }

    removeComments(index){
        const newComments = [...this.state.comments];
        this.setState({comments: newComments?.filter((comments,idx) => idx !== index )});
    }

    render() {        
        return (
            <div className={styles["form-container"]}>
                <Form onSubmit={(e) => this.sendComments(e)}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>What's your thought  </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Place your comment" 
                            value={this.state.comment} 
                            onChange={(e) => this.handlerComment(e) }
                        />
                    </Form.Group>                    
                    <Button variant="secondary" type="submit">
                        Submit comment
                    </Button>
                </Form>
                <CommentsList 
                    comments={this.state.comments}
                    removeComments={this.removeComments}
                />
            </div>
        )
    }
}

export default Home;