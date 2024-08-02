import deepCopy from ".";

describe("deepCopy 함수 테스트", () => {
  it("원시형 데이터를 인자로 넘기면 그대로 값을 반환한다.", () => {
    expect(deepCopy(1) === 1).toBe(true);
    expect(deepCopy("1") === "1").toBe(true);
    expect(deepCopy(true) === true).toBe(true);
  });
});
