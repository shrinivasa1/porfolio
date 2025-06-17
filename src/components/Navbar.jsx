import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Skills", path: "/skills" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1e1e1e" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Shrinivas Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                key={item.title}
                component={Link}
                to={item.path}
                sx={{ color: "#fff", mx: 1 }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenDrawer(false)}>
          <List>
            {navLinks.map((item) => (
              <ListItem button key={item.title} component={Link} to={item.path}>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
