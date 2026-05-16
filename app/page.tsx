export default function JMcinemaFilmsWebsite() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl tracking-[0.25em] text-white mb-6">
            JM
          </h1>

          <h2 className="text-2xl md:text-5xl text-white tracking-[0.35em] mb-6">
            JMCINEMAFILMS
          </h2>

          <p className="text-lg md:text-2xl text-neutral-200 italic mb-10">
            Timeless films. True stories. Forever yours.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-full tracking-widest text-sm hover:bg-neutral-200 transition"
            >
              INQUIRE NOW
            </a>

            <a
              href="#films"
              className="border border-white text-white px-8 py-4 rounded-full tracking-widest text-sm hover:bg-white hover:text-black transition"
            >
              WATCH FILMS
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 md:px-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1974&auto=format&fit=crop"
            alt="Couple"
            className="rounded-3xl shadow-2xl h-[600px] object-cover w-full"
          />

          <div>
            <p className="tracking-[0.3em] text-sm uppercase mb-5 text-neutral-500">
              About Us
            </p>

            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Cinematic Wedding Storytelling
            </h2>

            <p className="text-lg leading-9 text-neutral-700 mb-6">
              At JMCINEMAFILMS, we create emotional, cinematic wedding films
              designed to feel timeless for decades to come.
            </p>

            <p className="text-lg leading-9 text-neutral-700 mb-10">
              Inspired by luxury cinema and authentic storytelling, we capture
              weddings with intention, movement, emotion, and artistry.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl mb-2">50+</h3>
                <p className="text-neutral-600">Films Created</p>
              </div>

              <div>
                <h3 className="text-3xl mb-2">4K</h3>
                <p className="text-neutral-600">Cinematic Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Films */}
      <section id="films" className="py-24 px-6 md:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] text-sm uppercase mb-5 text-neutral-400">
              Featured Films
            </p>

            <h2 className="text-4xl md:text-6xl">
              Love Stories Through Cinema
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Malibu Wedding',
                img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1974&auto=format&fit=crop',
              },
              {
                title: 'Luxury Garden Ceremony',
                img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1974&auto=format&fit=crop',
              },
              {
                title: 'Modern Romance',
                img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1974&auto=format&fit=crop',
              },
            ].map((film, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={film.img}
                  alt={film.title}
                  className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl mb-2">{film.title}</h3>
                  <button className="text-sm tracking-[0.25em] border-b border-white pb-1">
                    WATCH FILM
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="tracking-[0.3em] uppercase text-sm text-neutral-500 mb-5">
            The Experience
          </p>

          <h2 className="text-4xl md:text-6xl mb-10">
            More Than A Wedding Video
          </h2>

          <p className="text-xl leading-10 text-neutral-700">
            We believe your wedding film should feel like a memory — emotional,
            cinematic, and deeply personal. Every frame is crafted to preserve
            the atmosphere, energy, and emotion of your day exactly as it felt.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 md:px-16 bg-neutral-100"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="tracking-[0.3em] uppercase text-sm text-neutral-500 mb-5">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl mb-8">
            Let’s Tell Your Story
          </h2>

          <p className="text-lg text-neutral-700 mb-12 leading-8">
            We would be honored to document your wedding day with intention,
            artistry, and cinematic storytelling.
          </p>

          <div className="bg-white rounded-3xl shadow-xl p-10 text-left">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                placeholder="Your Name"
                className="border border-neutral-300 rounded-xl px-5 py-4 outline-none"
              />

              <input
                placeholder="Email Address"
                className="border border-neutral-300 rounded-xl px-5 py-4 outline-none"
              />
            </div>

            <textarea
              placeholder="Tell us about your wedding..."
              rows={6}
              className="w-full border border-neutral-300 rounded-xl px-5 py-4 outline-none mb-6"
            />

            <button className="w-full bg-black text-white py-4 rounded-xl tracking-[0.25em] hover:bg-neutral-800 transition">
              SEND INQUIRY
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">
        <h3 className="tracking-[0.3em] text-xl mb-4">JMCINEMAFILMS</h3>

        <p className="text-neutral-400 mb-2">
          Southern California Wedding Filmmakers
        </p>

        <p className="text-neutral-500 text-sm">
          © 2026 JMCINEMAFILMS. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
