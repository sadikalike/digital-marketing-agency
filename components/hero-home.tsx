import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite]
              bg-[linear-gradient(to_right,var(--color-gray-200),#60a5fa,var(--color-gray-50),#3b82f6,var(--color-gray-200))]
              bg-[length:200%_auto]
              bg-clip-text
              pb-5
              font-nacelle
              text-4xl font-semibold
              text-transparent
              md:text-5xl"
              data-aos="fade-up"
            >
              Grow Your Business with Nexo Digital
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-blue-200"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We help businesses grow with high-converting marketing strategies, powerful content, and data-driven campaigns.
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full
                    bg-gradient-to-t from-blue-950 via-blue-800 to-blue-600
                    bg-[length:100%_100%] bg-[bottom]
                    text-white
                    shadow-[0_0_60px_rgba(59,130,246,0.35),inset_0px_1px_0px_rgba(255,255,255,0.12)]
                    hover:bg-[length:100%_160%]
                    hover:shadow-[0_0_90px_rgba(59,130,246,0.55)]
                    sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-blue-200/70 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-blue-900 to-blue-950/60 bg-[length:100%_100%] bg-[bottom] text-blue-100 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,#2563eb,#3b82f6,#2563eb)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] hover:text-white sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}