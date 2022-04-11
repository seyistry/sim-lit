import React from "react";
import "./index.css";
export default function Home(props) {
    return (
        <div className="row home-container bg-light">
            <div className="col-2" />
            <div className="col-8">
                <label htmlFor="formFile" className="form-label">
                    Upload the required{" "}
                    <b
                        style={{ background: "#1D6F42", color: "white" }}
                        className="px-2 py-1"
                    >
                        ART Linelist
                    </b>
                </label>
                <input
                    className="form-control shadow-sm"
                    type="file"
                    id="formFile"
                    onChange={(e) => props.handleFiles(e)}
                />
            </div>
            <div className="col-2" />
        </div>
    );
}
