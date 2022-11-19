import { describe, it, expect } from "vitest";
import { isObject, isOn } from "../src/index";

describe("测试工具库", () => {
  it("测试 isObject", () => {
    expect(isObject({})).toEqual(true);
    expect(isObject({ a: 1 })).toEqual(true);
    expect(isObject("")).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
    expect(isObject(null)).toEqual(false);
  });

  it("测试 isOn", () => {
    expect(isOn("{}")).toEqual(false);
    expect(isOn("on")).toEqual(true);
  });
});
