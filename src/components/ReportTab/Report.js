import React, { useState } from "react";
import moment from "moment";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";
import {
    activePatients,
    eligiblePatients,
    LTFUPatients,
    missedAppointment,
    PatientDueForViralLoad,
} from "../../utils/helper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReportCard from "./ReportCard";

export default function Report(props) {
    const [startDateIIT, setStartDateIIT] = useState("");
    const [endDateIIT, setEndDateIIT] = useState(moment());

    const [startDateMA, setStartDateMA] = useState("");
    const [endDateMA, setEndDateMA] = useState(moment());

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const LTFUdata = LTFUPatients(props.artUpload);
    const reffDate = moment();
    const active = activePatients(props.artUpload);
    const eligible = eligiblePatients(active, reffDate);
    const dueForViralLoad = PatientDueForViralLoad(eligible, reffDate);

    const missedAppointmentData = startDateMA
        ? missedAppointment(props.artUpload, endDateMA, startDateMA)
        : missedAppointment(props.artUpload, endDateMA);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ borderBottom: "1px solid #eee" }}
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Interruption in Treatment
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        Generate IIT List
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ReportCard
                        title="IIT_"
                        data={LTFUdata}
                        setStartDate={setStartDateIIT}
                        startDate={startDateIIT}
                        endDate={endDateIIT}
                        setEndDate={setEndDateIIT}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{ borderBottom: "1px solid #eee" }}
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Missed Appointment
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        Generate Missed Appointment List
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ReportCard
                        title="MissedAppointment_"
                        data={missedAppointmentData}
                        setStartDate={setStartDateMA}
                        startDate={startDateMA}
                        endDate={endDateMA}
                        setEndDate={setEndDateMA}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{ borderBottom: "1px solid #eee" }}
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Viral Load
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        Generate List of Patient due for Viral
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ReportCard
                        title="DueForViralLoad_"
                        data={dueForViralLoad}
                        setStartDate={setStartDateIIT}
                        startDate={startDateIIT}
                        endDate={endDateIIT}
                        setEndDate={setEndDateIIT}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    sx={{ borderBottom: "1px solid #eee" }}
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Unsuppressed Viral Load
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        Generate List of Patient with unsuppressed Viral Load
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="warning.main">In progress</Typography>
                    {/* <ReportCard
                        title="unsuppressedViralLoad_"
                        data={dueForViralLoad}
                        setStartDate={setStartDateIIT}
                        startDate={startDateIIT}
                        endDate={endDateIIT}
                        setEndDate={setEndDateIIT}
                    /> */}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
