import React from 'react';
import { useLoaderData } from 'react-router';

const Postdetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <h1>{details.title}</h1>
            <p>{details.body}</p>
        </div>
    );
};

export default Postdetails;