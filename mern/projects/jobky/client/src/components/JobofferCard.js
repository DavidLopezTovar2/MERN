import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col'

const JobofferCard = ({ joboffer, idx }) => {


    return (
        <Col>
            <Card id={idx} style={{ width: '16rem' }}>
                <Card.Img className="card-image" variant="top" src={joboffer.image} />
                <Card.Body>
                    <Card.Title>{joboffer.position}</Card.Title>
                    <Card.Text>{joboffer.description}</Card.Text>
                    <Button variant="primary">Leer más</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default JobofferCard;