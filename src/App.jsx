import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.JSX";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
