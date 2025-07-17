export default function BlogBanner() {
  return (
    <section
      className="w-full h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url("/green.png")`
      }}
    >
      <h2 className="text-white text-xl md:text-3xl italic">
        Read Our Blog
      </h2>
    </section>
  );
}