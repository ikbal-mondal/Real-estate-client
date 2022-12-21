import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsShow = () => {
    const data = useLoaderData()
    const {name} = data
    return (
        <div>
            <h1>details page</h1>
            <p>{name}</p>
        </div>
    );
};

export default DetailsShow;