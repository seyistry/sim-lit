import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";
import React from "react";

export default function SummaryTable(props) {
    const { Tx_Current, Tx_CurrentValue } = props;

    function createData(title, value) {
        return { title, value };
    }

    const rows = [
        createData(Tx_Current, Tx_CurrentValue),
        createData("IIT", 237),
        createData("VL", 262),
        createData("TX", 305),
        createData("Tx", 356),
    ];

    return (
        <TableContainer component={Card}>
            <Table size="medium" aria-label="a Summary table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.title}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                sx={{ fontWeight: "bold" }}
                            >
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
