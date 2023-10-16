import { Box, Stack, Typography } from "@mui/material";
import {
  Instagram,
  LinkedIn,
  Twitter,
  Facebook,
  GitHub,
  YouTube,
} from "@mui/icons-material";

function Footer() {
  return (
    <Stack
      sx={{ paddingX: "6rem", paddingY: "36px", backgroundColor: "white" }}
    >
      <Stack direction="row">
        <Stack sx={{ width: "270px" }}>
          <Stack direction="row" spacing={2}>
            <Box
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ paddingTop: "5px" }}
            >
              <img src="./Vector.png" />
              <img src="./Vector (1).png" />
            </Box>
            <Typography variant="h6">ClearLink</Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ textAlign: "start", color: "gray", paddingY: "25px" }}
          >
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
            paddingLeft: "50px",
            color: "#667085",
          }}
        >
          <Stack
            sx={{
              fontSize: "10px",
              paddingX: "2rem",

              textAlign: "start",
            }}
          >
            <Typography
              sx={{
                paddingBottom: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              Product
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Overview
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Features
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Solution
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Tutorials
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
              Pricing
            </Typography>
          </Stack>
          <Stack
            sx={{
              fontSize: "10px",
              paddingX: "2rem",
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            <Typography
              sx={{
                color: "#667085",
                paddingBottom: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              Company
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Careers
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Press
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              News
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Contact
            </Typography>
          </Stack>
          <Stack
            sx={{
              fontSize: "10px",
              paddingX: "2rem",
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            <Typography
              sx={{
                color: "#667085",
                paddingBottom: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              Resources
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Events
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Help centre
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Tutorials
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Support
            </Typography>
          </Stack>
          <Stack
            sx={{
              fontSize: "9px",
              paddingX: "2rem",
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            <Typography
              sx={{
                color: "#667085",
                paddingBottom: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              Legal
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Terms
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Privacy
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Cookies
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Licenses
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Contact
            </Typography>
          </Stack>
          <Stack
            sx={{ fontSize: "10px", paddingX: "2rem", textAlign: "start" }}
          >
            <Typography
              color="primary"
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Get the app
            </Typography>
            <Stack sx={{ paddingBottom: "7px" }}>
              <img src="./Mobile app store badge.png" alt="store" />
            </Stack>
            <Stack>
              <img src="./Mobile app store badge (1).png" alt="store2" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "85%",
          margin: "25px",
          color: "gray",
        }}
      >
        <Typography>© 2023 ClearLink. All rights reserved.</Typography>
        <Stack direction="row" spacing={2}>
          <LinkedIn />
          <Twitter />
          <Facebook />
          <Instagram />
          <GitHub />
          <YouTube />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
