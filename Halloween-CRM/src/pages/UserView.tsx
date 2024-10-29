import { Box, TextField, Typography, Button } from "@mui/material";
export const UserView = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#49545D",
        clipPath: "polygon(8% 12%, 100% 0%, 74% 100%, 14% 88%)",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2,color: "#9AA7B6"}}>
        Comprar Entradas
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "400px",
          padding: 3,
          "& .MuiTextField-root": {
            backgroundColor: "rgba(90, 146, 165, 0.27)",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Nombre"
          variant="filled"
          fullWidth
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
            "& .Mui-focused": {
              color: "white",
              "& .MuiInputLabel-root": { color: "white" },
            },
          }}
        />

        <TextField
          label="Correo Electronico"
          variant="filled"
          fullWidth
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
            "& .Mui-focused": {
              color: "white",
              "& .MuiInputLabel-root": { color: "white" },
            },
          }}
        />

       
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          variant="filled"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          fullWidth
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
            "& .Mui-focused": {
              color: "white",
              "& .MuiInputLabel-root": { color: "white" },
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#9AA7B6",
            color: "white",
            "&:hover": { backgroundColor: "#7B8E99" },
          }}
        >
          Comprar entrada
        </Button>
      </Box>
    </Box>
  );
};

