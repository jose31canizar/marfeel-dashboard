import React, { Component } from "react";
import LoadingIcon from "../loading-icon";

export default class extends Component {
  state = {
    isPastDelay: false
  };

  componentDidMount() {
    this._delayTimer = setTimeout(
      () => this.setState({ isPastDelay: true }),
      200
    );
  }
  componentWillUnmount() {
    clearTimeout(this._delayTimer);
  }

  render() {
    if (this.props.isLoading) {
      if (!this.state.isPastDelay) {
        return null;
      }
      return <LoadingIcon />;
    }
    return this.props.children;
  }
}
