import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Home from "./screen/Home";
import Dashboard from "./screen/Dashboard";

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
    const [upload, setUpload] = useState("");
    const [fileTitle, setFileTitle] = useState("");
    return (
        <ThemeProvider theme={theme}>
            {upload ? (
                <Dashboard
                    setUpload={setUpload}
                    upload={upload}
                    fileTitle={fileTitle}
                />
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
