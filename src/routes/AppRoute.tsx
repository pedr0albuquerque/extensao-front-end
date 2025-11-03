import { Routes, Route } from "react-router-dom";
import TelaLogin from "../pages/TelaLogin";
import TelaCadastro from "../pages/TelaCadastro";
import Dashboard from "../pages/Dashboard";
import FormNovaAvaliacao from "../components/Cards/NovaAvaliacao/FormNovaAvaliacao";
import VisualizarInfoPessoais from "../components/Cards/VisualizarInfoPessoais";

export default function AppRoute(){
  return ( 
    <Routes>
      <Route path="/" element={<TelaLogin/>}/>
      <Route path="/cadastrar" element={<TelaCadastro/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/nova-avaliacao" element={<FormNovaAvaliacao />}/>
      <Route path="/visualizar-info" element={<VisualizarInfoPessoais />}/>
    </Routes>
  )
}