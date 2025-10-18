import { Card, Typography } from "@mui/material";

export default function DicaDia() {
  return (
    <Card className="d-flex flex-column justify-content-between" sx={{ flex: 1, p: 2}}>
      <Typography sx={{color: "#0d7377"}}>💡 Dica do dia</Typography>
      
      <div>
        <Typography variant="body2" color="gray">
          Mantenha uma rotina consistente de sono. Ir para a cama e acordar no mesmo horário todos os dias ajuda a regular seu relógio biológico e melhora a qualidade do sono.
        </Typography>
      </div>
    </Card>
  );
}