import React from "react";
import { Line } from "react-chartjs-2";

export default function FGsMade40(props) {
  const data = {
    labels: ["2016", "2017", "2018", "2019 (projected)"],
    datasets: [
      {
        label: "Field Goals Made 40-49 Yards",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [props.stat2016, props.stat2017, props.stat2018, props.stat2019]
      }
    ]
  };

  return (
    <div className="charts-container">
      <Line
        data={data}
        width={100}
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}
