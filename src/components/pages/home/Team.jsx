'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TAGS = ['Collaboration', 'Creative', 'Support', 'Communication', 'Innovating', 'Building together', 'Delivering as one', 'Shared vision'];

const TEAM = [
  { name: 'Ayat Tarek', role: 'Senior UI/UX Designer', img: '/home/team/ui-ux.png', note: 'Human-centered, research-driven design.', badge: '8 yrs experience' },
  { name: 'Ayat Tarek', role: 'Senior Front-end Developer', img: '/home/team/ui-ux.png', note: 'Performance, a11y, delightful UX.', badge: 'React • Next.js • Tailwind' },
  { name: 'Ayat Tarek', role: 'Senior Front-end Developer', img: '/home/team/ui-ux.png', note: 'Pixel-perfect from Figma to prod.', badge: '10+ shipped projects' },
  { name: 'Ayat Tarek', role: 'Senior Front-end Developer', img: '/home/team/ui-ux.png', note: 'Type-safe, test-first workflows.', badge: 'CI/CD • Testing' },
];

export default function Team() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-quart', once: true, offset: 80 });
  }, []);

  return (
    <section className='my-14 md:my-20'>
      <div className='container mx-auto px-4 md:px-6 lg:px-10'>
        <div className='grid lg:grid-cols-12 gap-10 items-start'>
          {/* Left: Title + chips */}
          <div className='lg:col-span-5' data-aos='fade-up'>
            <h2 className='text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-medium leading-[1.1]'>
              Your <span className='bg-primary text-white rounded-2xl px-4 py-1 inline-block'>Success</span>
              <br />
              <span className='text-black/80 font-semibold'>Our teamwork</span>
            </h2>

            {/* Chips: wrap on desktop, scroll on mobile */}
            <div className='mt-6 flex flex-wrap gap-3 max-w-xl overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-visible' data-aos='fade-up' data-aos-delay='120'>
              {TAGS.map(t => (
                <span key={t} className='select-none rounded-full border border-[#1D1D21]/20 bg-white px-4 py-2 text-sm sm:text-base text-[#1D1D21] shadow-sm hover:shadow transition'>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Swiper slider */}
          <div className=' max-lg:w-[calc(100vw-50px)] lg:col-span-7 relative'>
            {/* Controls */}
            <div className='absolute -top-12 right-0 z-10 flex gap-2' data-aos='fade-left' data-aos-delay='150'>
              <button ref={prevRef} aria-label='Previous' className='h-10 w-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-xl shadow-md hover:bg-white transition'>
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button ref={nextRef} aria-label='Next' className='h-10 w-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-xl shadow-md hover:bg-white transition'>
                <ChevronRight className='h-5 w-5' />
              </button>
            </div>

            <Swiper
              modules={[Navigation, A11y]}
              onBeforeInit={swiper => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onInit={swiper => {
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              a11y={{ enabled: true }}
              slidesPerView={1.05}
              spaceBetween={14}
              speed={550}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.05 },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3.05 },
              }}
              className='!px-1 !pb-2'>
              {TEAM.map((m, i) => (
                <SwiperSlide key={i} className='!h-auto'>
                  <TeamCard {...m} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, img, note, badge }) {
  return (
    <article className='h-full rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition'>
      <div className='relative p-3 '>
        <Image src={img} alt={name} width={640} height={480} className=' rounded-2xl aspect-square w-full object-cover' priority={false} />
        {badge && <span className='absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-medium shadow'>{badge}</span>}

        <span style={{ top: '12px', left: '12px' }} className='absolute  bg-white z-[10] block rounded-[0_0_20px_0] w-[20px] h-[20px]' />
        <b style={{ top: '11.5px', left: '31px' }} className='block absolute scale-x-[-1]  h-[7px] w-[7px] bg-white z-[11] path-7' />
        <b style={{ top: '31px', left: '12px' }} className='block absolute rotate-[-90deg]  h-[7px] w-[7px] bg-white z-[11] path-7' />
      </div>

      <div className='px-4 pb-5 pt-4'>
        <h3 className='text-[18px] font-semibold text-black'>{name}</h3>
        <p className='text-sm text-black/60 mt-0.5'>{role}</p>
      </div>
    </article>
  );
}
