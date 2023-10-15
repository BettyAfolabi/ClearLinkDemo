import { Box, Stack, Typography } from "@mui/material";

function Social() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        paddingX: "4rem",
        marginY: "2rem",
      }}
    >
      <Typography
        p={5}
        sx={{ color: "#475467", fontWeight: "bold", textAlign: "center" }}
      >
        Join 1,500+ companies already video conferencing the ClearLink way
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "25px",
        }}
      >
        <img src="src\assets\Shopify.com svg.png" alt="shopify" />
        <img src="src\assets\Coinbase svg.png" alt="coin" />
        <img src="src\assets\Dropbox svg.png" alt="drobbox" />
        <img src="src\assets\Intercom svg.png" alt="intercom" />
        <img src="src\assets\Marvel svg.png" alt="marvel" />
        <img src="src\assets\Automattic svg.png" alt="Auto" />
      </Stack>
    </Box>
  );
}

export default Social;
