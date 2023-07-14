/**
 * 어떤 데이터 타입이든 데이터를 입력받아 깊은 복사하여 반환하는 함수
 * @param {any} data 모든 데이터 타입
 * @returns 데이터를 깊은 복사해서 반환
 */
const deepCopy = (data) => {
  // 참조 타입
  // null도 object이기에 조건 덧붙임
  if (typeof data === "object" && data !== null) {
    if (Array.isArray(data)) {
      return data.map((item) => deepCopy(item));
    }

    if (data instanceof Map) {
      const copiedMap = new Map(data.entries());
      return copiedMap;
    }

    if (data instanceof Date) {
      return new Date(data.getTime());
    }

    if (data instanceof Set) {
      const copiedSet = new Set();
      data.forEach((item) => copiedSet.add(deepCopy(item)));
      return copiedSet;
    }

    if (data instanceof RegExp) {
      const flags = data.flags;
      const pattern = data.source;

      return new RegExp(pattern, flags);
    }

    const copiedObj = {};
    Object.keys(data).forEach((key) => {
      copiedObj[key] = deepCopy(data[key]);
    });
    return copiedObj;
  }

  // 원시 타입
  return data;
};

// const obj1 = { name: { first: "sunwoo", last: "kang", arr: [1, 3, 5] } };
// const copiedObj1 = deepCopy(obj1);

// const arr = [3, 5, [[2, 6]]];
// const copiedArr = deepCopy(arr);
// arr.push([3]);

// const map1 = new Map([
//   ["name", "sunwoo"],
//   ["age", 55],
// ]);
// const copiedMap1 = deepCopy(map1);
// map1.set("gender", "male");

// const wm = new WeakMap();
// wm.set({}, 20);
// const copiedWm = deepCopy(wm);
// wm.set(() => {}, 50);

// obj1.name.arr.push([3, 5]);

// const sym1 = Symbol("abc");
// const copiedSym1 = deepCopy(sym1);

// let fun = function () {
//   return 1;
// };
// let copiedFun = deepCopy(fun);

// const date = new Date();
// const copiedDate = deepCopy(date);
// date.setMonth(9);

// const set = new Set([1, 2]);
// const copiedSet = deepCopy(set);
// set.add(3);

// const regex = new RegExp("ab+c", "i");
// const copiedRegex = deepCopy(regex);

// console.log(copiedObj1, obj1, copiedObj1 === obj1);
// console.log(copiedMap1, map1);
// console.log(wm, copiedWm);
// console.log(sym1, copiedSym1);
// console.log(fun, copiedFun);
// console.log(date, copiedDate);
// console.log(set, copiedSet);
// console.log(regex, copiedRegex);
// console.log(arr, copiedArr);
