import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactComponent as InboxIcon } from "../../resources/images/ListIcon.svg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MuiDrawer from "@mui/material/Drawer";
import { useNavigate, useLocation } from "react-router-dom";
import Searchbar from "../Searbar";
import { ReactComponent as Logo } from "../../resources/images/Logo.svg";

const drawerWidth = 245;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 1,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function PersistentDrawerLeft({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [expand, setExpand] = React.useState(false);
  const menuItems = [
    {
      id: "1",
      label: "User Management",
      innerMenu: [
        {
          label: "Role Management",
          path: "/adminRoles",
          onClick: () => {
            navigate("/adminRoles");
          },
        },
        {
          label: "User List",
          component: "userList",
          path: "/userList",
          onClick: () => {
            navigate("/userList");
          },
        },
      ],
    },
  ];
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setExpand((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "#000 !important" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Logo />
          </IconButton>

          <Box sx={{ display: "flex" }}>
            <Searchbar placeholder={"Search..."} />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <Divider />
        <List>
          {menuItems &&
            menuItems.map((text) => {
              const { label, onClick } = text;
              return (
                <>
                  <ListItem key={text.id} onClick={handleClick} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText sx={{ fontSize: "14px" }} primary={label} />
                      {text?.innerMenu &&
                        (expand ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={expand}>
                    {text.innerMenu &&
                      text.innerMenu.map((text, i) => {
                        const { label, path, onClick } = text;
                        return (
                          <ListItem
                            key={text.id}
                            selected={location.pathname === path}
                            onClick={onClick}
                            sx={{
                              "&.Mui-selected": {
                                backgroundColor: "#F2F2F2",
                                fontWeight: "bold !important",
                                fontSize: "14px",
                                color: "#000000",
                                textDecoration: "underline",
                                fontFamily: "Noto Sans",
                              },
                            }}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <InboxIcon />
                              </ListItemIcon>
                              <ListItemText
                                sx={{ fontSize: "14px !important" }}
                                primary={label}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                  </Collapse>
                </>
              );
            })}
        </List>
      </Drawer>
      <Main component="main" sx={{ margin: "0" }}>
        {children}
      </Main>
    </Box>
  );
}
