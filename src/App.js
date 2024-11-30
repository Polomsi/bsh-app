import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterSelection from './pages/CharacterSelection';
import CharacterSheet from './pages/CharacterSheet';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal: Pantalla de selección de personajes */}
        <Route path="/" element={<CharacterSelection />} />

        {/* Ruta dinámica: Hoja de personaje específica */}
        <Route path="/character/:id" element={<CharacterSheet />} />
      </Routes>
    </Router>
  );
}

export default App;