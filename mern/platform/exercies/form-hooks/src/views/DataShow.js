import React, {useState} from 'react';
import styles from './Home.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

const ShowData = ({firstName, lastName, email, password}) => {
    return(
        <div>
            <h2>
                From your data
            </h2>
            <div className={styles["data-container"]}>
                <h6>Fisrt Name:</h6>
                <p>{firstName}</p>
            </div>
            <div className={styles["data-container"]}>
                <h6>Last Name</h6>
                <p>{lastName}</p>
            </div>
            <div className={styles["data-container"]}>
                <h6>Email:</h6>
                <p>{email}</p>
            </div>
            <div className={styles["data-container"]}>
                <h6>Password</h6>
                <p>{password}</p>
            </div>
        </div>
    )
}

export default ShowData;