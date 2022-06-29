import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getJob } from '../services/joboffer.services';

const Joboffer = () => {

    const { id } = useParams();
    const [joboffer, setJoboffer] = useState();

    useEffect(() => {
        id && getJobFromService();
    }, [id]);

    const getJobFromService = async () => {
        try {
            const jobFromService = await getJob(id);
            setJoboffer(jobFromService.data.joboffer);
            console.log("🚀 ~ file: Joboffer.js ~ line 22 ~ getJobFromService ~ jobFromService.data.joboffer", jobFromService.data.joboffer)
        } catch (err) {

        }
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        {joboffer.image}

                    </Col>
                    <Col md={6}>
                        {joboffer.position}
                        {joboffer.description}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Joboffer;