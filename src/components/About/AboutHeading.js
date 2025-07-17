const AboutHeading = () => {
  return (
    <section className="position-relative w-100" style={{ height: '500px' }}>
      {/* صورة الخلفية */}
      <img
        src="/22.jpg"
        alt="About Background"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      {/* الغلاف الأسود الشفاف + العنوان */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      >
        <h2 className="text-white display-5 fst-italic fw-light m-0">Our Story</h2>
      </div>
    </section>
  );
};

export default AboutHeading;
