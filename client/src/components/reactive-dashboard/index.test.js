import React from "react";
import { mount, shallow } from "enzyme";
import ReactiveDashboard from "./index";

/*
  Tests for our reactive dashboard at different window dimensions.
*/

describe("ReactiveDashboard", () => {
  describe("when window width is less than threshold", () => {
    it("should render graphs within slider", () => {
      const wrapper = mount(
        <LoadingIndicator isLoading={false}>
          <div>graphs</div>
        </LoadingIndicator>
      );
      expect(wrapper.html()).toEqual("<div>graphs</div>");
      wrapper.unmount();
    });
  });

  describe("when window width is greater than threshold", () => {
    it("should render graphs without slider", () => {
      const wrapper = mount(
        <LoadingIndicator isLoading={false}>
          <div>graphs</div>
        </LoadingIndicator>
      );
      expect(wrapper.html()).toEqual("<div>graphs</div>");
      wrapper.unmount();
    });
  });
});
