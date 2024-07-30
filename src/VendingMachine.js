import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
        <p><Link to="/chips">Chips</Link></p>
        <p><Link to="/soda">Soda</Link></p>
        <p><Link to="/candy">Candy</Link></p>
    </div>
  );
};

export default VendingMachine;