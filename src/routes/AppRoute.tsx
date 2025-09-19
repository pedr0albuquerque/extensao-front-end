import { Routes, Route } from "react-router-dom";
import TelaLogin from "../pages/TelaLogin";
import TelaCadastro from "../pages/TelaCadastro";

export default function AppRoute(){
  return ( 
    <Routes>
      <Route path="/home" element={<TelaLogin/>}/>
      <Route path="/home/cadastrar" element={<TelaCadastro/>}/>
    </Routes>
  )
}