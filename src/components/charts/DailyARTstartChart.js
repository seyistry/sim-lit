import { ResponsiveCalendar } from "@nivo/calendar";
const DailyARTstartChart = (props) => {
    const data = props.artDateData;
    return (
        <ResponsiveCalendar
            data={data}
            from="2021-03-01"
            to="2022-12-12"
            emptyColor="#eeeeee"
            colors={["#abb5fa", "#4791db", "#1976D2", "#115293"]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            maxValue={5}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "row",
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: "right-to-left",
                },
            ]}
        />
    );
};

export default DailyARTstartChart;
