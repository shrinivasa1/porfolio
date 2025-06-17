import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Container,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";

const skillCategories = [
  {
    title: "Frontend",
    icon: <CodeIcon color="primary" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Material UI"],
  },
  {
    title: "Backend & Database",
    icon: <StorageIcon color="secondary" />,
    skills: ["Node.js", "Express.js", "MySQL", "MongoDB"],
  },
  {
    title: "Programming Languages",
    icon: <BuildIcon color="success" />,
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Tools & Platforms",
    icon: <DevicesIcon color="warning" />,
    skills: ["GitHub", "Netlify", "VS Code", "Postman"],
  },
  {
    title: "Other Skills",
    icon: <SettingsIcon color="error" />,
    skills: ["Computer Networks"],
  },
];

const Skills = () => {
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
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={4}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card elevation={4}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 ,background: "linear-gradient(to right,rgb(224, 175, 144),rgb(227, 227, 239))",
            py: { xs: 4, md: 6 },
        }}>
                  {category.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {category.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      variant="outlined"
                      color="primary"
                      onClick={handleClick}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default Skills;
