export default function JMCinemaFilmsWebsite() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-wedding-toast-1561642047606?download=1080p"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="uppercase tracking-[0.5em] text-sm text-neutral-300 mb-6">
            Los Angeles Wedding & Cinematic Films
          </p>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
            JMCINEMAFILMS
          </h1>

          <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Luxury cinematic storytelling for weddings, music videos,
            nightlife, and unforgettable moments.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#portfolio"
              className="bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-neutral-300 transition"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition"
            >
              Book A Shoot
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-28 px-6 md:px-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-neutral-400 text-sm mb-5">
              About Us
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Cinematic visuals that feel timeless.
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              JMcinemafilms creates emotionally driven visuals designed to feel
              cinematic, immersive, and unforgettable.
            </p>

            <p className="text-neutral-400 text-lg leading-relaxed">
              From luxury weddings to music videos and nightlife content, every
              frame is crafted with intention and storytelling in mind.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop"
            alt="cinematic camera"
            className="rounded-3xl w-full h-[650px] object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-neutral-400 text-sm mb-5">
              Services
            </p>

            <h2 className="text-5xl font-light">
              What We Create
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Wedding Films",
              "Music Videos",
              "Nightlife Content",
              "Promotional Reels",
            ].map((service) => (
              <div
                key={service}
                className="border border-neutral-800 rounded-3xl p-10 hover:border-white transition"
              >
                <h3 className="text-2xl font-light mb-4">{service}</h3>

                <p className="text-neutral-400 leading-relaxed">
                  Cinematic visuals designed to elevate your brand and capture
                  unforgettable moments.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-6 md:px-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-neutral-400 text-sm mb-5">
              Featured Work
            </p>

            <h2 className="text-5xl font-light">
              Recent Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
            ].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl group"
              >
                <img
                  src={image}
                  alt="portfolio"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-neutral-400 text-sm mb-5">
            Testimonials
          </p>

          <h2 className="text-5xl font-light mb-20">
            Client Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Professional, cinematic, and delivered beyond expectations.",
              "The visuals felt like a movie. Incredible experience.",
              "Fast turnaround and amazing attention to detail.",
            ].map((quote, index) => (
              <div
                key={index}
                className="border border-neutral-800 rounded-3xl p-10"
              >
                <p className="text-neutral-300 text-lg leading-relaxed">
                  “{quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 md:px-16 bg-neutral-950 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-neutral-400 text-sm mb-5">
            Let’s Create
          </p>

          <h2 className="text-5xl md:text-7xl font-light mb-8">
            Ready To Shoot?
          </h2>

          <p className="text-neutral-400 text-xl mb-12 leading-relaxed">
            Let’s bring your vision to life with cinematic visuals built to
            stand out.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="mailto:your@email.com"
              className="bg-white text-black px-8 py-4 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-neutral-300 transition"
            >
              Email Us
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="border border-white px-8 py-4 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
