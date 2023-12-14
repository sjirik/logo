const userInput = require("../script/inquirer");
const { Shape, Circle, Square, Triangle } = require("../script/shapes");

describe("Triangle", () => {
  it("should return a triangle", () => {
    const triTest = new Triangle("white", "blue", "ZZZ", "green");
    expect(triTest.stroke).toBe("white");
    expect(triTest.fill).toBe("blue");
    expect(triTest.text).toBe("ZZZ");
    expect(triTest.textColor).toBe("green");
  });
});

describe("Circle", () => {
  it("should return a Circle", () => {
    const cirTest = new Circle("blue", "red", "TTT", "white");
    expect(cirTest.stroke).toBe("blue");
    expect(cirTest.fill).toBe("red");
    expect(cirTest.text).toBe("TTT");
    expect(cirTest.textColor).toBe("white");
  });
});

describe("Square", () => {
  it("should return a square", () => {
    const squTest = new Square("blue", "black", "MMM", "white");
    expect(squTest.stroke).toBe("blue");
    expect(squTest.fill).toBe("black");
    expect(squTest.text).toBe("MMM");
    expect(squTest.textColor).toBe("white");
  });
});