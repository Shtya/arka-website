'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@/components/atoms/Button';

export default function Hero() {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
      <div className='bg-white rounded-[36px] p-5 sm:p-8 md:p-10 shadow-sm'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left column */}
          <div className='order-2 md:order-1' data-aos='fade-up' data-aos-delay='100'>
            <h1 className='leading-[1.05] font-medium text-[35px] sm:text-[40px] md:text-[45px] xl:text-[55px] tracking-tight'>
              <span className='whitespace-nowrap'>Transform your</span>
              <br />
              <b className='font-extrabold text-primary'>IDEA</b> into <br />
              <span className='flex items-center flex-wrap gap-4 justify-between mt-2 md:mt-3'>
                <span className='bg-primary rounded-2xl px-4 py-1.5 text-white  '>Digital solution</span>

                <span className='h-[55px] relative flex items-center'>
                  <Image src='/home/logo-shape.png' width={60} height={60} alt='Brand mark' className='h-[60px] w-auto' priority />
                </span>
              </span>
            </h1>

            {/* Quote */}
            <blockquote className='text-base sm:text-lg md:text-xl leading-8 text-[#101010] mt-6 sm:mt-8 md:mt-10 italic max-w-xl' data-aos='fade-up' data-aos-delay='200'>
              “We don’t just build software—we build solutions that solve real problems, streamline operations, and create opportunities for growth. From concept to code, our team delivers digital experiences that matter.”
            </blockquote>
          </div>

          {/* Right column (image) */}
          <div className='relative order-1 md:order-2' data-aos='zoom-in' data-aos-delay='150'>
            <div className='relative rounded-[30px]'>
              <Image src='/home/hero.png' alt='Developer coding on laptop' width={974} height={768} className='overflow-hidden rounded-[30px] w-full object-cover bg-white' priority />

              <span className='absolute -top-px right-0 bg-white z-[10] block rounded-[0_0_0_30px] w-[50px] h-[50px]' />
              <b style={{ top: '0.3px' , right : "49.6px" }} className='block absolute  h-[25px] w-[25px] bg-white z-[11] path-shape' />
              <b style={{ top: '48.8px' }} className='block absolute right-0 h-[25px] w-[25px] bg-white z-[11] path-shape' />
            </div>

            {/* Floating CTA bubble */}
            <div className='absolute right-0 -bottom-px bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-tl-[15px] ' data-aos='fade-left' data-aos-delay='250'>
              <Button href={'#contact-us'}  variant='primary' className='!px-10' size='sm'>
                  Contact us
                </Button>

              {/* carve corners on bubble */}
              <b style={{ top: '-23px', right: '0' }} className='block absolute scale-y-[-1] h-[25px] w-[25px] bg-white path-shape' />
              <b style={{ bottom: '0', left: '-23px' }} className='block absolute scale-y-[-1] h-[25px] w-[25px] bg-white path-shape' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
