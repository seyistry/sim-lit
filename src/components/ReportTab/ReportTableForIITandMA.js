import React from "react";
import moment from "moment";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarDensitySelector,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
} from "@mui/x-data-grid";

const columns = [
    { field: "PepID", headerName: "Pep ID", width: 120 },
    {
        field: "State",
        headerName: "State",
        width: 120,
        editable: true,
    },
    {
        field: "FacilityName",
        headerName: "Facility Name",
        width: 120,
        editable: true,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.Firstname || ""} ${params.row.Surname || ""}`,
    },
    {
        field: "LastPickupDateCal",
        headerName: "Last Pickup Date",
        width: 120,
        editable: true,
    },
    {
        field: "DaysOfARVRefill",
        headerName: "Days Of ARV Refill",
        width: 120,
        editable: true,
    },
    {
        field: "Current_Age",
        headerName: "Age",
        type: "number",
        width: 110,
        editable: true,
    },
    {
        field: "PhoneNo",
        headerName: "Phone NUmber",
        width: 150,
        editable: true,
    },
];

export default function ReportTableForIITandMA(props) {
    const CustomToolbar = () => {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport
                    csvOptions={{
                        fileName: `${props.title} ${moment().format(
                            "DD_MM_YYYY_LTS"
                        )}`,
                        utf8WithBom: true,
                    }}
                    printOptions={{ disableToolbarButton: true }}
                />
            </GridToolbarContainer>
        );
    };
    return (
        <div style={{ height: 300, width: "95%" }}>
            <DataGrid
                rows={props.data}
                columns={columns}
                pageSize={100}
                getRowId={(row) => row.PepID}
                columnBuffer={8}
                rowsPerPageOptions={[100]}
                checkboxSelection
                disableSelectionOnClick
                components={{ Toolbar: CustomToolbar }}
            />
        </div>
    );
}
