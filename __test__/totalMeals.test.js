import totalMeals from "../src/modules/totalMeals.js";

test("totalMeals updates the text content of mealsCounterElement with the correct length", () => {
  const mealsCounterElement = { textContent: "" };
  const data = [{ meal: "meal1" }, { meal: "meal2" }, { meal: "meal3" }];
  const expectedLength = data.length;

  totalMeals(mealsCounterElement, data);

  expect(mealsCounterElement.textContent).toBe(expectedLength);
});
