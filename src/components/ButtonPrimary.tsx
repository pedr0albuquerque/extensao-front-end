import { Button } from "@mui/material";

interface ButtonPrimaryProps{
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonPrimary({value, onClick}: ButtonPrimaryProps){

  return(
    <Button 
      style={{
        color: "#fff",
        backgroundColor: "#107535ff",
        fontWeight: "bold",
        fontSize: "16px",
        textDecoration: "none",
        cursor: "pointer",  
      }}
      variant="contained"
      onClick={onClick}
    >
      {value}
    </Button> 
  );
}