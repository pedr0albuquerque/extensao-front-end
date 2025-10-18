import { Card, Typography } from "@mui/material";
import { ClipboardList } from "lucide-react";
import ButtonSecondary from "../Button/ButtonSecondary";

export default function NovaAvaliacao() {
  return (
    <Card className="d-flex flex-column justify-content-between" sx={{ flex: 1, p: 2, height: '180px', backgroundColor: "#0d7377" }}>
      <div className="d-flex justify-content-between">
        <Typography sx={{ color: "#fff", fontWeight: "normal" }}>
          Nova Avaliação
        </Typography>

        <div
          style={{
            backgroundColor: "#fff", 
            borderRadius: "50%",
            padding: "8px",
            marginRight: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipboardList className="w-5 h-5" style={{color: '#0d7377'}} />
        </div>
      </div>
      
      <div className="d-flex flex-column gap-2">
        <Typography sx={{ color: "#fff", fontWeight: "normal" }}>
            Inicie uma nova avaliação completa da qualidade do seu sono
          </Typography>
        <ButtonSecondary
          value="Começar Avaliação"
          onClick={() => {}}
        />
      </div>
    </Card>
  );
}