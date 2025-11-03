import { useEffect, useState } from "react";
import type { DadosSaudeDTO } from "../../../types/DadosSaudeDTO";
import Box from "@mui/material/Box";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import ButtonPrimary from "../../Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { atualizarInfoPessoais } from "../../../service/pessoa-endpoint";


export default function FormNovaAvaliacao(){
  const navigate = useNavigate();

  const [form, setForm] = useState<DadosSaudeDTO>({
    duracaoSono: 0,
    pressaoArterial: "",
    frequenciaCardiaca: 0,
    nivelAtividadeFisica: "",
    nivelEstresse: "",
    disturbio: "",
  });

  const handleCadastrar = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const id = localStorage.getItem("usuarioId");

    await atualizarInfoPessoais(Number(id), form);
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
            <Typography sx={{ color: "#0d7377", marginBottom: "8px"}} className="fw-normal">
              Avaliacao do sono
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
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
                  label="Duracao do sono"
                  variant="outlined"
                  size="small"
                  value={form.duracaoSono}
                  onChange={(e) => setForm({...form, duracaoSono: Number(e.target.value)})}
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
                      borderBottomColor: "#0d7377", // cor ao passar mouse
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0d7377",
                    },
                  }}
                  label="Pressao Arterial"
                  variant="outlined"
                  size="small"
                  value={form.pressaoArterial}
                  onChange={(e) => setForm({...form, pressaoArterial: e.target.value})}
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
                      borderBottomColor: "#0d7377", // cor ao passar mouse
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0d7377",
                    },
                  }}
                  label="Frequencia Cardiaca"
                  variant="outlined"
                  size="small"
                  value={form.frequenciaCardiaca}
                  onChange={(e) => setForm({...form, frequenciaCardiaca: Number(e.target.value)})}
                  />
              </div>

              <FormControl>
                <FormLabel 
                  id="atividade-fisica"
                  sx={{
                    color: "gray",
                    '&.Mui-focused': {
                      color: "#0d7377",
                    }
                  }}
                >
                  Nivel de atividade fisica
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="atividade-fisica"
                  name="atividade-fisica-group"
                  value={form.nivelAtividadeFisica}
                  onChange={(e) => setForm({...form, nivelAtividadeFisica: e.target.value})}
                >
                  <FormControlLabel 
                    value="sedentario" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Sedentario" 
                  />
                  <FormControlLabel 
                    value="moderado" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Moderado" 
                  />
                  <FormControlLabel 
                    value="ativo" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Ativo" 
                  />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel 
                  id="nivel-estresse"
                  sx={{
                    color: "gray",
                    '&.Mui-focused': {
                      color: "#0d7377",
                    }
                  }}
                >
                  Nível de Estresse
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="nivel-estresse"
                  name="nivel-estresse-group"
                  value={form.nivelEstresse}
                  onChange={(e) => setForm({...form, nivelEstresse: e.target.value})}
                >
                  <FormControlLabel 
                    value="baixo" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Baixo" 
                  />
                  <FormControlLabel 
                    value="moderado" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Moderado" 
                  />
                  <FormControlLabel 
                    value="alto" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Alto" 
                  />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel 
                  id="disturbio-sono"
                  sx={{
                    color: "gray",
                    '&.Mui-focused': {
                      color: "#0d7377",
                    }
                  }}
                >
                  Distúrbio do Sono
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="disturbio-sono"
                  name="disturbio-sono-group"
                  value={form.disturbio}
                  onChange={(e) => setForm({...form, disturbio: e.target.value})}
                >
                  <FormControlLabel 
                    value="insonia" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Insônia" 
                  />
                  <FormControlLabel 
                    value="apneia" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Apneia" 
                  />
                  <FormControlLabel 
                    value="outro" 
                    control={
                      <Radio 
                        sx={{
                          '&.Mui-checked': {
                            color: "#0d7377",
                          }
                        }}
                      />
                    } 
                    sx={{color: "gray"}}
                    label="Outro" 
                  />
                </RadioGroup>
              </FormControl>

              <ButtonPrimary
                value="Ver Resultado"
                onClick={handleCadastrar}
              />  
            </Box>
          </Box>
        </form>
      </Box>
    </>
  )

}