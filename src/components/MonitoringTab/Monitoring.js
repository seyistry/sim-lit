import React, { useEffect } from "react";
import {
    activePatients,
    eligiblePatients,
    viralLoadDocumented,
    missedAppointment,
} from "../../utils/helper";

export default function Monitoring(props) {
    const test = () => {
        const active = activePatients(props.upload);
        const eligible = eligiblePatients(active);
        const documented = viralLoadDocumented(eligible);
        const missAppintement = missedAppointment(props.upload);
    };

    useEffect(() => {
        test();
    });

    return <div>Monitoring</div>;
}
