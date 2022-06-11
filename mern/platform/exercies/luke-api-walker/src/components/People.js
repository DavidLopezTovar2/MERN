import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getApiParameters } from '../services/walker.service';

const People = () => {

    const [person, setPerson] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const { id } = useParams();

    const getPeopleFromService = async () => {
        try {
            const people = await getApiParameters('people', id);
            setPerson(people);
        } catch (err) {
            setErrorMsg(err.message)
        }
    }

    useEffect(() => {
        id && getPeopleFromService();
    }, [])

    return (
        <div>
            <p>
                Name: {person.name}
            </p>
            <p>
                Height: {person.height}
            </p>
            <p>
                Mass: {person.mass}
            </p>
            <p>
                Eye color: {person.eye_color}
            </p>
            <p>Birth: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
        </div>
    )

}

export default People;