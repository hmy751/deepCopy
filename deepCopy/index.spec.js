import deepCopy from ".";

describe("deepCopy 함수 테스트", () => {
  it("원시형 데이터를 인자로 넘기면 그대로 값을 반환한다.", () => {
    expect(deepCopy(1) === 1).toBe(true);
    expect(deepCopy("1") === "1").toBe(true);
    expect(deepCopy(true) === true).toBe(true);
    expect(deepCopy(null) === null).toBe(true);
  });

  it("객체 데이터를 인자로 넘겨 반환된 객체는 원본과 달라야 한다.", () => {
    const obj = { a: 1 };
    const obj2 = obj;
    const copiedObj = deepCopy(obj2);

    expect(obj === obj2).toBe(true);
    expect(obj === copiedObj).toBe(false);
    expect(JSON.stringify(copiedObj) === JSON.stringify(obj)).toBe(true);
  });

  it("객체 데이터를 인자로 넘길 때, 중첩된 객체일 경우 중첩된 프로퍼티까지 새로운 데이터를 바라보도록 해야한다.", () => {
    const obj = {
      a: 1,
      b: {
        x: 1,
        y: { c: 2, d: 3 },
      },
    };
    const obj2 = obj;
    const copiedObj = deepCopy(obj);

    copiedObj.a = 2;
    copiedObj.b.x = 10;
    copiedObj.b.y.d = 20;

    expect(obj.a === 1).toBe(true);
    expect(obj.b.x === 1).toBe(true);
    expect(obj.b.y.d === 3).toBe(true);

    obj2.a = 2;
    obj2.b.x = 10;
    obj2.b.y.d = 20;

    expect(obj.a === 2).toBe(true);
    expect(obj.b.x === 10).toBe(true);
    expect(obj.b.y.d === 20).toBe(true);
  });

  it("배열 데이터를 인자로 넘겨 반환된 배열은 원본과 달라야 한다.", () => {
    const c = [1, 2, 3];
    const d = c;
    const copiedArr = deepCopy(d);

    expect(c === d).toBe(true);
    expect(c === copiedArr).toBe(false);
    expect(JSON.stringify(c) === JSON.stringify(copiedArr)).toBe(true);

    d[0] = 4;

    expect(c[0] === 4).toBe(true);
    expect(copiedArr[0] === 4).toBe(false);
  });

  it("맵 데이터를 인자로 넘겨 반환된 데이터는 원본과 달라야 한다.", () => {
    const map = new Map([
      [{ x: 1 }, 1],
      ["b", 2],
      [1, "10"],
    ]);
    const map2 = map;
    const copiedMap = deepCopy(map);

    expect(map === map2).toBe(true);
    expect(map === copiedMap).toBe(false);
    expect(map instanceof Map).toBe(true);
    expect(copiedMap instanceof Map).toBe(true);

    map.set("b", 2);

    expect(map2.get("b") === 2).toBe(true);
    expect(copiedMap.get("b") === 2).toBe(false);
  });

  it("셋 데이터를 인자로 넘겨 반환된 데이터는 원본과 달라야 한다.", () => {
    const set = new Set([[{ x: 1 }], ["b"], [1]]);
    const set2 = set;
    const copiedSet = deepCopy(set);

    expect(set === set2).toBe(true);
    expect(set === copiedSet).toBe(false);
    expect(set instanceof Set).toBe(true);
    expect(copiedSet instanceof Set).toBe(true);

    set.add("c");

    expect(set2.has("c")).toBe(true);
    expect(copiedSet.has("c")).toBe(false);
  });
});
