import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "../src/components/BookingForm";

test("renders Booking Form heading/labels", () => {
  render(
    <BookingForm availableTimes={[]} dispatchDateChange={() => {}} onSubmit={() => {}} />
  );
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /make your reservation/i })
  ).toBeDisabled();
});

