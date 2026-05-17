# JMCINEMAFILMS — Full Homepage Upgrade

Copy ALL of this code and replace everything currently inside:

```txt
app/page.tsx
```

with the code below.

After pasting:

1. Press CTRL + S
2. Go to Source Control
3. Type:

```txt
homepage redesign
```

4. Click Commit
5. Click Sync Changes / Publish Branch
6. Wait about 30 seconds
7. Refresh your live website

---

# FULL CODE

```tsx
export default function JMCinemaFilmsWebsite() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-6 max-w-5xl">
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-300 mb-6">
            Los Angeles Wedding & Cinematic Films
          </p>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
            JMCINEMAFILMS
          </h1>

          <p className="text-xl md:text-3xl text-neutral-200 font-light mb-10 leading-relaxed">
            Timeless wedding films crafted with emotion, elegance, and cinematic storytelling.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-neutral-200 transition">
              Book Your Date
            </button>

            <button className="border border-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1974&auto=format&fit=crop"
              alt="Couple"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4 text-sm">
              About Us
            </p>

            <h2 className="text-5xl font-light mb-8 leading-tight">
              Capturing moments that deserve to live forever.
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              At JMCINEMAFILMS, we create luxury wedding films inspired by authentic emotion, cinematic composition, and timeless storytelling.
            </p>

            <p className="text-neutral-400 text-lg leading-relaxed">
              Every frame is carefully crafted to preserve the atmosphere, emotion, and beauty of your day — turning memories into films you’ll relive for generations.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4 text-sm">
              Portfolio
            </p>

            <h2 className="text-5xl md:text-6xl font-light">
              Recent Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-3xl relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1974&auto=format&fit=crop"
                alt="Wedding Film"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-light mb-2">Sophia & Daniel</h3>
                  <p className="text-neutral-300">Luxury Estate Wedding</p>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1974&auto=format&fit=crop"
                alt="Wedding Film"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-light mb-2">Ava & Marcus</h3>
                  <p className="text-neutral-300">Downtown Los Angeles</p>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1974&auto=format&fit=crop"
                alt="Wedding Film"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-light mb-2">Emily & James</h3>
                  <p className="text-neutral-300">Malibu Ceremony</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4 text-sm">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-light mb-20">
            Cinematic Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border border-neutral-800 p-10 rounded-3xl bg-neutral-900/50">
              <h3 className="text-3xl font-light mb-6">Wedding Films</h3>

              <p className="text-neutral-400 leading-relaxed">
                Emotional cinematic wedding coverage crafted to preserve every meaningful detail of your story.
              </p>
            </div>

            <div className="border border-neutral-800 p-10 rounded-3xl bg-neutral-900/50">
              <h3 className="text-3xl font-light mb-6">Engagement Sessions</h3>

              <p className="text-neutral-400 leading-relaxed">
                Elegant pre-wedding films and creative storytelling sessions designed for social media and memories.
              </p>
            </div>

            <div className="border border-neutral-800 p-10 rounded-3xl bg-neutral-900/50">
              <h3 className="text-3xl font-light mb-6">Commercial Visuals</h3>

              <p className="text-neutral-400 leading-relaxed">
                High-end visuals for brands, artists, and creators looking for cinematic content that stands out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-32 px-6 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-neutral-400 mb-6 text-sm">
            Client Experience
          </p>

          <h2 className="text-5xl font-light mb-16">
            “Our film felt like a movie.”
          </h2>

          <p className="text-2xl text-neutral-300 leading-relaxed font-light mb-10">
            “JMCINEMAFILMS captured our wedding more beautifully than we ever imagined. Every emotion, every detail, every moment felt cinematic and real.”
          </p>

          <p className="uppercase tracking-[0.3em] text-neutral-500 text-sm">
            — Sarah & Michael
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-32 px-6 bg-neutral-950 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-light mb-8">
            Let’s Create Something Timeless.
          </h2>

          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            Now booking weddings, engagements, and cinematic productions throughout Los Angeles and beyond.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:your@email.com"
              className="bg-white text-black px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-neutral-200 transition"
            >
              Contact Us
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="border border-white px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

# AFTER YOU PASTE THE CODE

Run this in terminal if your site stops:

```bash
npm run dev
```

Then open:

```txt
http://localhost:3000
```

If you see the redesigned cinematic website locally, then:

1. Go to Source Control
2. Commit changes
3. Sync Changes

Your live domain will update automatically.

---

# IMPORTANT

Later, when you have your own photos/videos:

Put them inside:

```txt
public
```

folder.

Then replace the placeholder image links with:

```txt
/yourphoto.jpg
```

I can also help you later with:

* cinematic video backgrounds
* smooth animations
* booking inquiry forms
* Instagram feeds
* music integration
* pricing pages
* mobile optimization
* SEO
* faster loading
* luxury transitions
* dark cinematic edits
