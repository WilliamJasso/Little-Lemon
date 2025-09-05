export default function Specials() {
  return (
    <section aria-labelledby="specials-title" className="section">
      <div className="container">
        <div className="section-title">
          <h2 id="specials-title">This Week’s Specials</h2>
          <a className="btn btn-outline" href="/menu">View Menu</a>
        </div>
        <div className="cards">
          <article className="card">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem' }}>
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </header>
            <p>Crisp lettuce, olives, feta, and a zesty lemon-oregano vinaigrette.</p>
          </article>
          <article className="card">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem' }}>
              <h3>Bruschetta</h3>
              <span className="price">$6.50</span>
            </header>
            <p>Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.</p>
          </article>
          <article className="card">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem' }}>
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
            </header>
            <p>Our signature creamy lemon dessert with a hint of zest.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
