export function isObject(val: any) {
  return val !== null && typeof val === "object";
}

export function isOn(key: string) {
  return key === "on";
}
