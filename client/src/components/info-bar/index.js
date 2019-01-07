import React, { Component } from "react";
import "./index.css";

export default class extends Component {
  render() {
    const { color1, color2, percentage, total, tablet } = this.props;

    const percentage1 = percentage.toFixed(0);
    const percentage2 = (100 - percentage).toFixed(0);

    return (
      <div className="info-bar">
        <p style={{ color: `rgba(${color2.r},${color2.g},${color2.b},1)` }}>
          Tablet
        </p>
        <p style={{ color: `rgba(${color1.r},${color1.g},${color1.b},1)` }}>
          Smartphone
        </p>
        <div className="info-percentage">
          <p>{percentage1}% </p>
          <p className="grey">{tablet}.000€</p>
        </div>
        <div className="info-percentage">
          <p>{percentage2}% </p>
          <p className="grey">{total - tablet}.000€</p>
        </div>
        <hr />
      </div>
    );
  }
}
