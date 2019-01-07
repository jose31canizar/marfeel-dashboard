import React, { Component } from "react";
import Slider from "react-slick";

/*
  A reactive dashboard reacts to resize changes (and for mobile screens)

  It is wrapped in a slider if it is less than the specified threshold
*/
export default class extends Component {
  render() {
    const { threshold, render, width } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 350,
      easing: "cubic",
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false
    };
    return (
      <div className="dashboard">
        {width > threshold ? (
          render()
        ) : (
          <Slider {...settings}>{render()}</Slider>
        )}
      </div>
    );
  }
}
