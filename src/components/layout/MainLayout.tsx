import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import { Typography } from '@mui/material';
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <Topbar /> */}
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
      <Typography align="justify">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pl: 10,
            maxWidth: "60vw",
            minHeight: "100vh",
            backgroundColor: colorConfigs.mainBg,
            justifyContent:"flex-end"
          }}
          >
          <Toolbar />
          <Outlet />
        </Box>
      </Typography> 
    </Box>
  );
};

export default MainLayout;