import React, { Component } from "react";
import ReactDOM from "react-dom";

export default function withSize(WrappedComponent) {
  return class extends Component {
    state = {
      width: null,
      height: null
    };
    handleResize = () => {
      const height = Math.max(
        document.body.clientHeight,
        window.innerHeight || 0
      );
      const width = Math.max(document.body.clientWidth, window.innerWidth || 0);
      this.setState({
        width,
        height
      });
    };
    componentDidMount() {
      this.resizeListener = window.addEventListener("resize", () => {
        this.handleResize();
      });
      this.handleResize();
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.resizeListener);
    }
    render() {
      return <WrappedComponent {...{ ...this.state, ...this.props }} />;
    }
  };
}
