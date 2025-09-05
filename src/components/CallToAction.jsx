import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="hero">
      <div className="container hero-inner">
        <div>
          <h2 id="cta-title" className="hero-title">Reserve your table today</h2>
          <p className="hero-sub">Fresh Mediterranean cuisine in the heart of Chicago. Seasonal ingredients, warm ambiance, and a memorable dining experience.</p>
          <Link to="/booking" className="btn btn-primary" aria-label="Book a table">
            Book Now
          </Link>
        </div>
        <div aria-hidden="true">
          <div
            style={{
              height: 220,
              borderRadius: 'var(--radius)',
              background: 'linear-gradient(180deg, var(--green-200), var(--green-300))',
              boxShadow: 'var(--shadow-md)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
