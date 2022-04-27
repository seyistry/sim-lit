import { Box, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import ReportTableForIITandMA from "./ReportTableForIITandMA";

function ReportCard(props) {
    const { title, data, setStartDate, startDate, endDate, setEndDate } = props;
    return (
        <Box
            sx={{
                width: "100%",
                // height: "520px",
            }}
        >
            {title === "IIT_" ? (
                ""
            ) : (
                <Stack
                    direction="row"
                    sx={{
                        width: "100%",
                        justifyContent: "center",
                    }}
                    pt={2}
                >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            inputFormat="dd/MM/yyyy"
                            onChange={(newValue) => {
                                setStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Typography variant="subtitle1" p={2} fontWeight={"thin"}>
                        to
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            inputFormat="dd/MM/yyyy"
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Stack>
            )}
            <Stack
                direction="row"
                p={2}
                sx={{
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                <ReportTableForIITandMA data={data} title={title} />
            </Stack>
        </Box>
    );
}

export default ReportCard;
