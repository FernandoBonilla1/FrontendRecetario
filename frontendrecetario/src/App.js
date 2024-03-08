import React from 'react';
import Header from './Components/Shared/Header/Header.jsx';

import Almuerzos from './Components/Almuerzos/Almuerzos.jsx';
import Pasteles from './Components/Pasteles/Pasteles.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/Almuerzos" element={<Almuerzos />} />
          <Route path="/Pasteles" element={<Pasteles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



