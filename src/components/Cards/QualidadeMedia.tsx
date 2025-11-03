import { Card, Typography } from "@mui/material";
import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { verInfoPessoais } from "../../service/pessoa-endpoint";
import type { DadosSaudeDTO } from "../../types/DadosSaudeDTO";

export default function QualidadeMedia() {
  const [info, setInfo] = useState<DadosSaudeDTO | null>(null);
  const [qualidade, setQualidade] = useState<string>("-");

  useEffect(() => {
    const buscarInfo = async () => {
      try {
        const usuarioId = localStorage.getItem("usuarioId");
        if (usuarioId) {
          const data = await verInfoPessoais(Number(usuarioId));
          setInfo(data);
          calcularQualidade(data);
        }
      } catch (error) {
        console.error("Erro ao buscar informações:", error);
      }
    };

    buscarInfo();
  }, []);

  const calcularQualidade = (info: DadosSaudeDTO) => {
    // Avalia com base nas informações
    if (info.nivelAtividadeFisica === "ativo" && info.duracaoSono! >= 7 && info.nivelEstresse === "baixo") {
      setQualidade("Excelente");
    } else if (info.nivelAtividadeFisica === "moderado" && info.duracaoSono! >= 6) {
      setQualidade("Boa");
    } else if (info.nivelAtividadeFisica === "sedentario" || info.duracaoSono! < 6) {
      setQualidade("Regular");
    } else {
      setQualidade("Indeterminada");
    }
  };

  return (
    <Card className="d-flex flex-column justify-content-between" sx={{ flex: 1, p: 2 }}>
      <div className="d-flex justify-content-between">
        <Typography sx={{ color: "#0d7377", fontWeight: "normal" }}>
          Qualidade Média
        </Typography>

        <div
          style={{
            backgroundColor: "#0d7377", 
            borderRadius: "50%",
            padding: "8px",
            marginRight: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div>
        <Typography>{qualidade}</Typography>
        <Typography variant="body2" color="gray">
          {info ? "Baseado nas suas informações" : "Faça sua primeira avaliação"}
        </Typography>
      </div>
    </Card>
  );
}