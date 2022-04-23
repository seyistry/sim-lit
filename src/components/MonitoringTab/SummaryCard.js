import React from "react";
import { Stack, Typography, Card } from "@mui/material";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function SummaryCard(props) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: "100%",
                height: 65,
            }}
        >
            <Stack
                height={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
                direction="row"
                spacing={2}
            >
                <Stack direction="column" px={4}>
                    <Typography variant="h6" fontWeight="bold">
                        {props.value}
                        {props.title === "V.L coverage" ||
                        props.title === "V.L suppression rate"
                            ? "%"
                            : ""}
                    </Typography>
                    <Typography
                        fontWeight="light"
                        variant="subtitle2"
                        sx={{ textTransform: "capitalize" }}
                    >
                        {props.title}
                    </Typography>
                </Stack>
                <Stack px={3}>
                    <AssignmentIndIcon
                        fontSize="medium"
                        sx={{
                            display:
                                props.title === "active" ? "block" : "none",
                            color: "primary.main",
                        }}
                    />
                    <NoAccountsIcon
                        fontSize="medium"
                        sx={{
                            display: props.title === "LTFU" ? "block" : "none",
                            color: "error.main",
                        }}
                    />
                    <HourglassTopIcon
                        fontSize="medium"
                        sx={{
                            display:
                                props.title === "Missed Appointment"
                                    ? "block"
                                    : "none",
                            color: "warning.main",
                        }}
                    />
                    <SettingsAccessibilityIcon
                        fontSize="medium"
                        sx={{
                            display:
                                props.title === "viral load eligibility"
                                    ? "block"
                                    : "none",
                            color: "primary.main",
                        }}
                    />
                    <SettingsAccessibilityIcon
                        fontSize="medium"
                        sx={{
                            display:
                                props.title === "viral Load Documented"
                                    ? "block"
                                    : "none",
                            color: "warning.dark",
                        }}
                    />
                    <SentimentVerySatisfiedIcon
                        fontSize="medium"
                        sx={{
                            display:
                                (props.title === "V.L coverage" ||
                                    props.title === "V.L suppression rate") &&
                                props.value >= 95
                                    ? "block"
                                    : "none",
                            color: "success.main",
                        }}
                    />
                    <SentimentVeryDissatisfiedIcon
                        fontSize="medium"
                        sx={{
                            display:
                                (props.title === "V.L coverage" ||
                                    props.title === "V.L suppression rate") &&
                                props.value < 95
                                    ? "block"
                                    : "none",
                            color: "error.main",
                        }}
                    />
                </Stack>
            </Stack>
        </Card>
    );
}

export default SummaryCard;
