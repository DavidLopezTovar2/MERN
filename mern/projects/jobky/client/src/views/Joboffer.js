import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { deleteJob, getJob } from '../services/joboffer.services';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/esm/Button';
import Swal from 'sweetalert2'

const Joboffer = () => {

    const { id } = useParams();
    const [joboffer, setJoboffer] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        id && getJobFromService();
    }, [id]);

    
    const editJoboffer = () => {
        navigate(`/joboffers/edit/${joboffer._id}`);
    }
    
    const deleteJoboffer = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0275d8',
            cancelButtonColor: '#d9534f',
            confirmButtonText: 'Si, eliminar'
        }).then(async(result) => {
            if (result.isConfirmed) {
                try{
                    await deleteJob(joboffer._id);
                    Swal.fire(
                        '¡Eliminado!',
                        'Tu oferta de trabajo ha sido eliminada',
                        'success'
                    );
                    navigate('/joboffers');
                }catch(err){
                    Swal.fire({
                        title: '¡Ups!',
                        text: 'No pudimos borrar la oferta, intenta de nuevo más tarde',
                        icon: 'error',
                        confirmButtonColor: '#0275d8'
                    })
                    navigate('/joboffers');
                }
            }
        })
    }
    const getJobFromService = async () => {
        try {
            const jobFromService = await getJob(id);
            setJoboffer(jobFromService.data.joboffer);
        } catch (err) {
            Swal.fire({
                title: '¡Ups!',
                text: 'No pudimos traer la oferta',
                icon: 'error',
                confirmButtonColor: '#0275d8'
            })
            navigate('/joboffers');
        }
    }

    return (
        <>
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col md={3} />
                    <Col md={3}>
                        <Image src={joboffer?.image} />
                    </Col>
                    <Col md={4}>
                        <h3 className="font-weight-bold font-italic">Vacante:</h3>
                        {joboffer?.position}
                        <h3 className="font-weight-bold font-italic">Nombre de la empresa:</h3>
                        {joboffer?.company}
                        <h3 className="font-weight-bold font-italic">Descripción:</h3>
                        {joboffer?.description}
                    </Col>
                    <Col md={3} />
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col className="d-flex justify-content-end">
                        <Button onClick={() => navigate('/joboffers')} className="mt-5 w-25" variant="secondary">Retroceder</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => alert('Not in use')} className="mt-5 w-25 p3" >Aplicar</Button>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col className="d-flex justify-content-end">
                        <Button onClick={() => deleteJoboffer()} className="mt-2 w-25" variant="danger">Eliminar oferta</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => editJoboffer()} className="mt-2 w-25 p3" variant="warning">Editar oferta</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Joboffer;