const add = require("./calculator");

describe("String Calculator", () => {
  // test: empty string should return 0.
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0); 
  });
  // test: simple number should return that number.
  test("should return the number itself if only one number is provided", () => {
    expect(add("1")).toBe(1);
  });
  // test: two comma-seperated numbers should return their sum.

  test("should return the sum of two numbers seperated by a coma", () => {
    expect(add("1,2")).toBe(3);
  });
  // test: multiple comma- seperated numbers should return their sum.
  test("should handle multiple numbers seperated by commas", () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("1,,4")).toBe(5);
  });
  // test: mixed input of new lines and commas should rreturn the correct sum..

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // test: handling edge cases like missing or invalid input.
  test('should handle missing numbers gracefully (like "1,,3" => 4)', () => {
    expect(add("1,,3")).toBe(4); // treat empty spaces as 0.
  });

  // option: handle negative numbers and throw an error.
  test("should throw and error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow(
      "nagative numberts are not allowed: -2"
    );
  });
});
