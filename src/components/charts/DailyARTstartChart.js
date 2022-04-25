import { blue } from "@mui/material/colors";
import { useTheme } from "@mui/system";
import { ResponsiveCalendar } from "@nivo/calendar";

const DailyARTstartChart = (props) => {
    const data = props.artDateData;
    const indicatorColorOne = blue[100];

    const theme = useTheme();

    return (
        <ResponsiveCalendar
            data={data}
            from="2021-03-01"
            to="2022-12-12"
            emptyColor="#888"
            theme={{
                textColor: theme.palette.text.primary,
                tooltip: {
                    container: {
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        fontSize: 12,
                    },
                },
            }}
            colors={[
                indicatorColorOne,
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark,
            ]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            maxValue={5}
            monthLegendPosition="after"
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
