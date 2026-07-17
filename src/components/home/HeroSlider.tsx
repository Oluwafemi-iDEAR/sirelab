import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { useHeroSlides } from "../../hooks/content";
import type { CtaLink } from "../../data/common";

function CtaButton({ cta, variant }: { cta: CtaLink; variant: "light" | "blue" }) {
  const className =
    variant === "light"
      ? "rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
      : "rounded-xl bg-blue-900 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300";

  return cta.href.startsWith("/") ? (
    <Link to={cta.href} className={className}>
      {cta.label}
    </Link>
  ) : (
    <a href={cta.href} className={className}>
      {cta.label}
    </a>
  );
}

export default function HeroSlider() {
  const { data: slides } = useHeroSlides();

  return (
    <section aria-label="SIRELAB highlights" className="relative bg-slate-950">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Parallax]}
        slidesPerView={1}
        loop
        parallax
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="sirelab-hero"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <article className="relative isolate min-h-[34rem] overflow-hidden sm:min-h-[38rem]">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  objectPosition: slide.imagePosition ?? "center",
                }}
              />

              <div className="absolute inset-0 bg-slate-950/60" />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />

              <div className="relative mx-auto flex min-h-[34rem] max-w-7xl items-center px-4 py-20 sm:min-h-[38rem] sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  {slide.eyebrow && (
                    <p
                      className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-400"
                      data-swiper-parallax="-50"
                    >
                      {slide.eyebrow}
                    </p>
                  )}

                  <h1
                    className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    data-swiper-parallax="-100"
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg"
                    data-swiper-parallax="-160"
                  >
                    {slide.description}
                  </p>

                  <div
                    className="mt-8 flex flex-wrap gap-3"
                    data-swiper-parallax="-220"
                  >
                    {slide.ctaPrimary && (
                      <CtaButton cta={slide.ctaPrimary} variant="light" />
                    )}
                    {slide.ctaSecondary && (
                      <CtaButton cta={slide.ctaSecondary} variant="blue" />
                    )}
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
