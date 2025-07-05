import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from "recharts";
import PropTypes from "prop-types";



export default function MyChart(props) {

  const dataCountByMonth = Array(12).fill(0);

  (props.datas)?.forEach(data => {
    const monthIndex = new Date(data.created_at).getMonth();
    dataCountByMonth[monthIndex]++;
  });

  const pageData = [
    { name: "Jan", [props.dataKey]: dataCountByMonth[0] },
    { name: "Feb", [props.dataKey]: dataCountByMonth[1] },
    { name: "Mar", [props.dataKey]: dataCountByMonth[2] },
    { name: "Apr", [props.dataKey]: dataCountByMonth[3] },
    { name: "May", [props.dataKey]: dataCountByMonth[4] },
    { name: "Jun", [props.dataKey]: dataCountByMonth[5] },
    { name: "Jul", [props.dataKey]: dataCountByMonth[6] },
    { name: "Aug", [props.dataKey]: dataCountByMonth[7] },
    { name: "Sep", [props.dataKey]: dataCountByMonth[8] },
    { name: "Oct", [props.dataKey]: dataCountByMonth[9] },
    { name: "Nov", [props.dataKey]: dataCountByMonth[10] },
    { name: "Dec", [props.dataKey]: dataCountByMonth[11] }
  ];


  return (
    <ResponsiveContainer width="100%" height={props.height}>
      <AreaChart data={pageData} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="2 2" stroke="#475569" />
        <XAxis dataKey="name" tick={{ fill: props.XAxisTextColor, fontSize: '1rem', fontWeight: 700 }} />
        <YAxis allowDecimals={false} tick={{ fill: props.YAxisTextColor, fontSize: '1rem', fontWeight: 700 }} />
        <Tooltip wrapperStyle={{
          color: props.YAxisTextColor,
          fontSize: '0.8rem',
          fontWeight: 600,
        }} />
        <Area type="monotone" dataKey={props.dataKey} stroke={props.chartLineColor} fill={props.bgColor} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

MyChart.propTypes = {
  datas: PropTypes.array,
  dataKey: PropTypes.string,
  height: PropTypes.number,
  bgColor: PropTypes.string,
  chartLineColor: PropTypes.string,
  XAxisTextColor: PropTypes.string,
  YAxisTextColor: PropTypes.string,
};
