import React, { useState } from "react";
import Monitoring from "../../components/MonitoringTab/Monitoring";
import Report from "../../components/ReportTab/Report";
import "./index.css";
function Dashboard(props) {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState("Monitoring");
    function HandleToggle(event) {
        event.preventDefault();
        if (toggle) setToggle(false);
        else setToggle(true);
    }

    return (
        <div className="dashboard-container">
            <div id={toggle ? "" : "body-pd"}>
                <header
                    className={toggle ? "header body-pd" : "header"}
                    id="header"
                >
                    <div className="header_toggle">
                        <i
                            onClick={(e) => HandleToggle(e)}
                            className={toggle ? "bx bx-x" : "bx bx-menu"}
                            id="header-toggle"
                        ></i>
                    </div>
                </header>
                <div
                    className={toggle ? "l-navbar show" : "l-navbar"}
                    id="nav-bar"
                >
                    <nav className="nav-bar">
                        <div>
                            <a className="nav_logo">
                                <i className="bx bx-layer nav_logo-icon"></i>
                                <span className="nav_logo-name">Dashboard</span>
                            </a>
                            <div className="nav_list">
                                <a
                                    className={
                                        activeLink === "Monitoring"
                                            ? "nav_link active"
                                            : "nav_link"
                                    }
                                    onClick={() => {
                                        setActiveLink("Monitoring");
                                    }}
                                    data-bs-placement="top"
                                    title="Monitoring"
                                >
                                    <i className="bx bx-bar-chart-square nav_icon"></i>
                                    <span className="nav_name">Monitoring</span>
                                </a>
                                <a
                                    className={
                                        activeLink === "Report"
                                            ? "nav_link active"
                                            : "nav_link"
                                    }
                                    onClick={() => setActiveLink("Report")}
                                    data-bs-placement="top"
                                    title="Report"
                                >
                                    <i className="bx bxs-report nav_icon"></i>
                                    <span className="nav_name">Report</span>
                                </a>
                                <a
                                    className={
                                        activeLink === "Coming soon"
                                            ? "nav_link active"
                                            : "nav_link"
                                    }
                                    onClick={() => setActiveLink("Coming soon")}
                                    data-bs-placement="top"
                                    title="Coming soon"
                                >
                                    <i className="bx bxl-react nav_icon"></i>
                                    <span className="nav_name">
                                        Coming soon
                                    </span>
                                </a>
                            </div>
                        </div>
                        <a
                            className="nav_link"
                            onClick={() => {
                                props.setUpload("");
                            }}
                            data-bs-placement="top"
                            title="Drop Linelist"
                        >
                            <i className="bx bx-trash nav_icon"></i>
                            <span className="nav_name">Drop Linelist</span>
                        </a>
                    </nav>
                </div>
                <div className="height-100 bg-light">
                    <div
                        style={{
                            display:
                                activeLink === "Monitoring" ? "block" : "none",
                        }}
                    >
                        <Monitoring />
                    </div>
                    <div
                        style={{
                            display: activeLink === "Report" ? "block" : "none",
                        }}
                    >
                        <Report />
                    </div>
                    <div
                        style={{
                            display:
                                activeLink === "Coming soon" ? "block" : "none",
                        }}
                    >
                        <p>Coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
