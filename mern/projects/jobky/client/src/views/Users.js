import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { findUsersWithExperience, getUsers } from '../services/user.service';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import UsersTable from '../components/UsersTable';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersFromService();
    }, []);

    const getUsersFromService = async () => {
        try {
            const usersFromService = await getUsers();
            setUsers(usersFromService.data.users)
        } catch (err) {
            console.log(err);
            alert();
        }
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <h1 className="mt-4 d-flex align-items-center justify-content-center">Usuarios dentro de nuestra base de datos</h1>
                </Row>
                <UsersTable users={users} props='users' />                
            </Container>
        </>
    )
}

export default Users;