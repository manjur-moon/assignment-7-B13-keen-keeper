import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const chartColors = {
  Text: "#7e35e1",
  Call: "#244d3f",
  Video: "#37a163",
};

const StatsChart = ({ data }) => {
  return (
    <div className="mx-auto mt-5 h-[300px] w-full max-w-[460px] sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="46%"
            innerRadius={68}
            outerRadius={98}
            paddingAngle={4}
            dataKey="value"
            nameKey="name"
            stroke="none"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={chartColors[entry.name]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} interactions`, name]} />
          <Legend
            iconType="circle"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ fontSize: "12px", color: "#1f2937" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
