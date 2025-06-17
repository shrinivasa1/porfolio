import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Avatar,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import shrinivas from "../images/shrinivas.jpg";

const techStack = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB",
  "Python", "MySQL", "Express.js", "Material UI", "GitHub", "Netlify"
];

const Home = () => {
  const handleClick = () => {
    
  };
  return (
    
    <Box
      sx={{
        background: "linear-gradient(to right,rgb(144, 224, 156),rgb(145, 147, 202))",
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
      }}
    >
      <Container>
        <Grid container spacing={5} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={7}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Hi, I'm <span style={{ color: "#1976d2" }}>Shrinivas</span>
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Web Developer | React Enthusiast | Full Stack Learner
            </Typography>
            <Typography variant="body1" paragraph>
              I am passionate about creating dynamic and responsive web applications.
              With experience in frontend and backend technologies, I aim to deliver
              user-friendly and performance-optimized products. I’ve built several
              real-world projects like a Tic Tac Toe game, Stopwatch App, Restaurant and Travel Websites,
              and even a Bluetooth IoT Car.
            </Typography>

            <Typography variant="body1" paragraph>
              I enjoy transforming ideas into reality using code, and I’m always learning
              something new to improve my skills. Let’s build something amazing together!
            </Typography>

            <Box mt={3} display="flex" gap={2} flexWrap="wrap">
              <Button variant="contained" component={Link} to="/projects">
                Explore Projects
              </Button>
              <Button variant="outlined" component={Link} to="/contact">
                Contact Me
              </Button>
            </Box>
          </Grid>

          {/* Avatar */}
          <Grid item xs={12} md={5} textAlign="center">
            <Avatar
              alt="Shrinivas"
              src={shrinivas}
              sx={{
                width: { xs: 200, md: 260 },
                height: { xs: 200, md: 260 },
                margin: "0 auto",
                boxShadow: 4,
              }}
            />
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 6 }} />

        {/* Tech Stack */}
        <Box textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            🔧 Tech Stack & Tools
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={2}
            mt={2}
          >
            {techStack.map((tech, idx) => (
              <Chip
                onClick={handleClick}
                key={idx}
                label={tech}
                color="primary"
                variant="outlined"
                sx={{ fontSize: "1rem", m: 1 ,color:"blueviolet"}}
              />
            ))}
          </Stack>
        </Box>

        {/* Footer-style closing */}
        <Box mt={8} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Shrinivas. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
