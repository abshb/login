import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { AuthContext } from "../../routes/auth/AuthContext";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { isLoggedIn } = useContext(AuthContext);
  const { username } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();
  function logoutHeader(e) {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    navigate("/login");
    logout();
  }

  return (
    <Box width={"100%"}>
      {isLoggedIn ? (
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              justifyItems: "center",
              padding: 2,
              borderBottom: 1,
              borderColor: "lightgray",
            }}
          >
            <img
              src="../../../../../assets/logo.svg"
              alt="logo"
              loading="lazy"
              width={100}
              onClick={() => navigate("/")}
              cursor={"pointer !important"}
            />

            <Box
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Tooltip title="Account settings">
                <Button
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{ bgcolor: "fafafa", border: "1px solid lightgray" }}
                    alt={username}
                    src="../../../../../assets/avatar.svg"
                  />
                  <Typography
                    variant="subtitle1"
                    textTransform={"capitalize"}
                    margin={0.8}
                  >
                    {username}
                  </Typography>
                </Button>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => navigate("/profile")}>
                <Avatar /> Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => navigate("/settings")}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={logoutHeader}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </React.Fragment>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            justifyItems: "center",
            padding: 2,
            borderBottom: 1,
            borderColor: "lightgray",
          }}
        >
          <Link to="/">
            <img
              src="../../../../../assets/logo.svg"
              alt="logo"
              loading="lazy"
              width={100}
              onClick={() => navigate("/")}
              cursor={"pointer !important"}
            />
          </Link>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </Box>
      )}
    </Box>
  );
};

export default Header;
