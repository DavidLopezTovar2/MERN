import React, {Component} from 'react';
import styles from './PersonCard.module.scss';
import Button from 'react-bootstrap/Button'

class PersonCard extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
        this.addAge = this.addAge.bind(this);
    }

    addAge = () => {           
        this.setState({age: this.state.age+1});
    }

    render(){
        const{firstName,lastName,age,hairColor} = this.props;
        return(
            <div>
                <div className={styles["names-container"]}>
                    <h1>{this.props.firstName},</h1>
                    <h1>{this.props.lastName} </h1>
                </div>
                <h5>Age: {this.state.age}</h5>
                <h5>Hair color: {this.props.hairColor}</h5>
                <Button 
                    variant="primary"
                    onClick={ this.addAge }>
                        BirthDay button for {this.props.lastName}
                </Button>
            </div>
        )
    }
}

export default PersonCard;