import { Button } from "@mui/material";

interface ButtonSecondaryProps{
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonSecondary({value, onClick}: ButtonSecondaryProps){

  return(
    <Button 
      style={{
        color: "#0d7377",
        backgroundColor: "#fff",
        fontWeight: "normal",
        fontSize: "16px",
        textDecoration: "none",
        cursor: "pointer",  
        textTransform: "none",
        width: "100%",
      }}
      variant="contained"
      onClick={onClick}
    >
      {value}
    </Button> 
  );
}