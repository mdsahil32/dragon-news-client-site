import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Accept Term & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in architecto, sint quod voluptatem incidunt voluptates nisi ratione adipisci quas ab accusamus aspernatur maxime ducimus, modi aliquid fugit! Quia, laboriosam?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;