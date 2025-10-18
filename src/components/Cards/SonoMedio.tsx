import { Card, Typography } from "@mui/material";
import { Moon } from "lucide-react";

export default function SonoMedio() {
  return (
    <Card className="d-flex flex-column justify-content-between" sx={{ flex: 1, p: 2 }}>
      <div className="d-flex justify-content-between">
        <Typography sx={{ color: "#0d7377", fontWeight: "normal" }}>
          Sono Medio
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
        <Typography>-</Typography>
        <Typography variant="body2" color="gray">
          Nenhuma avaliação ainda
        </Typography>
      </div>
    </Card>
  );
}