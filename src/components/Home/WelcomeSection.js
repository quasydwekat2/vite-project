export default function WelcomeSection() {
  return (
   <section
  className="h-[100vh] pt-[15vh] bg-[url('https://static.wixstatic.com/media/84770f_e2414b51861b44239ca93821cb1f359b~mv2_d_5249_2889_s_4_2.jpg')] bg-cover bg-bottom text-white flex flex-col items-center justify-center text-center"
>
      <h2 className="text-3xl md:text-4xl font-light mb-2">It's Always Tea Time</h2>
      <h3 className="text-xl italic mb-6">With Bloom's Herbal Tea</h3>
      <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
        SHOP NOW
      </button>
    </section>
  );
}