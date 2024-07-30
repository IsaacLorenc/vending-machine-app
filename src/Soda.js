import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => {
  return (
    <div>
      <h2>Soda</h2>
      <p>Refreshing soda to quench your thirst!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Soda;