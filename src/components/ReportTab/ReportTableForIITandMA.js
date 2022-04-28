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

export default function ReportTableForIITandMA(props) {
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
            description: "Firstname Surname",
            sortable: true,
            width: 160,
            valueGetter: (params) =>
                `${params.row.Firstname || ""} ${params.row.Surname || ""}`,
        },
        {
            field:
                props.title === "DueForViralLoad_"
                    ? "DateofCurrentViralLoad"
                    : "LastPickupDateCal",
            headerName:
                props.title === "DueForViralLoad_"
                    ? "Date of Current Viral Load"
                    : "Last Pickup Date",
            width: 120,
            editable: true,
            type: 'date',
        },
        {
            field:
                props.title === "DueForViralLoad_"
                    ? "LastDateOfSampleCollection"
                    : "DaysOfARVRefill",
            headerName:
                props.title === "DueForViralLoad_"
                    ? "Last Date Of Sample Collection"
                    : "Days Of ARV Refill",
            width: 120,
            editable: true,
            type: 'date',
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
                columnBuffer={10}
                rowsPerPageOptions={[100]}
                checkboxSelection
                disableSelectionOnClick
                components={{ Toolbar: CustomToolbar }}
            />
        </div>
    );
}
