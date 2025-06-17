import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Grid,
  Box,
  Container,
} from "@mui/material";
import medi from "../images/medi.png";
import restor from "../images/restor.png";
import trav from "../images/trav.png";
import Tictoc from "../images/Tictoc.png";
import watch from "../images/watch.png";
import car from "../images/car.png";





const projects = [
  {
    title: "Tic Tac Toe Game",
    image: Tictoc,
    description: "A classic Tic Tac Toe game with simple AI, built using React and JavaScript hooks.",
    techStack: "React, useState, CSS",
    github: "https://github.com/yourusername/tic-tac-toe",
    demo: "https://yourticgame.netlify.app",
  },
  {
    title: "Stopwatch App",
    image: watch,
    description: "A fully functional stopwatch with start, stop, reset, and lap features.",
    techStack: "React, JavaScript, CSS",
    github: "https://github.com/yourusername/stopwatch",
    demo: "https://yourstopwatch.netlify.app",
  },
  {
    title: "Restaurant webapp",
    image: restor,
    description: "A landing page for an online restaurant with ordering and feedback features.",
    techStack: "HTML, CSS, JavaScript",
    github: "https://github.com/yourusername/restaurant-site",
    demo: "https://restaurantapp.netlify.app",
  },
  {
    title: "Travel & Tour Website",
    image: trav,
    description: "A React application to search for travel packages based on budget and destination.",
    techStack: "React, Node.js, MongoDB",
    github: "https://github.com/yourusername/travel-app",
    demo: "https://travelwithme.netlify.app",
  },
  {
    title: "Bluetooth Controlled Car (IoT)",
    image: car,
    description: "An IoT-based car project controlled via Bluetooth using Arduino and smartphone.",
    techStack: "Arduino, Bluetooth Module, C++",
    github:"#",
    demo: "#",
  },
  {
    title: "MediBridge - Healthcare App",
    image: medi,
    description: "A health care portal that suggests treatments based on symptoms and connects patients with doctors.",
    techStack: "React, Node.js, MongoDB, Material UI",
    github: "https://github.com/yourusername/medibridge",
    demo: "https://medibridgeapp.netlify.app",
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right,rgb(144, 224, 156),rgb(145, 147, 202))",
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
      }}
    >
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card  sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
              
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                  <strong>Tech Stack:</strong> {project.techStack}
                </Typography>
              </CardContent>
              <CardActions>

                {project.github !== "#"&&(
                <Button
                  size="small"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                )}
                {project.demo !== "#" && (
                  <Button
                    size="small"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default Projects;
