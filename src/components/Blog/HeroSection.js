export default function HeroSection() {
  return (
    <section className="position-relative w-100" style={{ height: '500px' }}>
      {/* صورة الخلفية */}
      <img
        src="/blog-hero.avif"
        alt="Hero Background"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      {/* غلاف أسود شفاف والنص */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      >
        <h1 className="text-white display-5 fst-italic fw-light m-0">
          Bloom's Blog
        </h1>
      </div>
    </section>
  );
}
