import { 
  Card, 
  TextField,
  Box,
  Typography,
 } from "@mui/material";
 import ButtonPrimary from "../components/Button/ButtonPrimary";
import { useState } from "react";
import { loginUsuario } from "../service/usuarios-endpoint";
import { useNavigate } from "react-router-dom";

export default function TelaLogin(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const usuario = {email,senha};
    const response = await loginUsuario(usuario);
    if(!response){
      throw new Error("Nao foi possivel fazer login")
    }
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
          background: "linear-gradient(135deg, #D9FBEA, #D9F1FB)",
          color: "white",
          fontSize: 24,
        }}
      >
        <form
          className="d-flex flex-column justify-center align-items-center"
        >
          <Box
            className="d-flex flex-column justify-center align-items-center bg-white p-5 rounded-2"
          >
            <Box 
              className="text-center"
              style={{ color: "#107535ff"}}
            >
              <Typography variant="h4" className="fw-bold">Saude & Bem Estar</Typography>
              <Typography variant="body2">
                Faça login para continuar
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#107535ff", // quando clica (foco)
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#107535ff", // label no foco
                  },"& .MuiInput-underline:before": {
                    borderBottomColor: "gray", // cor inicial
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#107535ff", // cor ao passar mouse
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#107535ff", // cor quando focado
                  },
                }}
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#107535ff", // quando clica (foco)
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#107535ff", // label no foco
                  },"& .MuiInput-underline:before": {
                    borderBottomColor: "gray", // cor inicial
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#107535ff", // cor ao passar mouse
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#107535ff", // cor quando focado
                  },
                }}
                label="Senha"
                variant="standard"
                value={senha}
                type="password"
                onChange={(e) => setSenha(e.target.value)}
              />
              <Box 
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <p className="fw-light text-dark fs-6">
                  Não tem cadastro?
                </p>
                <Typography
                  sx={{
                    color: "#107535ff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    }
                  }}
                  onClick={() => navigate("/home/cadastrar")}
                >
                  Cadastre-se
                </Typography>
              </Box>    
              <ButtonPrimary
                value="Login"
                onClick={handleLogin}
              />           
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}