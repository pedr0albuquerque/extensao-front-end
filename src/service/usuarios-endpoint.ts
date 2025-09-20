import type { UsuarioDTO } from "../types/UsuarioDTO.ts";
import type { PessoaDTO } from "../types/PessoaDTO.ts";
import api from "./api.ts";

export const loginUsuario = async (usuario: UsuarioDTO): Promise<UsuarioDTO> => {
  try {
    const response = await api.post("/", usuario);
    return response.data
  } catch (error) {
    console.error("Erro ao logar com usuário:", error);
    throw error;  
  }
}

export const cadastrarUsuario = async (usuario: UsuarioDTO, pessoa: PessoaDTO): Promise<UsuarioDTO> => {
try {
    const usuarioResponse = await api.post("/cadastrar",usuario);
    const id = usuarioResponse.data.id;
    const pessoaResponse = await api.post("/pessoas", 
      {...pessoa,
        idUsuario: id
      }
    );
    return usuarioResponse.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;  
  }
}
