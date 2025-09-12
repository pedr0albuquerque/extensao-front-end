import { Button } from "@mui/material";

interface ButtonPrimaryProps{
  value: string;
}

export default function ButtonPrimary({value}: ButtonPrimaryProps){

  return(
    <Button 
      style={{
        color: "#fff",
        backgroundColor: "#107535ff",
        fontWeight: "bold",
      }}
      variant="contained"
    >
      {value}
    </Button> 
  );
}