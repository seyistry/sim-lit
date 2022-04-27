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
    const [upload, setUpload] = useState("");
    const [fileTitle, setFileTitle] = useState("");
    return (
        <ThemeProvider theme={theme}>
            {upload ? (
                matches ? (
                    <ChangeOrientations />
                ) : (
                    <Dashboard
                        setUpload={setUpload}
                        upload={upload}
                        fileTitle={fileTitle}
                    />
                )
            ) : matches ? (
                <ChangeOrientations />
            ) : (
                <Home
                    setUpload={setUpload}
                    upload={upload}
                    setFileTitle={setFileTitle}
                />
            )}
        </ThemeProvider>
    );
}

export default App;
