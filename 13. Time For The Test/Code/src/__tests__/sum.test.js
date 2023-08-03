import { sum } from "../components/sum";

test("should return sum of two numbers", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});
