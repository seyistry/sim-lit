import moment from "moment";

export const ARTStartDateCollections = (store) => {
    const dateArray = [];
    store.filter((list) => {
        const dateCo = moment(list.ARTStartDate, "DD/MM/YYYY").format(
            "YYYY-MM-DD"
        );
        let found = false;
        for (var i = 0; i < dateArray.length; i++) {
            if (dateArray[i].day === dateCo) {
                found = true;
                dateArray[i].value = dateArray[i].value + 1;
                break;
            }
        }
        if (!found) {
            const myObj = {};
            myObj["day"] = dateCo;
            myObj["value"] = 1;
            dateArray.push(myObj);
        }
        return null;
    });
    return dateArray;
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

export const missedAppointment = (store, date) => {
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
            return list;
    });
    return info;
};

export const suppressedVL = (store) => {
    const info = store.filter((list) => {
        if (parseInt(list.CurrentViralLoad) < 1000) return list;
    });
    return info;
};
