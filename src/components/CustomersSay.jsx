export default function CustomersSay() {
  return (
    <section aria-labelledby="reviews-title" className="section">
      <div className="container">
        <h2 id="reviews-title" className="section-title">What our customers say</h2>
        <div className="testimonials">
          <article className="testimonial">
            <p>“Amazing food and service!”</p>
            <p className="author">— Alex</p>
          </article>
          <article className="testimonial">
            <p>“The lemon dessert is a must.”</p>
            <p className="author">— Sam</p>
          </article>
          <article className="testimonial">
            <p>“Lovely ambiance, will be back.”</p>
            <p className="author">— Priya</p>
          </article>
        </div>
      </div>
    </section>
  );
}
