/**
 * 深拷贝，遇到字符串加引号
 * @param {Object} target - 目标对象
 */
module.exports = function plusQuot(target) {
  if (typeof target !== 'object') {
    return;
  }

  let newObj = target instanceof Array ? [] : {};

  for (const prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (typeof target[prop] === 'string') {
        newObj[prop] = `'${target[prop]}'`;
      } else if (typeof target[prop] === 'object') {
        newObj[prop] = plusQuot(target[prop]);
      } else {
        newObj[prop] = target[prop];
      }
    }
  }

  return newObj;
};
