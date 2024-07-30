import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Chips from './Chips';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Candy from './Candy';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/chips' element={<Chips/>}/>
          <Route exact path="/" element={<VendingMachine/>}/>
          <Route path="/soda" element={<Soda/>}/>
          <Route path="/candy" element={<Candy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
