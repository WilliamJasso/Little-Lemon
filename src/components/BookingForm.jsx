import { useEffect, useState } from "react";

export default function BookingForm({ availableTimes, dispatchDateChange, onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const allValid = date && time && guests >= 1 && guests <= 10 && occasion;
    setIsValid(Boolean(allValid));
  }, [date, time, guests, occasion]);

  function handleDate(e) {
    const d = e.target.value;
    setDate(d);
    if (typeof dispatchDateChange === 'function') {
      dispatchDateChange(d);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    onSubmit?.({ date, time, guests, occasion });
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form" className="form">
      <div className="field">
        <label htmlFor="res-date">Choose date</label>
        <div className="control">
          <input id="res-date" className="input-date" type="date" required value={date} onChange={handleDate} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="res-time">Choose time</label>
        <div className="control">
          <select id="res-time" className="select" required value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="" disabled>
              -- Select time --
            </option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="guests">Number of guests</label>
        <div className="control">
          <input
            id="guests"
            className="input-number"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            required
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="occasion">Occasion</label>
        <div className="control">
          <select id="occasion" className="select" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
      </div>

      <button type="submit" disabled={!isValid} className="btn btn-primary">
        Make your reservation
      </button>
    </form>
  );
}
