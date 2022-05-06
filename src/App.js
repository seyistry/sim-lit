import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Home from "./screen/Home";
import Dashboard from "./screen/Dashboard";
import ChangeOrientations from "./screen/ChangeOrientations";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme({
    typography: {
        fontFamily: [
            "Inter",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
    // To add dark mode
    // palette: {
    //     mode: "dark",
    // },
});

function App() {
    const matches = useMediaQuery("(max-width: 550px)");
    const [artUpload, setArtUpload] = useState("");
    const [fileTitle, setFileTitle] = useState("");
    return (
        <ThemeProvider theme={theme}>
            {artUpload ? (
                matches ? (
                    <ChangeOrientations />
                ) : (
                    <Dashboard
                        setArtUpload={setArtUpload}
                        artUpload={artUpload}
                        fileTitle={fileTitle}
                    />
                )
            ) : matches ? (
                <ChangeOrientations />
            ) : (
                <Home
                    setArtUpload={setArtUpload}
                    // artUpload={artUpload}
                    setFileTitle={setFileTitle}
                />
            )}
        </ThemeProvider>
    );
}

export default App;
