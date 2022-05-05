import moment from "moment";

export const ARTStartDateCollections = (store) => {
    const datesCollectionArray = [];
    store.filter((list) => {
        const dateReceived = moment(list.ARTStartDate, "DD/MM/YYYY").format(
            "YYYY-MM-DD"
        );
        let dateFound = false;
        for (let i = 0; i < datesCollectionArray.length; i++) {
            if (datesCollectionArray[i].day === dateReceived) {
                dateFound = true;
                datesCollectionArray[i].value = datesCollectionArray[i].value + 1;
                break;
            }
        }
        if (!dateFound) {
            const newDateObj = {};
            newDateObj["day"] = dateReceived;
            newDateObj["value"] = 1;
            datesCollectionArray.push(newDateObj);
        }
        return null;
    });
    return datesCollectionArray;
};

export const activePatients = (store) => {
    const info = store.filter(
        (list) =>
            list.CurrentARTStatus_Pharmacy === "Active" && list.Outcomes === ""
    );
    return info;
};

export const LTFUPatients = (store) => {
    const info = store.filter(
        (list) =>
            list.CurrentARTStatus_Pharmacy === "LTFU" && list.Outcomes === ""
    );
    return info;
};

export const eligiblePatients = (store, date) => {
    const info = store.filter((list) => {
        const daysOnART = moment(date, "DD/MM/YYYY", true).diff(
            moment(list.ARTStartDate, "DD/MM/YYYY", true),
            "day"
        );
        if (daysOnART >= 180 && list.CurrentARTStatus_Pharmacy === "Active")
            return list;
    });
    return info;
};

export const viralLoadDocumented = (store, date) => {
    const info = store.filter((list) => {
        const ReffDate = moment(date, "DD/MM/YYYY", true).subtract(365, "day");
        const DateofCurrentViralLoad = moment(
            list.DateofCurrentViralLoad,
            "DD/MM/YYYY",
            true
        );
        if (ReffDate <= DateofCurrentViralLoad) return list;
    });
    return info;
};

export const PatientDueForViralLoad = (store, date) => {
    const info = store.filter((list) => {
        const ReffDate = moment(date, "DD/MM/YYYY", true).subtract(365, "day");
        const DateofCurrentViralLoad = moment(
            list.DateofCurrentViralLoad,
            "DD/MM/YYYY",
            true
        );
        const DateofLastSampleCollection = moment(
            list.LastDateOfSampleCollection,
            "DD/MM/YYYY",
            true
        );

        const maxSampleDateAllowed = moment().subtract(90, "day");

        if (
            ReffDate > DateofCurrentViralLoad &&
            maxSampleDateAllowed >= DateofLastSampleCollection
        )
            return list;
    });
    return info;
};

export const missedAppointment = (
    store,
    date,
    startDate = moment(date, "DD/MM/YYYY", true).subtract(28, "day")
) => {
    const info = store.filter((list) => {
        const nextAppointmentDate = moment(
            list.LastPickupDateCal,
            "DD/MM/YYYY",
            true
        ).add(parseInt(list.DaysOfARVRefill), "day");

        const ReffDateStart = moment(date, "DD/MM/YYYY", true).subtract(
            28,
            "day"
        );
        const ReffDateEnd = moment(date, "DD/MM/YYYY", true);
        if (
            nextAppointmentDate >= ReffDateStart &&
            nextAppointmentDate <= ReffDateEnd
        )
            if (nextAppointmentDate >= startDate) return list;
    });
    return info;
};

export const suppressedVL = (store) => {
    const info = store.filter((list) => {
        if (parseInt(list.CurrentViralLoad) < 1000) return list;
    });
    return info;
};
