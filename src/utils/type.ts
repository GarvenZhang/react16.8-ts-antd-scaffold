export const getType = (target: any) =>
  Object.prototype.toString
    .call(target)
    .slice(8)
    .slice(0, -1);

export const isType = (target: any, constructor: string) => {
  return Object.prototype.toString.call(target) === `[object ${constructor}]`;
};

export const isPureObject = (target: any) => {
  return isType(target, 'Object');
};

export const isPlainObject = (obj: any) => {
  for (let key in obj) {
    return false;
  }
  return true;
};
