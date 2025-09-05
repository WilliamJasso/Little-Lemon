export default function Chicago() {
  return (
    <section aria-labelledby="about-title" className="section">
      <div className="container about">
        <div>
          <h2 id="about-title">About Little Lemon</h2>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist.
            Based in Chicago, we celebrate fresh, seasonal ingredients and the warmth of sharing a table.
          </p>
        </div>
        <div aria-hidden="true">
          <div style={{ height: 200, borderRadius: 'var(--radius)', background: 'linear-gradient(180deg, var(--green-100), var(--green-300))', boxShadow: 'var(--shadow-sm)' }} />
        </div>
      </div>
    </section>
  );
}
