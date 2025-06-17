import React from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Box,
  Divider,
} from "@mui/material";
import shrinivas from "../images/shrinivas.jpg";

const About = () => {
  return (
    <Box
          sx={{
            background: "linear-gradient(to right,rgb(144, 224, 156),rgb(145, 147, 202))",
            py: { xs: 8, md: 12 },
            minHeight: "100vh",
          }}
        >
    <Container sx={{ py: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Profile Photo */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center"
              }}
            >
              <Avatar
                alt="Shrinivas"
                src={shrinivas}
                sx={{
                  width: 180,
                  height: 180,
                  mb: 2,
                  ml:55,
                  border: "3px solid green",
                  cursor: "grab"
                }}
              />
              <Typography variant="h6" color="text.primary" sx={{ml:55}}>
                Web Developer
              </Typography>
            </Box>
          </Grid>

          {/* Bio */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom  sx={{ml:55,mr:60,background:"linear-gradient(to right,rgb(144, 224, 156),rgb(145, 147, 202))"}}>
              About Me
            </Typography>
            <Typography variant="body1" >
              Hello! I’m <strong>Shrinivas</strong>, a passionate web developer with hands-on
              experience in building full-stack applications. I specialize in React.js for
              frontend and Node.js/Express.js for backend, with a strong grasp of databases like
              MongoDB and MySQL.
            </Typography>
            <Typography variant="body1" >
              I have developed various projects including a Tic Tac Toe Game, Stopwatch App, Restaurant Website, Travelling Website, an IoT-based Bluetooth Car, and a Healthcare project called MediBridge.
              My focus is always on writing clean, scalable code and creating responsive, user-friendly designs.
            </Typography>
          </Grid>
        </Grid>

        {/* Education and Experience */}
        <Divider sx={{ my: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{mr:60,background:"linear-gradient(to right,rgb(144, 224, 156),rgb(145, 147, 202))"}}>
              🎓 Education
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold">
              Diploma in Computer Science
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Government Polytechnic Tumkur, 2021 – 2024
            </Typography>
            <Typography variant="body2" >
              Percentage: 93% | Subjects: Python Programming, DBMS, Operating Systems,python,java,React.js
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold">
              Bachelor of Engineering in Computer Science
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sri siddartha  Institute of Technology Tumkur, 2024 – 2027
            </Typography>
            <Typography variant="body2">
              CGPA: 8.3 | Core Courses: Data Structures, java, c,Web Development,Full stack Development
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{mr:60,background:"linear-gradient(to right,rgb(144, 224, 156),rgb(145, 147, 202))"}}>
              💼 Experience
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold">
              Web Developer Intern @ Prodigy InfoTech
            </Typography>
            <Typography variant="body2" color="text.secondary">
              May 2025 – Present
            </Typography>
            <Typography variant="body2" >
              Worked on multiple React projects, built user interfaces, and contributed to live
              web deployments.
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold">
              Frontend Intern @ Scontinent Technologies Pvt. Ltd. Bengaluru
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jan 2025 – Mar 2025
            </Typography>
            <Typography variant="body2">
              Designed interactive UI components using React and Material UI. Collaborated with teams to deliver responsive and accessible designs.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
    </Box>
  );
};

export default About;
