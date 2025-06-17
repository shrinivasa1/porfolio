import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0d1117",
        color: "#fff",
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body2">
              I'm Shrinivas, a passionate web developer who builds responsive,
              scalable, and creative web apps using React, Node.js, and MongoDB.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                Home
              </Link>
              <Link href="/projects" underline="hover" color="inherit">
                Projects
              </Link>
              <Link href="/skills" underline="hover" color="inherit">
                Skills
              </Link>
              <Link href="/contact" underline="hover" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" >Email:<a href="sshrinivas840@gmail.com">sshrinivas840@gmail.com</a></Typography>
            <Typography variant="body2">Phone: +91-7338169359</Typography>

            {/* Social Media Icons */}
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://github.com/shrinivasa1"
                target="_blank"
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#00ff99",
                    transform: "scale(1.2)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/shrinivasa-s-46b9bb2b8/"
                target="_blank"
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#0e76a8",
                    transform: "scale(1.2)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="sshrinivas840@gmail.com"
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#ea4335",
                    transform: "scale(1.2)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                href="https://wa.me/917338169359"
                target="_blank"
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#25D366",
                    transform: "scale(1.2)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Shrinivas | All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
