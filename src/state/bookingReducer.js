// The API is injected globally via <script> in index.html
export function initializeTimes() {
  const today = new Date();
  return typeof window !== 'undefined' && window.fetchAPI
    ? window.fetchAPI(today)
    : ["17:00", "18:00", "19:00"]; // fallback
}

export function updateTimes(state, action) {
  if (action?.type === "date_changed") {
    const d = new Date(action.payload);
    return typeof window !== 'undefined' && window.fetchAPI ? window.fetchAPI(d) : state;
  }
  return state;
}

