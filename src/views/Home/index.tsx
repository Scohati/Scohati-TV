import React from 'react';
import HomeBanner from './_components/Banner';
import ScrollCarouselComponent from './_components/ScrollCarousel';
import Lancamentos from './_components/Lancamentos';
import AvaliadosComponent from './_components/Avaliados';

const Home: React.FC = () => {
  return (
    <section className='w-full my-12 px-[12vw] flex flex-col gap-8'>
      <HomeBanner/>
      <ScrollCarouselComponent />
      <AvaliadosComponent />
      <Lancamentos />
    </section>
  );
}

export default Home
