import { Card, Typography } from "@mui/material";
import { TrendingUp } from "lucide-react";

export default function QualidadeMedia() {
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
        <Typography>-</Typography>
        <Typography variant="body2" color="gray">
          Faça sua primeira avaliação
        </Typography>
      </div>
    </Card>
  );
}