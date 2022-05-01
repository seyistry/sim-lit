import { Stack, Typography } from "@mui/material";
import React from "react";

function PatientDetailList(props) {
    return (
        <Stack
            direction="row"
            sx={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
            }}
        >
            <Typography variant="body1">
                {props.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {props.value}
            </Typography>
        </Stack>
    );
}

export default PatientDetailList;
