// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getArrayDepth = (value: any[]): number =>
  Array.isArray(value) ? 1 + Math.max(0, ...value.map(getArrayDepth)) : 0
