import React, { Component } from "react";
import "./styles/dashboard.css";
import "./styles/index.css";
import Dashboard from "./components/dashboard";

//Our app consists of a single full screen dashboard
export default class extends Component {
  render() {
    return (
      <div className="app">
        <Dashboard metrics={["revenue", "impressions", "visits"]} />
      </div>
    );
  }
}
