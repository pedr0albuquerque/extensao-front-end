import { useState } from "react";
import { 
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  InputAdornment,
  FormControl
 } from "@mui/material";
 import ButtonPrimary from "../components/Button/ButtonPrimary";
 import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../service/usuarios-endpoint";
import type { UsuarioDTO } from "../types/UsuarioDTO";
import type { PessoaDTO } from "../types/PessoaDTO";


export default function TelaCadastro(){
  const [nome , setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState<number>(0);
  const [ocupacao, setOcupacao] = useState("");
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const usuario: UsuarioDTO = {email,senha};
    const pessoa: PessoaDTO = {
      nome,
      sexo,
      idade,
      ocupacao,
      peso,
      altura,
    }
    const response = await cadastrarUsuario(usuario,pessoa);

    
    localStorage.setItem("usuarioId", response.data.id);
    navigate("/dashboard");
    
  }

  return(
    <>
      <Box
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          minHeight: "100vh",
          flexDirection: "column",
          width: "100%",
          background: "#b8d4d8",
          color: "white",
          fontSize: 24,
        }}
      >
        <form className="d-flex flex-column justify-center align-items-center">
          <Box
            className="d-flex flex-column justify-center align-items-center bg-white p-5 rounded-2"
          >
            <Typography variant="h5" sx={{ color: "#0d7377", marginBottom: "8px"}} className="fw-bold">
              Cadastro
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <div>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0d7377",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#0d7377",
                    },"& .MuiInput-underline:before": {
                      borderBottomColor: "gray",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#0d7377", // cor ao passar mouse
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0d7377",
                    },
                  }}
                  label="Nome"
                  variant="outlined"
                  size="small"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  />
              </div>
              <div>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0d7377",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#0d7377",
                    },"& .MuiInput-underline:before": {
                      borderBottomColor: "gray",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#0d7377",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0d7377",
                    },
                  }}
                  label="Email"
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0d7377",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#0d7377",
                    },"& .MuiInput-underline:before": {
                      borderBottomColor: "gray",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#0d7377",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0d7377",
                    },
                  }}
                  label="Senha"
                  variant="outlined"
                  size="small"
                  value={senha}
                  type="password"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <FormControl fullWidth size="small">
                <InputLabel id="sexo-label">Sexo</InputLabel>
                <Select
                  labelId="sexo-label"
                  label="Sexo"
                  value={sexo}
                  variant="outlined"
                  onChange={(e) => setSexo(e.target.value)}
                >
                  <MenuItem value="Masculino">
                    <em>Masculino</em>
                  </MenuItem>
                  <MenuItem value="Feminino">
                    <em>Feminino</em>
                  </MenuItem>
                </Select>
              </FormControl>
              <div>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0d7377",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#0d7377",
                    },
                  }}
                  label="Idade"
                  size="small"
                  value={idade}
                  onChange={(e) => setIdade(parseInt(e.target.value))}
                />
              </div>
              <div>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0d7377",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#0d7377",
                    },
                  }}
                  label="Ocupação"
                  size="small"
                  value={ocupacao}
                  onChange={(e) => setOcupacao(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0d7377",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#0d7377",
                      },
                    }}
                  label="Peso"
                  size="small"
                  value={peso}
                  onChange={(e) => setPeso(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <TextField
                  sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0d7377",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#0d7377",
                      },
                    }}
                  label="Altura"
                  size="small"
                  value={altura}
                  onChange={(e) => setAltura(parseFloat(e.target.value))}
                />
              </div>

              <ButtonPrimary
                value="Cadastrar"
                onClick={handleSubmit}
              />
              <Box 
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <p className="fw-light text-dark fs-6">
                  Tem uma conta?
                </p>
                <Typography
                  sx={{
                    color: "#0d7377",
                    fontWeight: "bold",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    }
                  }}
                  onClick={() => navigate("/")}
                >
                  Entrar
                </Typography>
              </Box>   
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}