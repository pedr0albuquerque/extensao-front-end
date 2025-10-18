import { Card, Typography } from "@mui/material";
import { Calendar } from "lucide-react";

export default function UltimaAvaliacao() {
  return (
    <Card className="d-flex flex-column justify-content-between" sx={{ flex: 1, p: 2, height: '180px' }}>
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
            <Typography>-</Typography>
            <Typography variant="body2" color="gray">
              Nenhuma avaliação ainda
            </Typography>
          </div>
        </Card>
  );
}