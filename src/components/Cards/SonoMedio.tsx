import { Card, Typography } from "@mui/material";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { verInfoPessoais } from "../../service/pessoa-endpoint";
import type { DadosSaudeDTO } from "../../types/DadosSaudeDTO";

export default function SonoMedio() {
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

  return (
    <Card className="d-flex flex-column justify-content-between" sx={{ flex: 1, p: 2 }}>
      <div className="d-flex justify-content-between">
        <Typography sx={{ color: "#0d7377", fontWeight: "normal" }}>
          Sono Médio
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
          <Moon className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div>
        <Typography>{info ? `${info.duracaoSono}h` : '-'}</Typography>
        <Typography variant="body2" color="gray">
          Horas por noite
        </Typography>
      </div>
    </Card>
  );
}