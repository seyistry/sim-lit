import { blue } from "@mui/material/colors";
import { useTheme } from "@mui/system";
import { ResponsiveCalendar } from "@nivo/calendar";

const today = new Date();
// get today's year
const year = today.getFullYear();
const DailyARTstartChart = (props) => {
  const data = props.artDateData;
  const indicatorColorOne = blue[900];

  const theme = useTheme();

  return (
    <ResponsiveCalendar
      data={data}
      from={`${year - 1}-01-01`}
      to={`${year}-12-31`}
      emptyColor="#eee"
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
        theme.palette.primary.light,
        theme.palette.primary.main,
        theme.palette.primary.dark,
        indicatorColorOne,
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
