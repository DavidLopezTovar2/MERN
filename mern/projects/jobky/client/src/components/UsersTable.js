import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { findUsersWithExperience } from '../services/user.service';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UsersTable = ({ users, props }) => {

    const navigate = useNavigate();

    const viewUser = (id) => {
        navigate(`/user/${id}`)
    }

    const renderTable = () => {
        console.log(users.length)
        if (users.length != 0) {
            return <Table className="mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ width: '11rem' }}>Nombre</th>
                        <th style={{ width: '11rem' }}>Experience</th>
                        <th>Descripción</th>
                        <th style={{ width: '7rem' }} />
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.name}</td>
                            <td>{user.experience}</td>
                            <td>{user.description}</td>
                            <td><Button onClick={() => viewUser(user?._id)}>Ver perfil</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        } else if (props === 'joboffer') {
            return Swal.fire({
                title: 'Lo siento',
                text: 'No hay candidatos para esta posición',
                icon: 'warning',
                confirmButtonColor: '#0275d8'
            }).then(function() {navigate('/users')});

        }
    }

    return (
        <>
            {renderTable()}
        </>
    )
}

export default UsersTable;