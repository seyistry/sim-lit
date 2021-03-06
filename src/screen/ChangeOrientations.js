import { Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/system";
import { blue } from "@mui/material/colors";

const bgColor = blue[50];
function ChangeOrientations() {
    const theme = useTheme();
    return (
        <Stack
            sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                backgroundColor: bgColor,
            }}
        >
            <svg
                // style={{ display: "block" }}
                width="200"
                height="200"
                viewBox="0 0 5324 5324"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4492.12 2329.25H831.875C765.325 2329.25 715.413 2345.89 665.5 2362.52V1331H2662V1996.5C2662 2096.33 2728.55 2162.88 2828.38 2162.88C2928.2 2162.88 2994.75 2096.33 2994.75 1996.5V831.875C2994.75 549.037 2778.46 332.75 2495.62 332.75H831.875C549.037 332.75 332.75 549.037 332.75 831.875V2828.38V4492.12C332.75 4774.96 549.037 4991.25 831.875 4991.25H4492.12C4774.96 4991.25 4991.25 4774.96 4991.25 4492.12V2828.38C4991.25 2545.54 4774.96 2329.25 4492.12 2329.25ZM1164.62 3826.62C1164.62 3926.45 1098.08 3993 998.25 3993C898.425 3993 831.875 3926.45 831.875 3826.62V3493.88C831.875 3394.05 898.425 3327.5 998.25 3327.5C1098.08 3327.5 1164.62 3394.05 1164.62 3493.88V3826.62ZM3993 4658.5H1663.75V2662H3993V4658.5Z"
                    fill={theme.palette.primary.main}
                />
                <path
                    d="M3310.86 848.512C3793.35 915.062 4159.38 1331 4159.38 1830.12C4159.38 1896.67 4209.29 1963.22 4275.84 1979.86C4292.48 1979.86 4309.11 1996.5 4325.75 1996.5C4375.66 1996.5 4425.58 1979.86 4458.85 1929.95L4957.98 1264.45C5007.89 1197.9 4991.25 1081.44 4924.7 1031.52C4858.15 981.612 4741.69 998.25 4691.78 1064.8L4425.58 1414.19C4275.84 948.337 3859.9 582.312 3360.78 515.762C3260.95 499.125 3177.76 565.675 3161.12 648.862C3161.12 748.687 3211.04 831.875 3310.86 848.512Z"
                    fill={theme.palette.primary.main}
                />
            </svg>

            <Typography variant="h6" align="center" fontWeight="bold" p={1}>
                Change screen orientation to Landscape
            </Typography>
        </Stack>
    );
}

export default ChangeOrientations;
