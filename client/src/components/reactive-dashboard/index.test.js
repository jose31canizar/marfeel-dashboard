import React from "react";
import { mount, shallow } from "enzyme";
import ReactiveDashboard from "./index";

/*
  Tests for our reactive dashboard at different window dimensions.
*/

describe("ReactiveDashboard", () => {
  describe("when window width is < than threshold", () => {
    it("should render graphs within slider", () => {
      const wrapper = mount(
        <ReactiveDashboard
          width={790}
          threshold={810}
          render={() => <div>graphs</div>}
        />
      );
      expect(wrapper.html()).not.toEqual(
        '<div class="dashboard"><div>graphs</div></div>'
      );
      wrapper.unmount();
    });
  });

  describe("when window width is > than threshold", () => {
    it("should render graphs without slider", () => {
      const wrapper = mount(
        <ReactiveDashboard
          width={810}
          threshold={790}
          render={() => <div>graphs</div>}
        />
      );
      expect(wrapper.html()).toEqual(
        '<div class="dashboard"><div>graphs</div></div>'
      );
      wrapper.unmount();
    });
  });
});
