import type { DadosSaudeDTO } from "../types/DadosSaudeDTO";
import api from "./api";

export const verInfoPessoais = async (usuarioId: number): Promise<DadosSaudeDTO> => {
  try {
    const response = await api.get(`pessoas/ver-info-pessoais/${usuarioId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar informações:", error);
    throw error;
  }
}

export const atualizarInfoPessoais = async (usuarioId: number, dadosSaudeDTO: DadosSaudeDTO) => {
  try {
    const response = await api.post(`pessoas/info-pessoais/${usuarioId}`, dadosSaudeDTO);
    
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar informacoes:", error);
    throw error;  
  }
}