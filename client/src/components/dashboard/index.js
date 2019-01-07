import React, { Component } from "react";
import GraphView from "../graph-view";
import LoadingIndicator from "../loading-indicator";
import withSize from "../with-size";
import ReactiveDashboard from "../reactive-dashboard";
import { handleErrors } from "../../utility/handle-errors";

const { NODE_ENV } = process.env;

/*
  Our dashboard will show a loading indicator as it retrieves data.
  Once it receives all data, it will load and populate all graph views.
*/
export default withSize(
  class extends Component {
    state = {
      data: [],
      isLoading: true
    };
    componentDidMount() {
      this.props.metrics.map(x => this.getData(x));
    }
    getData(x) {
      fetch(`http://localhost:${NODE_ENV === "development" ? 3000 : 8000}/${x}`)
        .then(handleErrors)
        .then(d => {
          this.setState(
            ({ data }) => ({ data: [...data, d] }),
            () => {
              if (this.state.data.length === this.props.metrics.length) {
                this.setState({ isLoading: false });
              }
            }
          );
        })
        .catch(err => console.log(err));
    }
    render() {
      const { data, isLoading } = this.state;
      const { width, height } = this.props;
      return (
        <LoadingIndicator isLoading={isLoading}>
          <ReactiveDashboard
            width={width}
            threshold={720}
            render={() =>
              data.map((d, i) => <GraphView key={`graph-view-${i}`} data={d} />)
            }
          />
        </LoadingIndicator>
      );
    }
  }
);
