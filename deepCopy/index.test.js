const deepCopy = require(".");

test("number", () => {
  let defaultNumber = 3;
  const copiedNumber = deepCopy(defaultNumber);
  defaultNumber = 5;

  expect(defaultNumber === copiedNumber).toBe(false);
});

test("string", () => {
  let defaultString = "sun";
  const copiedString = deepCopy(defaultString);
  defaultString = "woo";

  expect(defaultString === copiedString).toBe(false);
});

test("object", () => {
  const defaultObject = {
    name: { first: "sunwoo", last: "kang", inner: [1, 3, 5] },
  };
  const copiedObject = deepCopy(defaultObject);

  expect(defaultObject.name === copiedObject.name).toBe(false);
});

test("array", () => {
  const defaultArray = [3, 5, [[2, 6]]];
  const copiedArray = deepCopy(defaultArray);

  expect(defaultArray === copiedArray).toBe(false);
});

test("Map", () => {
  const defaultMap = new Map([
    ["name", "sunwoo"],
    ["age", 55],
  ]);
  const copiedMap = deepCopy(defaultMap);

  expect(defaultMap === copiedMap).toBe(false);
});

test("WeakMap", () => {
  const defaultWeakMap = new WeakMap();
  defaultWeakMap.set({}, 20);
  const copiedWeakMap = deepCopy(defaultWeakMap);
  defaultWeakMap.set(() => {}, 50);

  expect(defaultWeakMap === copiedWeakMap).toBe(false);
});

test("Symbol", () => {
  const defaultSymbol = Symbol("test");
  const copiedSymbol = deepCopy(defaultSymbol);

  expect(defaultSymbol === copiedSymbol).toBe(false);
});

test("function", () => {
  const defaultFunction = () => {
    return 1;
  };
  const copiedFunction = deepCopy(defaultFunction);

  expect(defaultFunction === copiedFunction).toBe(false);
});

test("date", () => {
  const defaultDate = new Date();
  const copiedDate = deepCopy(defaultDate);

  expect(defaultDate === copiedDate).toBe(false);
});

test("set", () => {
  const defaultSet = new Set([1, 2]);
  const copiedSet = deepCopy(defaultSet);

  expect(defaultSet === copiedSet).toBe(false);
});

test("WeakSet", () => {
  const defaultWeakSet = new WeakSet();
  defaultWeakSet.add([3, 5]);
  const copiedWeakSet = deepCopy(defaultWeakSet);
  defaultWeakSet.add([7]);

  expect(defaultWeakSet === copiedWeakSet).toBe(false);
});

test("regex", () => {
  const defaultRegex = new RegExp("ab+c", "i");
  const copiedRegex = deepCopy(defaultRegex);

  expect(defaultRegex === copiedRegex).toBe(false);
});
