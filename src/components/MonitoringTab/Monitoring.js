import React, { useState } from "react";
import moment from "moment";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    activePatients,
    eligiblePatients,
    viralLoadDocumented,
    missedAppointment,
    LTFUPatients,
    suppressedVL,
} from "../../utils/helper";
import { Stack, Grid, Box, Card, Typography } from "@mui/material";
import PieChart from "../charts/PieChart";
import SummaryCard from "./SummaryCard";

export default function Monitoring(props) {
    const [reffDate, setReffDate] = useState(moment());

    const active = activePatients(props.upload);
    const LTFU = LTFUPatients(props.upload);

    const missAppintement = missedAppointment(props.upload, reffDate);
    const eligible = eligiblePatients(active, reffDate);
    const documented = viralLoadDocumented(eligible, reffDate);
    const suppressed = suppressedVL(documented);

    const coverage = (documented.length / eligible.length) * 100;
    const suppressionRate = (suppressed.length / documented.length) * 100;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={9} sm={12}>
                    <Card
                        variant="outlined"
                        sx={{
                            width: "100%",
                            height: "538.1px",
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            align="center"
                            sx={{
                                position: "absolute",
                                paddingTop: 2,
                                paddingLeft: 3,
                            }}
                        >
                            Facility Performance
                        </Typography>
                        <PieChart
                            active={active.length}
                            LTFU={LTFU.length}
                            missAppintement={missAppintement.length}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Stack spacing={1}>
                        <SummaryCard value={active.length} title="active" />
                        <SummaryCard value={LTFU.length} title="LTFU" />
                        <SummaryCard
                            value={missAppintement.length}
                            title="Missed Appointment"
                        />
                        <SummaryCard
                            value={eligible.length}
                            title="viral load eligibility"
                        />
                        <SummaryCard
                            value={documented.length}
                            title="viral Load Documented"
                        />
                        <SummaryCard
                            value={coverage.toFixed(1)}
                            title="V.L coverage"
                        />
                        <SummaryCard
                            value={suppressionRate.toFixed(1)}
                            title="V.L suppression rate"
                        />
                    </Stack>
                </Grid>
            </Grid>
            <Box
                mt={3}
                p={2}
                sx={{
                    backgroundColor: "#fff",
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Select reference date"
                        value={reffDate}
                        inputFormat="dd/MM/yyyy"
                        onChange={(newValue) => {
                            setReffDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
        </Box>
    );
}
