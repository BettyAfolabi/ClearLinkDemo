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
        <img src="public\Shopify.com svg.png" alt="shopify" />
        <img src="public\Coinbase svg.png" alt="coin" />
        <img src="public\Dropbox svg.png" alt="drobbox" />
        <img src="public\Intercom svg.png" alt="intercom" />
        <img src="public\Marvel svg.png" alt="marvel" />
        <img src="public\Automattic svg.png" alt="Auto" />
      </Stack>
    </Box>
  );
}

export default Social;
