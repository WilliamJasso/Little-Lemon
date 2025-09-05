export default function Footer() {
  return (
    <footer role="contentinfo" className="site-footer">
      <div className="container inner">
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Little Lemon</p>
        <a href="/booking" aria-label="Reserve a table">Reserve now</a>
      </div>
    </footer>
  );
}
