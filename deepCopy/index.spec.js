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
});
