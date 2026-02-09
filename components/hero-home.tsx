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
  bg-[linear-gradient(to_right,var(--color-gray-200),#22c55e,var(--color-gray-50),#16a34a,var(--color-gray-200))]
  bg-[length:200%_auto]
  bg-clip-text
  pb-5
  font-nacelle
  text-4xl font-semibold
  text-transparent
  md:text-5xl"
  data-aos="fade-up"
>
  Hi Sadik, how are you
</h1>

            <div className="mx-auto max-w-3xl">
             <p
  className="mb-8 text-xl text-white"
  data-aos="fade-up"
  data-aos-delay={200}
>
  Our landing page template works on all devices, so you only have
  to set it up once, and get beautiful results forever.
</p>


              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                <a
  className="btn group mb-4 w-full
  bg-gradient-to-t from-slate-950 via-emerald-900 to-emerald-700
  bg-[length:100%_100%] bg-[bottom]
  text-white
  shadow-[0_0_60px_rgba(16,185,129,0.35),inset_0px_1px_0px_rgba(255,255,255,0.12)]
  hover:bg-[length:100%_160%]
  hover:shadow-[0_0_90px_rgba(16,185,129,0.55)]
  sm:mb-0 sm:w-auto"
  href="#0"
>

                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
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
