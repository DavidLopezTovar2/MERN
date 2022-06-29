import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';

const JobofferCard = ({ joboffer, idx }) => {

    const navigate = useNavigate();

    const { _id } = joboffer;

    const navigateToJob = () => {    
        navigate(`/job/${_id}`);
    }

    return (
        <Col>
            <Card className="mt-4" id={idx} style={{ width: '16rem' }}>
                <Card.Img className="card-image" variant="top" src={joboffer.image} />
                <Card.Body>
                    <Card.Title>
                        {joboffer.position}
                    </Card.Title>
                    <Card.Text style={{height: '90px' }} >
                        {joboffer.description}
                    </Card.Text>
                    <Button onClick={() => navigateToJob()} variant="primary">Leer más</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default JobofferCard;