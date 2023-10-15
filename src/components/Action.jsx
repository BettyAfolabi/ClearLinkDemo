import { Box, Stack, Typography, Button } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

function Action() {
  return (
    <Box sx={{ paddingX: "4rem", paddingY: "36px", display: "flex" }}>
      <Stack sx={{ textAlign: "start" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Ready to clear the path to perfect communication?
        </Typography>
        <Box sx={{ width: "400px", fontSize: "20px", paddingY: "30px" }}>
          <Stack direction="row" spacing={2} pt={1}>
            <CheckCircleOutlineOutlined color="primary" />
            <Typography>30 days free trial</Typography>
          </Stack>
          <Stack direction="row" spacing={2} pt={1}>
            <CheckCircleOutlineOutlined color="primary" />
            <Typography>Cancel at any time</Typography>
          </Stack>
          <Stack direction="row" spacing={2} pt={1}>
            <CheckCircleOutlineOutlined color="primary" />
            <Typography>Access to all features</Typography>
          </Stack>
          <Stack direction="row" spacing={2} pt={1}>
            <CheckCircleOutlineOutlined color="primary" />
            <Typography>Peronalized onboarding</Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            size="small"
            variant="outlined"
            sx={{
              borderRadius: "25px",
              color: "black",
              fontSize: "12px",
            }}
          >
            Talk to Sales
          </Button>

          <Button
            size="small"
            variant="contained"
            color="primary"
            sx={{ borderRadius: "25px" }}
          >
            Sign up for Free
          </Button>
        </Stack>
      </Stack>
      <Stack sx={{ width: "604px" }}>
        <img src="src\assets\screen mockup.png" alt="mockup" />
      </Stack>
    </Box>
  );
}

export default Action;
