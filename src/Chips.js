import React from 'react';
import { Link } from 'react-router-dom';

const Chips = () => {
    return (
        <div>
            <h2>Chips</h2>
            <p>Enjoy a crunchy bag of chips!</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );

};

export default Chips;