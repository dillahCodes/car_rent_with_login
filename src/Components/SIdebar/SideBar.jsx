import { Menu, MenuItem } from "react-pro-sidebar";
import { Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Title } from "./Title";
import { ButtonLogoutGroup } from "./Button";
import { menuItems } from "./MenuList";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { RxHamburgerMenu } from "react-icons/rx";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Header } from "../Header/Header";

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 260;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Title />
      <div className="flex flex-col gap-y-14">
        <Menu
          style={{
            marginTop: "35px",
          }}
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#F3F5F8",
                color: "#5F6165",
              },
              [`&:hover`]: {
                backgroundColor: "#F3F5F8",
                borderRadius: "6px 0 0 6px",
                color: "#5F6165",
                scale: "1.1",
              },
              [`&`]: {
                padding: "7px 8px",
                transition: "background-color 0.3s, color 0.3s",
                fontFamily: "monospace",
                fontSize: "14px",
                height: "40px",
                margin: "10px 0",
              },
            },
          }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.96, overflowX: "hidden" }}
            >
              <MenuItem icon={item.icon} component={<NavLink to={item.link} />}>
                {item.label}
              </MenuItem>
            </motion.div>
          ))}
        </Menu>
        <ButtonLogoutGroup />
      </div>
    </>
  );

  // container for children  content
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#FFFFFF",
            color: "black",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <RxHamburgerMenu />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { sm: "none", md: "block" },
        }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          PaperProps={{
            sx: {
              width: drawerWidth,
              padding: "30px 24px",
              overflow: "auto",
            },
          }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          PaperProps={{
            sx: {
              width: drawerWidth,
              padding: "30px 24px",
              overflow: "auto",
            },
          }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          PaperProps={{
            sx: {
              width: drawerWidth,
              padding: "30px 24px",
              overflow: "auto",
            },
          }}
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: "10px 0 0 0",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  children: PropTypes.node,
  window: PropTypes.func,
};

export default ResponsiveDrawer;
