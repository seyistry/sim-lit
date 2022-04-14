import React, { useState } from "react";
import "./App.css";
import Home from "./screen/Home";
import Dashboard from "./screen/Dashboard";

function App() {
    const [upload, setUpload] = useState("");
    const [fileTitle, setFileTitle] = useState("");
    return upload ? (
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
    );
}

export default App;
