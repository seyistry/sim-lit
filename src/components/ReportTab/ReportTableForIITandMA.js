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
import { nextAppointmentDate } from "../../utils/helper";

export default function ReportTableForIITandMA(props) {
  const columns = [
    { field: "PepID", headerName: "Pep ID", width: 120 },
    // {
    //   field: "State",
    //   headerName: "State",
    //   width: 120,
    //   editable: true,
    // },
    // {
    //   field: "FacilityName",
    //   headerName: "Facility Name",
    //   width: 120,
    //   editable: true,
    // },
    {
      field: "Surname",
      headerName: "Surname",
      width: 80,
      editable: true,
      type: "date",
    },
    {
      field: "Firstname",
      headerName: "Firstname",
      width: 80,
      editable: true,
      type: "date",
    },
    {
      field: "Sex",
      headerName: "Sex",
      width: 90,
      editable: true,
      type: "date",
    },
    {
      field: "ARTStartDate",
      headerName: "ART Start Date",
      width: 110,
      editable: true,
      type: "date",
    },
    {
      field: "CurrentARTRegimen",
      headerName: "CurrentARTRegimen",
      width: 140,
      editable: true,
      type: "date",
    },
    {
      field:
        props.title === "DueForViralLoad_"
          ? "DateofCurrentViralLoad"
          : "Pharmacy_LastPickupdate",
      headerName:
        props.title === "DueForViralLoad_"
          ? "Date of Current Viral Load"
          : "Last Pickup Date",
      width: 160,
      editable: true,
      type: "date",
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
      type: "date",
    },
    {
      field: "Next Appointment",
      headerName: "Next Appointment Date",
      description: "Next Appointment Date",
      sortable: true,
      width: 160,
      valueGetter: (params) =>
        `${nextAppointmentDate(
          params.row.Pharmacy_LastPickupdate,
          params.row.DaysOfARVRefill
        )}`,
    },
    {
      field: "Current_Age",
      headerName: "Age",
      type: "number",
      width: 60,
      editable: true,
    },
    {
      field: "PhoneNo",
      headerName: "Phone Number",
      width: 150,
      editable: true,
    },
    {
      field: "Address",
      headerName: "Address",
      width: 140,
      editable: true,
      type: "date",
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
            fileName: `${props.title} ${moment().format("DD_MM_YYYY_LTS")}`,
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
