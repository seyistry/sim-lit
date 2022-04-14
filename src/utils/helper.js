import moment from "moment";

export const activePatients = (store) => {
    const info = store.filter(
        (list) => list.CurrentARTStatus_Pharmacy === "Active"
    );
    return info;
};

export const eligiblePatients = (store) => {
    const info = store.filter((list) => {
        const daysOnART = moment("12/04/2022", "DD/MM/YYYY", true).diff(
            moment(list.ARTStartDate, "DD/MM/YYYY", true),
            "day"
        );
        if (daysOnART >= 180 && list.CurrentARTStatus_Pharmacy === "Active")
            return list;
    });
    return info;
};

export const viralLoadDocumented = (store) => {
    const info = store.filter((list) => {
        const ReffDate = moment("12/04/2022", "DD/MM/YYYY", true).subtract(
            365,
            "day"
        );
        const DateofCurrentViralLoad = moment(
            list.DateofCurrentViralLoad,
            "DD/MM/YYYY",
            true
        );
        if (ReffDate <= DateofCurrentViralLoad) return list;
    });
    return info;
};
export const missedAppointment = (store) => {
    const info = store.filter((list) => {
        const nextAppointmentDate = moment(
            list.LastPickupDateCal,
            "DD/MM/YYYY",
            true
        ).add(parseInt(list.DaysOfARVRefill), "day");

        const DateofCurrentViralLoad = moment(
            list.DateofCurrentViralLoad,
            "DD/MM/YYYY",
            true
        );
        if (nextAppointmentDate <= DateofCurrentViralLoad) return list;
    });
    return info;
};
