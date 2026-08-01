'use client'
import { useContext } from "react";
import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FdContext } from "../Context/context";

const Dashboard = () => {
  const { callCount, messageCount, videoCount } = useContext(FdContext)

  const data = [
    {
      name: "Text",
      value: messageCount,
      fill: "#7C3AED",
    },
    {
      name: "Call",
      value: callCount,
      fill: "#14532D",
    },
    {
      name: "Video",
      value: videoCount,
      fill: "#22C55E",
    },
  ];


  return (
    <div className="bg-gray-50">
      <div className="min-h-screen px-10 py-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-5">
            By Interaction Type
          </h2>

          <div className="h-75">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={8}
                  cornerRadius={8}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;