const copyMap = (data) => {
  const copiedMap = new Map(data.entries());
  return copiedMap;
};

const copyDate = (data) => {
  return new Date(data.getTime());
};

const copySet = (data) => {
  const copiedSet = new Set();
  data.forEach((item) => copiedSet.add(deepCopy(item)));
  return copiedSet;
};

const copyRegExp = (data) => {
  const flags = data.flags;
  const pattern = data.source;
  return new RegExp(pattern, flags);
};

const copyObject = (data) => {
  const copiedObj = {};
  Object.keys(data).forEach((key) => {
    copiedObj[key] = deepCopy(data[key]);
  });
  return copiedObj;
};

const copySymbol = (data) => {
  const clone = Object(Symbol.prototype.valueOf.call(data));
  Object.setPrototypeOf(clone, Object.getPrototypeOf(data));
  return clone;
};

/**
 * 어떤 데이터 타입이든 데이터를 입력받아 깊은 복사하여 반환하는 함수
 * @param {any} data 모든 데이터 타입
 * @returns 데이터를 깊은 복사해서 반환
 */
const deepCopy = (data) => {
  const copyFunctions = new Map([
    [Array, (arr) => arr.map((item) => deepCopy(item))],
    [Map, copyMap],
    [Date, copyDate],
    [Set, copySet],
    [RegExp, copyRegExp],
    [WeakMap, (weakMap) => weakMap],
    [WeakSet, (weakSet) => weakSet],
    [Object, copyObject],
    [Symbol, copySymbol],
    [Function, (func) => func],
    ["primitive", (data) => data],
  ]);

  const copyFunction =
    copyFunctions.get(data?.constructor) || copyFunctions.get("primitive");
  return copyFunction(data);
};

module.exports = deepCopy;
