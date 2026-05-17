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
          src="https://cdn.coverr.co/videos/coverr-wedding-toast-1561577607261?download=1080p"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="uppercase tracking-[0.5em] text-sm md:text-base text-neutral-300 mb-6">
            Luxury Wedding Cinematography
          </p>

          <h1 className="text-5xl md:text-8xl font-light tracking-wide mb-8">
            JMCINEMAFILMS
          </h1>

          <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            Timeless cinematic wedding films crafted with emotion,
            elegance, and unforgettable storytelling.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="#films"
              className="border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition duration-300"
            >
              View Films
            </a>

            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-neutral-200 transition duration-300"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop"
            alt="Wedding Couple"
            className="w-full h-[600px] object-cover"
          />

          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-neutral-400 mb-5">
              Our Approach
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              More Than A Wedding Video
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              We create cinematic wedding films that preserve every emotion,
              every glance, and every unforgettable moment of your day.
            </p>

            <p className="text-neutral-400 text-lg leading-relaxed">
              Our focus is storytelling — blending elegant visuals,
              cinematic movement, and authentic emotion into timeless films
              couples can relive forever.
            </p>
          </div>
        </div>
      </section>

      {/* FILMS SECTION */}
      <section id="films" className="py-28 px-6 md:px-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-neutral-400 mb-4">
              Featured Films
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              Cinematic Wedding Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-[500px] object-cover"
              />

              <div className="mt-5">
                <h3 className="text-2xl font-light mb-2">
                  Elegant Romance
                </h3>

                <p className="text-neutral-400">
                  Luxury wedding storytelling with timeless emotion.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-[500px] object-cover"
              />

              <div className="mt-5">
                <h3 className="text-2xl font-light mb-2">
                  Golden Hour Vows
                </h3>

                <p className="text-neutral-400">
                  Cinematic moments captured with elegance and intimacy.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-[500px] object-cover"
              />

              <div className="mt-5">
                <h3 className="text-2xl font-light mb-2">
                  Timeless Celebrations
                </h3>

                <p className="text-neutral-400">
                  Emotional wedding films crafted to last forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-400 mb-5">
            Why Couples Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-light mb-16">
            Cinematic. Emotional. Timeless.
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="border border-neutral-800 p-10">
              <h3 className="text-2xl mb-4 font-light">
                Storytelling
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                Every wedding film is crafted to feel emotional,
                authentic, and deeply personal.
              </p>
            </div>

            <div className="border border-neutral-800 p-10">
              <h3 className="text-2xl mb-4 font-light">
                Cinematic Quality
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                Professional visuals, audio, color grading,
                and elegant cinematic movement.
              </p>
            </div>

            <div className="border border-neutral-800 p-10">
              <h3 className="text-2xl mb-4 font-light">
                Timeless Experience
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                We create films that allow couples to relive
                the emotion of their wedding day forever.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* TESTIMONIALS */}
<section className="py-28 px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <p className="uppercase tracking-[0.4em] text-sm text-neutral-400 mb-5">
      Testimonials
    </p>

    <h2 className="text-4xl md:text-6xl font-light mb-16">
      Words From Our Couples
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="border border-neutral-800 p-10">
        <p className="text-neutral-300 leading-relaxed mb-6 italic">
          “Watching our wedding film felt like reliving the entire day
          again. Every emotion was captured perfectly.”
        </p>

        <h3 className="text-lg tracking-wide">
          — Sophia & Daniel
        </h3>
      </div>

      <div className="border border-neutral-800 p-10">
        <p className="text-neutral-300 leading-relaxed mb-6 italic">
          “The cinematic quality was unreal. Our film honestly looks
          like a movie.”
        </p>

        <h3 className="text-lg tracking-wide">
          — Isabella & Marcus
        </h3>
      </div>

      <div className="border border-neutral-800 p-10">
        <p className="text-neutral-300 leading-relaxed mb-6 italic">
          “Professional, emotional, and timeless. We couldn’t have
          asked for a better experience.”
        </p>

        <h3 className="text-lg tracking-wide">
          — Emily & Jordan
        </h3>
      </div>
    </div>
  </div>
</section>

{/* INQUIRY SECTION */}
<section
  id="contact"
  className="py-28 px-6 md:px-20 bg-neutral-950"
>
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.4em] text-sm text-neutral-400 mb-5">
        Inquire
      </p>

      <h2 className="text-4xl md:text-6xl font-light mb-8">
        Let’s Create Something Timeless
      </h2>

      <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
        Custom Collections available upon inquiry.
        Reach out to begin creating your cinematic wedding film.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-start">
      {/* FORM */}
      <form
  action="https://formspree.io/f/xnjrawag"
  method="POST"
  className="space-y-6"
>
        <input
  type="text"
  name="names"
  placeholder="Bride & Groom Names"
  className="w-full bg-black border border-neutral..."
/>

        <input
          type="text"
          name="wedding_date"
          placeholder="Wedding Date"
          className="w-full bg-black border border-neutral-700 p-4 text-white outline-none"
        />

        <input
          type="text"
          name="wedding_location"
          placeholder="Wedding Location"
          className="w-full bg-black border border-neutral-700 p-4 text-white outline-none"
        />

        <textarea
  name="message"
  placeholder="Tell us about your wedding vision..."
  className="w-full bg-black border border-neutral-700 p-4 text-white outline-none min-h-[220px]"
/>

        <button
          className="w-full bg-white text-black py-4 uppercase tracking-widest text-sm hover:bg-neutral-200 transition duration-300"
        >
          Send Inquiry
        </button>
      </form>

      {/* CONTACT INFO */}
      <div>
        <h3 className="text-3xl font-light mb-8">
          Contact Information
        </h3>

        <div className="space-y-6 text-neutral-300">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-2">
              Email
            </p>

            <a
              href="mailto:jmcinemafilms@gmail.com"
              className="text-lg hover:text-white transition"
            >
              jmcinemafilms@gmail.com
            </a>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-2">
              Instagram
            </p>

            <a
              href="https://instagram.com/jmcinemafilms"
              target="_blank"
              className="text-lg hover:text-white transition"
            >
              @JMcinemafilms
            </a>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-2">
              Facebook
            </p>

            <a
              href="https://facebook.com"
              target="_blank"
              className="text-lg hover:text-white transition"
            >
              JMCinemafilms
            </a>
          </div>
        </div>

        <div className="mt-12 border border-neutral-800 p-8">
          <p className="text-neutral-300 leading-relaxed">
            We specialize in cinematic wedding storytelling —
            creating timeless films that allow couples to relive
            every emotion for years to come.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}