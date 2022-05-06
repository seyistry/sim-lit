import React, { useState, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import {
    IconButton,
    Divider,
    Typography,
    CssBaseline,
    List,
    Toolbar,
    Box,
    Modal,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Stack,
    Tooltip,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Paper,
    InputBase,
    Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import SearchIcon from "@mui/icons-material/Search";
import BackupIcon from "@mui/icons-material/Backup";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import RowingIcon from "@mui/icons-material/Rowing";
import Monitoring from "../components/MonitoringTab/Monitoring";
import Report from "../components/ReportTab/Report";
import { blue } from "@mui/material/colors";
import PatientDetailList from "../components/others/PatientDetailList";

const drawerWidth = 240;

const bgColor = blue[50];

const actions = [
    { icon: <SearchIcon />, name: "Search for a Patient" },
    { icon: <UploadFileOutlinedIcon />, name: "Add HTS Linelist" },
    { icon: <BackupIcon />, name: "Add NDR Linelist" },
];

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
    const valueRef = useRef("");
    const [openModal, setOpenModal] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [patientDetails, setPatientDetails] = React.useState("");
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => {
        setOpenModal(false);
        setSearch(false);
    };
    const data = props.artUpload;
    // let patientDetails = "";

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleModalInputButton = () => {
        setPatientDetails(
            data.find(
                (record) =>
                    record.PepID === valueRef.current.value.toLocaleUpperCase()
            )
        );
        setSearch(valueRef.current.value === "" ? false : true);
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
                <Stack sx={{ height: "100%", justifyContent: "space-between" }}>
                    <List>
                        {["Monitoring", "Report", "Coming Soon"].map(
                            (title, index) => (
                                <Tooltip
                                    key={index}
                                    title={title}
                                    placement="right"
                                >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open
                                                ? "initial"
                                                : "center",
                                            px: 2.5,
                                        }}
                                        onClick={() => setActiveLink(title)}
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
                                                    activeLink === title
                                                        ? "bold"
                                                        : "",
                                            }}
                                        />
                                    </ListItemButton>
                                </Tooltip>
                            )
                        )}
                    </List>
                    <List>
                        {["Drop Linelist"].map((title, index) => (
                            <Tooltip
                                key={index}
                                title={title}
                                placement="right"
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                            ? "initial"
                                            : "center",
                                        px: 2.5,
                                    }}
                                    onClick={() =>
                                        title === "Drop Linelist"
                                            ? props.setArtUpload("")
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
                                                activeLink === title
                                                    ? "bold"
                                                    : "",
                                        }}
                                    />
                                </ListItemButton>
                            </Tooltip>
                        ))}
                    </List>
                </Stack>
            </Drawer>
            <SpeedDial
                ariaLabel="SpeedDial to upload csv files"
                sx={{ position: "fixed", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={
                            action.name === "Search for a Patient"
                                ? handleOpen
                                : ""
                        }
                    />
                ))}
            </SpeedDial>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableRestoreFocus={true}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        // p: 4,
                    }}
                >
                    <Paper
                        sx={{
                            p: "2px 4px",
                            display: search ? "none" : "flex",
                            alignItems: "center",
                            width: 400,
                        }}
                    >
                        <IconButton sx={{ p: "10px" }} aria-label="menu">
                            <PersonIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search with PepID"
                            inputProps={{ "aria-label": "Search with PepID" }}
                            autoFocus={true}
                            inputRef={valueRef}
                            onKeyDown={(e) => {
                                if (e.code === "Enter") {
                                    e.preventDefault();
                                    handleModalInputButton();
                                }
                            }}
                        />
                        <IconButton
                            onClick={handleModalInputButton}
                            sx={{ p: "10px" }}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <Paper
                        sx={{
                            p: "2px 4px",
                            display: search ? "block" : "none",
                            alignItems: "center",
                            width: 400,
                        }}
                    >
                        {patientDetails === undefined ? (
                            <Typography
                                variant="subtitle2"
                                color="error.main"
                                p={1}
                            >
                                No associated patient profile is assigned with
                                this PepID
                            </Typography>
                        ) : (
                            <>
                                <PatientDetailList
                                    title="PepID"
                                    value={patientDetails.PepID}
                                />
                                <Divider />
                                <PatientDetailList
                                    title="Fullname"
                                    value={
                                        patientDetails.Firstname +
                                        " " +
                                        patientDetails.Surname
                                    }
                                />
                                <Divider />
                                <PatientDetailList
                                    title="PhoneNo"
                                    value={patientDetails.PhoneNo}
                                />
                                <Divider />
                                <PatientDetailList
                                    title="Current Age"
                                    value={patientDetails.Current_Age}
                                />
                                <Divider />
                                <PatientDetailList
                                    title="ARTStartDate"
                                    value={patientDetails.ARTStartDate}
                                />
                                <Divider />
                                <PatientDetailList
                                    title="CurrentViralLoad"
                                    value={patientDetails.CurrentViralLoad}
                                />
                                <Divider />
                                <PatientDetailList
                                    title="DateofCurrentViralLoad"
                                    value={
                                        patientDetails.DateofCurrentViralLoad
                                    }
                                />
                                <Divider />
                                <PatientDetailList
                                    title="LastPickupDateCal"
                                    value={patientDetails.LastPickupDateCal}
                                />
                                <Divider />
                                <PatientDetailList
                                    title="DaysOfARVRefill"
                                    value={patientDetails.DaysOfARVRefill}
                                />
                                <Divider />
                                <PatientDetailList
                                    title="EstimatedNextAppointment"
                                    value={
                                        patientDetails.EstimatedNextAppointmentPharmacy
                                    }
                                />
                                <Divider />
                                <PatientDetailList
                                    title="CurrentARTStatus"
                                    value={
                                        patientDetails.CurrentARTStatus_Pharmacy
                                    }
                                />
                                <Divider />
                                <PatientDetailList
                                    title="CurrentARTRegimen"
                                    value={patientDetails.CurrentARTRegimen}
                                />
                                <Divider />
                            </>
                        )}

                        <Button
                            variant="text"
                            p={1}
                            onClick={() => setSearch(false)}
                        >
                            Search Again
                        </Button>
                    </Paper>
                </Box>
            </Modal>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    display: activeLink === "Monitoring" ? "block" : "none",
                    backgroundColor: bgColor,
                }}
            >
                <DrawerHeader />
                <Monitoring artUpload={props.artUpload} />
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    display: activeLink === "Report" ? "block" : "none",
                    backgroundColor: bgColor,
                }}
            >
                <DrawerHeader />
                <Report artUpload={props.artUpload} />
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
