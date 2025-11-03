import type { UsuarioDTO } from "../types/UsuarioDTO.ts";
import type { PessoaDTO } from "../types/PessoaDTO.ts";
import api from "./api.ts";

export const loginUsuario = async (usuario: UsuarioDTO) => {
  try {
    const response = await api.post("/", usuario);
    return {
      data: response.data,
      responseStatus: response.status
    }
  } catch (error) {
    console.error("Erro ao logar com usuário:", error);
    throw error;  
  }
}

export const cadastrarUsuario = async (usuario: UsuarioDTO, pessoa: PessoaDTO) => {
  try {
    const usuarioResponse = await api.post("/cadastrar",usuario);
    console.log(usuarioResponse);
    const id = usuarioResponse.data.id;
    console.log(id)
    const pessoaResponse = await api.post("/pessoas", 
      {...pessoa,
        idUsuario: id
      }
    );
    return usuarioResponse;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;  
  }
}

export const getUsuario = async (usuarioId: string) => {
  try {
    const response = await api.get(`/${usuarioId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error;  
  }
}
