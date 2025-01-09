const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const obj = {
    cat: "Shishi",
    dog: "Alma",
    dog2: "Nero",
    dogs: ["Pinocchio", "Rambo"],
  };

  obj["dog3"] = "Ricky";

  expect(obj).toEqual({
    cat: "Shishi",
    dog: "Alma",
    dog2: "Nero",
    dog3: "Ricky",
    dogs: ["Pinocchio", "Rambo"],
  });
});

test("adding positive numbers", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("testing for null values", () => {
  const valueToCheck = null;
  expect(valueToCheck).toBeNull();
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("there is no M in cristina", () => {
  expect("cristina").not.toMatch(/M/);
});

const food = ["salad", "eggs", "chicken", "bananas"];

test("there are bananas in the shopping list", () => {
  expect(food).toContain("bananas");
});
