import { Routes, Route } from "react-router-dom";
import TelaLogin from "../pages/TelaLogin";
import TelaCadastro from "../pages/TelaCadastro";
import Dashboard from "../pages/Dashboard";

export default function AppRoute(){
  return ( 
    <Routes>
      <Route path="/" element={<TelaLogin/>}/>
      <Route path="/cadastrar" element={<TelaCadastro/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  )
}