'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function QualitySection() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quart', once: true, offset: 80 });
  }, []);

  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16'>
      <div className='bg-white rounded-[36px] p-5 sm:p-8 md:p-10 py-16 md:py-20 shadow-sm'>
        <div className='grid lg:grid-cols-[500px_1fr] gap-10 items-start'>
          {/* ===== Left: Headline & sub ===== */}
          <div className='order-2 lg:order-1 max-w-[580px] w-full' data-aos='fade-up'>
            <h1 className='leading-[1.05] font-medium text-[35px] sm:text-[40px] md:text-[45px] xl:text-[55px] tracking-tight'>
              Deliver a <span className='font-extrabold'>high-quality </span>
							<div className="bg-[#D9DDF0] rounded-2xl px-3 w-fit flex items-center gap-3  mt-4  " >
								<span className='inline-block'>Software </span> 
								<span className='inline-block font-semibold '> Solution</span>
							</div>
              <span className='sr-only'>.</span>
              <span className='inline-flex align-middle mt-4'>
                <Image src='/home/arrow-shape.png' alt='' width={120} height={60} className='h-[46px] sm:h-[56px] w-auto inline-block' priority />
              </span>
            </h1>

            <blockquote className='mt-6 sm:mt-8 max-w-2xl text-[#101010] text-lg sm:text-xl italic leading-8' data-aos='fade-up' data-aos-delay='150'>
              “We design, develop, and deliver scalable digital solutions that empower businesses to grow, innovate, and lead in their industries.”
            </blockquote>
          </div>

          {/* ===== Right: Mission / Vision cards ===== */}
          <div className='order-1 lg:order-2 w-full'>
            <div className='grid sm:grid-cols-2 gap-6'>
              {/* Mission (dark card) */}
              <div className='rounded-[28px] bg-[#101010] text-white p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[320px] md:min-h-[340px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]' data-aos='fade-right'>
                <div>
                  <h3 className='text-xl sm:text-2xl font-semibold'>Mission</h3>
                  <p className='mt-3 text-white/80 leading-7'>"To empower businesses by creating smart, scalable, and user-friendly digital solutions that make a real difference."</p>
                </div>

                <div className='mt-10 sm:mt-12' data-aos='zoom-in' data-aos-delay='150'>
                  <Image src='/home/mission.png' alt='Mission illustration' width={560} height={240} className='w-full h-auto' />
                </div>
              </div>

              {/* Vision (primary card) */}
              <div className='rounded-[28px] bg-primary text-white p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[320px] md:min-h-[340px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]' data-aos='fade-left' data-aos-delay='100'>
                <div>
                  <div className='mb-10 sm:mb-12' data-aos='zoom-in' data-aos-delay='200'>
                    <Image src='/home/vision.png' alt='Vision illustration' width={560} height={240} className='w-full h-auto' />
                  </div>

                  <h3 className='text-xl sm:text-2xl font-semibold'>Vision</h3>
                  <p className='mt-3 text-white/90 leading-7'>"To be a global technology partner that drives digital transformation and shapes the future of innovation."</p>
                </div>
              </div>
              {/* End Vision */}
            </div>
          </div>
          {/* ===== End right ===== */}
        </div>
      </div>
    </section>
  );
}
