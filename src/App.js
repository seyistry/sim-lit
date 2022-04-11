import React, { useState } from "react";
import Papa from "papaparse";
import "./App.css";
import Home from "./screen/Home/Home";
import Dashboard from "./screen/Dashboard/Dashboard";

function App() {
    const [upload, setUpload] = useState("");

    const handleFiles = (event) => {
        event.preventDefault();
        const value = event.target.files[0];
        Papa.parse(value, {
            header: true,
            complete: function (result) {
                console.log(result);
                setUpload(result);
            },
        });
    };
    return upload ? (
        <Dashboard setUpload={setUpload} />
    ) : (
        <Home handleFiles={handleFiles} />
    );
}

export default App;
