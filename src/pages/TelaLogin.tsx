import { 
  Card, 
  TextField,
  Box,
 } from "@mui/material";
 import ButtonPrimary from "../components/ButtonPrimary";
import { useState } from "react";

export default function TelaLogin(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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
          height: "100vh",
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
              <h1 className="fw-bold">Saude & Bem Estar</h1>
              <p className="fw-">Faça login para continuar</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Email"
                variant="standard"
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
              />
              <TextField
                label="Senha"
                variant="standard"
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
              />
              <ButtonPrimary
                value="Entrar"
              />
              <Box 
                className="d-flex gap-1"
              >
                <p 
                  className="fw-light text-dark fs-6"  
                >
                  Não tem cadastro?
                </p>
                <a
                  style={{
                    color: "#107535ff",
                    fontWeight: "600",
                    fontSize: "16px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >Cadastre-se</a>  
              </Box>               
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}