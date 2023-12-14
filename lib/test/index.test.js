const index = require("../../index");
const userInput = require("../script/inquirer");

describe("inquirer", () => {
  describe("userInput", () => {
    it("should return an object with four answers", () => {
      const userAnswer = userInput();
      const object = {
        text: "SJS",
        textColor: "purple",
        shape: "square",
        shapeColor: "yellow",
      };
      const objLength = Object.keys(object).length;
      const value = Object.values(userAnswer);

      expect(typeof userAnswer).toBe("object");
      expect(objLength).toBe(4);
      expect(value.every((value) => value !== "")).toBe(true);
    });
  });
});