import React, { Component } from "react";
import CircleBar from "../circle-bar";
import InfoBar from "../info-bar";
import "./index.css";

export default class extends Component {
  render() {
    const { data } = this.props;
    const { color1, color2, metric } = data;

    const total = data.points
      .map(item => item.amount)
      .reduce((acc, item) => acc + item);

    const tablet = data.points
      .filter(item => item.device === "tablet")
      .map(item => item.amount)
      .reduce((acc, item) => acc + item);

    const percentage1 = (tablet / total) * 100;

    const percentage2 = 100 - percentage1;

    return (
      <div className="graph-view">
        <CircleBar
          total={total}
          percentage={percentage1}
          points={data.points}
          title={metric}
          color1={color1}
          color2={color2}
        />
        <InfoBar
          percentage={percentage1}
          tablet={tablet}
          total={total}
          color1={color1}
          color2={color2}
        />
      </div>
    );
  }
}
