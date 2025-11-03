import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { verInfoPessoais } from "../../service/pessoa-endpoint";
import type { DadosSaudeDTO } from "../../types/DadosSaudeDTO";

export default function VisualizarInfoPessoais() {
  const [info, setInfo] = useState<DadosSaudeDTO | null>(null);

  useEffect(() => {
    const buscarInfo = async () => {
      try {
        const usuarioId = localStorage.getItem("usuarioId");
        if (usuarioId) {
          const data = await verInfoPessoais(Number(usuarioId));
          setInfo(data);
        }
      } catch (error) {
        console.error("Erro ao buscar informações:", error);
      }
    };

    buscarInfo();
  }, []);

  if (!info) return <div>Carregando...</div>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        width: "100%",
        background: "#b8d4d8",
        color: "white",
        fontSize: 24,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          gap: 2,
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <Typography variant="h5" sx={{ color: "#0d7377", marginBottom: "1rem" }} className="fw-normal">
          Informações de Saúde
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>Duração do Sono</Typography>
          <Typography sx={{ color: "#0d7377", fontSize: "1rem" }}>{info.duracaoSono} horas</Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>Pressão Arterial</Typography>
          <Typography sx={{ color: "#0d7377", fontSize: "1rem" }}>{info.pressaoArterial}</Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>Frequência Cardíaca</Typography>
          <Typography sx={{ color: "#0d7377", fontSize: "1rem" }}>{info.frequenciaCardiaca} bpm</Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>Nível de Atividade Física</Typography>
          <Typography sx={{ color: "#0d7377", fontSize: "1rem" }}>{info.nivelAtividadeFisica}</Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>Nível de Estresse</Typography>
          <Typography sx={{ color: "#0d7377", fontSize: "1rem" }}>{info.nivelEstresse}</Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>Distúrbio do Sono</Typography>
          <Typography sx={{ color: "#0d7377", fontSize: "1rem" }}>{info.disturbio}</Typography>
        </Box>
      </Box>
    </Box>
  );
}