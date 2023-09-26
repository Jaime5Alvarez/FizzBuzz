const { describe, expect, test } = require("@jest/globals");

const FizzBuzz = (number) => {
  if (number % 3 == 0 && number % 5 == 0) return "FizzBuzz";
  else if (number % 3 == 0) return "Fizz";
  else if (number % 5 == 0) return "Buzz";
  else return String(number);
};

describe("FizzBuzz", () => {
  test("should return Fizz when value is multiple of 3", () => {
    expect(FizzBuzz(9)).toBe("Fizz");
  });
  test("should return Buzz when value is multiple of 5", () => {
    expect(FizzBuzz(10)).toBe("Buzz");
  });
  test("should return FizzBuzz when value is multiple of 3 and 5", () => {
    expect(FizzBuzz(30)).toBe("FizzBuzz");
  });
});
