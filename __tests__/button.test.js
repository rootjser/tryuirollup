import Vue from "vue";
import button from "../lib/button";

describe("test button feature", () => {
  test("button 组件存在", () => {
    expect(button).toBeDefined();
  });
  test("button install 方法存在", () => {
    expect(button.install).toBeDefined();
  });
  test("button render 方法存在", () => {
    expect(button.render).toBeDefined();
  });
  test("button vue 实例", () => {
    const inst = new Vue(button);
    expect(inst.$data.a).toEqual(1);
  });
});
