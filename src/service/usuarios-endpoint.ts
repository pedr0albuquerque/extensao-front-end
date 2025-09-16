import type { UsuarioDTO } from "../types/UsuarioDTO.ts";
import api from "./api.ts";

export const cadastrarUsuario = async (usuario: UsuarioDTO): Promise<UsuarioDTO> => {
  try {
    const response = await api.post("/login",usuario);
    return response.data
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;  
  }
}

