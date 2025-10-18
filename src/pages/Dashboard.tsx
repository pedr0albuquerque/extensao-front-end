import { Box, Card, Typography } from "@mui/material";
import { Moon, Calendar, TrendingUp } from "lucide-react";
import ButtonSecondary from "../components/Button/ButtonSecondary";
import UltimaAvaliacao from "../components/Cards/UltimaAvaliacao";
import QualidadeMedia from "../components/Cards/QualidadeMedia";
import SonoMedio from "../components/Cards/SonoMedio";
import NovaAvaliacao from "../components/Cards/NovaAvaliacao";
import Historico from "../components/Cards/Historico";
import DicaDia from "../components/Cards/DicaDIa";


export default function Dashboard(){

  return(
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        width: "100%",
        background: "#b8d4d8",
        color: "white",
        fontSize: 24,
        padding: "6rem 12rem",
        rowGap: 2,
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          padding: "8px 16px"
        }}
      >
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
          <Moon className="w-6 h-6 text-white" />
        </div>

        <div>
          <Typography
            color="#0d7377"
            className="fw-bold"
          >
          Ola, Usuario
          </Typography>
          <Typography variant="body2" color="gray">
            Bem vindo ao seu painel de controle
          </Typography>
        </div>
      </Card>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          marginTop: 2,
        }}
      >
        <UltimaAvaliacao />

        <QualidadeMedia />

        <SonoMedio />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          marginTop: 2,
        }}
      >
        <NovaAvaliacao />

        <Historico />

      </Box>
      
      <DicaDia />
    </Box>
  )
}