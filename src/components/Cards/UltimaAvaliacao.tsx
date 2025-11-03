import { Card, Typography } from "@mui/material";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verInfoPessoais } from "../../service/pessoa-endpoint";
import type { DadosSaudeDTO } from "../../types/DadosSaudeDTO";

export default function UltimaAvaliacao() {
  const navigate = useNavigate();
  const [info, setInfo] = useState<DadosSaudeDTO | null>(null);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    buscarInfo();
  }, []);

  const handleClick = () => {
    if (info) {
      navigate("/visualizar-info");
    }
  };

  return (
    <Card 
      className="d-flex flex-column justify-content-between" 
      sx={{ 
        flex: 1, 
        p: 2, 
        height: '180px',
        cursor: info ? 'pointer' : 'default',
        '&:hover': info ? {
          backgroundColor: '#f5f5f5'
        } : {}
      }}
      onClick={handleClick}
    >
          <div className="d-flex justify-content-between">
            <Typography sx={{ color: "#0d7377", fontWeight: "normal" }}>
              Última Avaliação
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
              <Calendar className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div>
            {loading ? (
              <Typography variant="body2" color="gray">Carregando...</Typography>
            ) : info ? (
              <>
                <Typography variant="body2" color="gray">
                  Clique para ver os detalhes
                </Typography>
              </>
            ) : (
              <>
                <Typography>-</Typography>
                <Typography variant="body2" color="gray">
                  Nenhuma avaliação ainda
                </Typography>
              </>
            )}
          </div>
        </Card>
  );
}