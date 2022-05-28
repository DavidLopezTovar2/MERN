import React, {Component} from 'react';
import styles from './PersonCard.module.scss';

class PersonCard extends Component{
    render(){
        const{firstName,lastName,age,hairColor} = this.props;
        return(
            <div>
                <div className={styles["names-container"]}>
                    <h1>{this.props.firstName},</h1>
                    <h1>{this.props.lastName} </h1>
                </div>
                <h5>Age: {this.props.age}</h5>
                <h5>Hair color: {this.props.hairColor}</h5>
            </div>
        )
    }
}

export default PersonCard;