import "./App.css";
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/home/home.jsx"
import HomeCarta from "./pages/homeCarta/homeCarta.jsx"


function App() {


  return (
    <div className="App" > 
    <Routes>
      {/* routes publics */}
      <Route path="/" element={<Home />} />
      <Route path="/carta" element={<HomeCarta />} />
    </Routes>
  </div>
  );
}

export default App;
