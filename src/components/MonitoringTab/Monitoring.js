import React from "react";
import moment from "moment";
import {
    activePatients,
    eligiblePatients,
    viralLoadDocumented,
    missedAppointment,
    LTFUPatients,
    suppressedVL,
    ARTStartDateCollections,
} from "../../utils/helper";
import { Stack, Grid, Box, Card, Typography } from "@mui/material";
import PieChart from "../charts/PieChart";
import SummaryCard from "./SummaryCard";
import DailyARTstartChart from "../charts/DailyARTstartChart";

export default function Monitoring(props) {
    const reffDate = moment();
    const active = activePatients(props.upload);
    const LTFU = LTFUPatients(props.upload);
    const artDateData = ARTStartDateCollections(props.upload);
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
                            height: "504px",
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{
                                paddingTop: 2,
                                paddingLeft: 3,
                            }}
                        >
                            Facility Performance
                        </Typography>
                        <Box sx={{ height: "450.1px" }}>
                            <PieChart
                                active={active.length}
                                LTFU={LTFU.length}
                                missAppintement={missAppintement.length}
                            />
                        </Box>
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
                sx={{
                    backgroundColor: "#fff",
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        width: "100%",
                        height: "538.1px",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            paddingTop: 2,
                            paddingLeft: 3,
                        }}
                        fontWeight="bold"
                    >
                        Daily Tx_New Indicator
                    </Typography>
                    <Box sx={{ height: "480.1px" }}>
                        <DailyARTstartChart artDateData={artDateData} />
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}
