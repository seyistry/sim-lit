import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useCSVReader, formatFileSize } from "react-papaparse";
import { blue } from "@mui/material/colors";

const bgColor = blue[50];

export default function Home(props) {
    const { CSVReader } = useCSVReader();
    const [zoneHover, setZoneHover] = useState(false);
    return (
        <CSVReader
            config={{ header: true }}
            onUploadAccepted={(results) => {
                props.setUpload(results.data);
                setZoneHover(false);
            }}
            onDragOver={(event) => {
                event.preventDefault();
                setZoneHover(true);
            }}
            onDragLeave={(event) => {
                event.preventDefault();
                setZoneHover(false);
            }}
        >
            {({ getRootProps, acceptedFile }) => (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                    width="100%"
                    backgroundColor={bgColor}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            width: "65%",
                            height: "40%",
                            boxShadow: 1,
                            backgroundColor: "#FFF",
                        }}
                    >
                        <Box
                            {...getRootProps()}
                            sx={{
                                width: "95%",
                                height: 200,
                            }}
                        >
                            {acceptedFile ? (
                                <>
                                    {props.setFileTitle(acceptedFile.name)}
                                    <Stack
                                        direction="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        height="100%"
                                    >
                                        <Typography
                                            variant="h2"
                                            sx={{ color: "primary.main" }}
                                        >
                                            {formatFileSize(acceptedFile.size)}
                                        </Typography>
                                        <Typography variant="overline">
                                            {acceptedFile.name}
                                        </Typography>
                                    </Stack>
                                </>
                            ) : (
                                <Stack
                                    direction="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    height="100%"
                                    sx={{
                                        border: zoneHover
                                            ? "1px dashed"
                                            : "none",
                                        borderColor: zoneHover
                                            ? "primary.main"
                                            : "none",
                                        backgroundColor: zoneHover
                                            ? "#e3f2fd"
                                            : "none",
                                        "&:hover": {
                                            border: "1px dashed",
                                            borderColor: "primary.main",
                                            backgroundColor: "#e3f2fd",
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                >
                                    <FileUploadOutlinedIcon
                                        fontSize="large"
                                        sx={{
                                            marginBottom: "10px",
                                            color: "primary.main",
                                        }}
                                    />
                                    <Typography variant="overline">
                                        Upload the required ART Linelist
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component="span"
                                        sx={{ marginTop: "10px" }}
                                    >
                                        Upload CSV
                                    </Button>
                                </Stack>
                            )}
                        </Box>
                    </Box>
                </Box>
            )}
        </CSVReader>
    );
}
