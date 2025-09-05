import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../state/bookingReducer";

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  function dispatchDateChange(dateStr) {
    dispatch({ type: "date_changed", payload: dateStr });
  }

  async function submitForm(formData) {
    const ok = typeof window !== 'undefined' && window.submitAPI ? window.submitAPI(formData) : true;
    if (ok) navigate("/confirmed");
  }

  return (
    <div className="container section">
      <h1>Reserve a table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchDateChange={dispatchDateChange}
        onSubmit={submitForm}
      />

      <section aria-live="polite" style={{ marginTop: 16 }}>
        <h2>Available slots</h2>
        <ul>{availableTimes.map((t) => (
          <li key={t}>{t}</li>
        ))}</ul>
      </section>
    </div>
  );
}
