import { initializeTimes, updateTimes } from "../src/state/bookingReducer";

beforeAll(() => {
  global.window = global.window || {};
  global.window.fetchAPI = (d) => ["17:00", "18:00"]; // stable mock
});

test("initializeTimes returns non-empty array", () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns array for given date", () => {
  const current = ["17:00"]; 
  const next = updateTimes(current, { type: "date_changed", payload: "2025-09-04" });
  expect(next).toEqual(["17:00", "18:00"]);
});

