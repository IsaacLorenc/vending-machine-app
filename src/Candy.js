import React from 'react';
import { Link } from 'react-router-dom';

const Candy = () => {
  return (
    <div>
      <h2>Candy</h2>
      <p>Sweet and delicious candy just for you!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Candy;