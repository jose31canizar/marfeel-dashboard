import React from "react";
import { mount, shallow } from "enzyme";
import LoadingIndicator from "./index";
import LoadingIcon from "../loading-icon";

/*
  Tests for our loading indicator when it is and isn't loading.
*/

describe("LoadingIndicator", () => {
  //it should show whatever children are in our loading indicator if we aren't loading
  describe("when isLoading is false", () => {
    it("should render children", () => {
      const wrapper = mount(
        <LoadingIndicator isLoading={false}>
          <div>graphs</div>
        </LoadingIndicator>
      );
      expect(wrapper.html()).toEqual("<div>graphs</div>");
      wrapper.unmount();
    });
  });

  describe("when isLoading is true", () => {
    //if 200ms haven't passed, it's okay to see a blank screen as we're still loading
    //(we want to avoid flashing to loading icon too early)
    describe("given 200ms have not yet elapsed", () => {
      it("should render nothing", () => {
        const wrapper = mount(
          <LoadingIndicator isLoading={true}>
            <div>graphs</div>
          </LoadingIndicator>
        );
        expect(wrapper.html()).toBe(null);
        wrapper.unmount();
      });
    });
    //after 200ms, if we're still loading, we should expect our loading icon to show
    describe("given 200ms have elapsed", () => {
      it("should render loading indicator", () => {
        jest.useFakeTimers();
        const wrapper = mount(
          <LoadingIndicator isLoading={true}>
            <div>graphs</div>
          </LoadingIndicator>
        );

        expect(setTimeout.mock.calls.length).toEqual(1);
        expect(setTimeout.mock.calls[0][1]).toEqual(200);

        const iconWrapper = shallow(<LoadingIcon />);
        jest.runAllTimers();
        expect(wrapper.html()).toBe(iconWrapper.html());
        wrapper.unmount();
      });
    });
  });

  //we should test if we are clearing our timeout so it can be garbage collected (and avoid memory leaks)
  describe("on unmount", () => {
    it("should clear timeout", () => {
      jest.useFakeTimers();

      const mockTimerValue = 54321;
      setTimeout.mockReturnValue(mockTimerValue);

      const wrapper = mount(
        <LoadingIndicator isLoading={true}>
          <div>ahoy!</div>
        </LoadingIndicator>
      );

      wrapper.unmount();
      expect(clearTimeout.mock.calls.length).toEqual(1);
      expect(clearTimeout.mock.calls[0][0]).toEqual(mockTimerValue);
    });
  });
});
