import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/system";

const PieChart = (props) => {
    const theme = useTheme();
    const data = [
        {
            id: "Active",
            label: "Active",
            value: props.active,
        },
        {
            id: "LTFU",
            label: "LTFU",
            value: props.LTFU,
        },
        {
            id: "Missed Appointment",
            label: "Missed Appointment",
            value: props.missAppintment,
        },
    ];
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            colors={["#1976D2", "#D32F2F", "#ED6C02"]}
            // colors={{ scheme: "set1" }}
            borderColor={{
                from: "color",
                modifiers: [["darker", 1.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={theme.palette.text.primary}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["brighter", 10]],
            }}
            defs={[
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: "Missed Appointment",
                    },
                    id: "lines",
                },
            ]}
            theme={{
                tooltip: {
                    container: {
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        fontSize: 12,
                    },
                    basic: {},
                    chip: {},
                    table: {},
                    tableCell: {},
                    tableCellValue: {},
                },
            }}
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: theme.palette.text.secondary,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: theme.palette.text.primary,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};
export default PieChart;
