
export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-20">

      <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
        What We Do
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-12">
        Our Services.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Branding */}
        <div className="border border-gray-300 rounded-xl p-8 hover:bg-[#17251e] hover:text-white transition">

          <h3 className="text-2xl font-bold mb-4">
            Branding
          </h3>

          <p className="text-gray-500 leading-relaxed">
            We create unique brand identities that make your business stand out.
          </p>

        </div>

        {/* UI/UX Design */}
        <div className="border border-gray-300 rounded-xl p-8 hover:bg-[#17251e] hover:text-white transition">

          <h3 className="text-2xl font-bold mb-4">
            UI/UX Design
          </h3>

          <p className="text-gray-500 leading-relaxed">
            We design simple, beautiful and user-friendly digital experiences.
          </p>

        </div>

        {/* Web Design */}
        <div className="border border-gray-300 rounded-xl p-8 hover:bg-[#17251e] hover:text-white transition">

          <h3 className="text-2xl font-bold mb-4">
            Web Design
          </h3>

          <p className="text-gray-500 leading-relaxed">
            We build modern and responsive websites for businesses and brands.
          </p>

        </div>

      </div>

    </section>
  );
}
