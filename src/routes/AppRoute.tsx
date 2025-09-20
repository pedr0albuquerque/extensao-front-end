import { Routes, Route } from "react-router-dom";
import TelaLogin from "../pages/TelaLogin";
import TelaCadastro from "../pages/TelaCadastro";

export default function AppRoute(){
  return ( 
    <Routes>
      <Route path="/" element={<TelaLogin/>}/>
      <Route path="/cadastrar" element={<TelaCadastro/>}/>
    </Routes>
  )
}