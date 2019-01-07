import React from "react";
import LineChart from "react-svg-line-chart";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";

const CircleBar = ({
  percentage,
  points,
  total,
  title,
  color1: { r: r1, g: g1, b: b1 },
  color2: { r: r2, g: g2, b: b2 }
}) => (
  <div className="circle-bar-container">
    <div className="circle-bar">
      <h1>{title}</h1>
      <CircularProgressbar
        initialAnimation={true}
        strokeWidth={5}
        percentage={percentage}
        text={`${total.toFixed(0)}.000€`}
        styles={{
          path: { stroke: `rgba(${r1},${g1},${b1},${percentage / 100})` },
          trail: { stroke: `rgba(${r2},${g2},${b2},${percentage / 100})` },
          text: { fill: "#f88", fontSize: "19px", fontFamily: "Futura" }
        }}
      />
      <LineChart
        areaColor={`rgba(${r1},${g1},${b1},1)`}
        areaOpacity={0.1}
        areaVisible={true}
        gridVisible={false}
        axisVisible={false}
        labelsVisible={false}
        pointsVisible={false}
        pathWidth={20}
        pathColor={`rgba(${r1},${g1},${b1},1)`}
        data={points.map((item, i) => ({
          x: i,
          y: item.amount + 200,
          active: true
        }))}
      />
    </div>
  </div>
);

export default CircleBar;
