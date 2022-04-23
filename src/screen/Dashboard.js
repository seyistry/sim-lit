import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import RowingIcon from "@mui/icons-material/Rowing";
import Monitoring from "../components/MonitoringTab/Monitoring";
import Report from "../components/ReportTab/Report";
import Tooltip from "@mui/material/Tooltip";

const drawerWidth = 240;

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
    // necessary for content to be below app bar
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
        width: `calc(100% - ${drawerWidth}px)`,
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
    flexShrink: 0,
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

export default function Dashboard(props) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Monitoring");

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <ChevronRightIcon
                        fontSize="medium"
                        style={{ marginBottom: 3 }}
                    />
                    <Typography variant="h6" noWrap component="div">
                        {props.fileTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {[
                        "Monitoring",
                        "Report",
                        "Coming Soon",
                        "Drop Linelist",
                    ].map((title, index) => (
                        <Tooltip key={index} title={title} placement="right">
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                                onClick={() =>
                                    title === "Drop Linelist"
                                        ? props.setUpload("")
                                        : setActiveLink(title)
                                }
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                        color:
                                            activeLink === title
                                                ? "primary.main"
                                                : "",
                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    {title === "Monitoring" ? (
                                        <BarChartIcon />
                                    ) : (
                                        ""
                                    )}
                                    {title === "Report" ? (
                                        <FeedOutlinedIcon />
                                    ) : (
                                        ""
                                    )}
                                    {title === "Coming Soon" ? (
                                        <RowingIcon />
                                    ) : (
                                        ""
                                    )}
                                    {title === "Drop Linelist" ? (
                                        <DeleteForeverIcon
                                            sx={{ color: "error.main" }}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={title}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                    }}
                                    primaryTypographyProps={{
                                        color:
                                            activeLink === title
                                                ? "primary.main"
                                                : "",
                                        fontWeight:
                                            activeLink === title ? "bold" : "",
                                    }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    display: activeLink === "Monitoring" ? "block" : "none",
                    backgroundColor: "#eff1fe",
                }}
            >
                <DrawerHeader />
                <Monitoring upload={props.upload} />
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    display: activeLink === "Report" ? "block" : "none",
                    backgroundColor: "#eff1fe",
                }}
            >
                <DrawerHeader />
                <Report upload={props.upload} />
            </Box>
            <Box
                component="main"
                sx={{
                    height: "100vh",
                    flexGrow: 1,
                    p: 3,
                    display: activeLink === "Coming Soon" ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <DrawerHeader />
                <Typography variant="h2">Coming Soon</Typography>
            </Box>
        </Box>
    );
}
