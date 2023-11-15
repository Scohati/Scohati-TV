import React, { useState } from 'react';
import { Skeleton } from '@mantine/core';
import Banner from './_components/Carousel';
import ScrollCarouselComponent from './_components/ScrollCarousel';
import Lancamentos from './_components/Lancamentos';

const Home: React.FC = () => {
  return (
    <section className='w-full my-12 px-[12vw] flex flex-col gap-8'>

      <Banner page={1}/>
      <ScrollCarouselComponent />
      <Lancamentos />

      <h2 className='font-bold text-white text-2xl'>| Avaliados</h2>
      <section className='w-full max-w-[1600px] h-[500px] justify-center flex gap-4'>
        <section className='w-2/5 h-full flex flex-col gap-4'>
          <div className='h-full'>
            <Skeleton className='h-full' radius={'md'}/>
          </div>
          <div className='h-full'>
            <Skeleton className='h-full' radius={'md'}/>
          </div>
        </section>
        <div className='w-4/5 h-full'>
          <Skeleton className='h-full' radius={'md'}/>
        </div>
      </section>
    </section>
  );
}

export default Home
