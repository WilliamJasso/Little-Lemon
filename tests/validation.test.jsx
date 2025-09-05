import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "../src/components/BookingForm";

test("form disables submit when invalid and enables when valid", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatchDateChange={() => {}}
      onSubmit={() => {}}
    />
  );
  const submit = screen.getByRole("button", { name: /make your reservation/i });
  expect(submit).toBeDisabled();
  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: "2025-09-10" },
  });
  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: "17:00" },
  });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: "2" },
  });
  expect(submit).toBeEnabled();
});

