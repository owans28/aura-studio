
"use client";

export default function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you for contacting Aura Studio!");

    event.target.reset();
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-20 bg-[#eae9e1]"
    >

      <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
        Get In Touch
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-10">
        Let's Talk.
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl flex flex-col gap-6"
      >

        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-4 bg-transparent border-b border-gray-400 outline-none focus:border-orange-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-4 bg-transparent border-b border-gray-400 outline-none focus:border-orange-500"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
          className="p-4 bg-transparent border-b border-gray-400 outline-none focus:border-orange-500 resize-none"
        />

        <button
          type="submit"
          className="bg-[#17251e] text-white py-4 px-8 rounded-full w-fit hover:bg-orange-500 transition"
        >
          Send Message →
        </button>

      </form>

    </section>
  );
}
