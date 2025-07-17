export default function TopImage() {
  return (
    <section className="position-relative w-100" style={{ height: '500px' }}>
      <img
        src="/Topimage.avif"
        alt="Accessories Hero"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-start align-items-end px-4 pb-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
      </div>
    </section>
  );
}
