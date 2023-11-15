import React from 'react';
import Banner from './_components/Carousel';
import ScrollCarouselComponent from './_components/ScrollCarousel';
import Lancamentos from './_components/Lancamentos';
import AvaliadosComponent from './_components/Avaliados';

const Home: React.FC = () => {
  return (
    <section className='w-full my-12 px-[12vw] flex flex-col gap-8'>
      <Banner/>
      <ScrollCarouselComponent />
      <AvaliadosComponent />
      <Lancamentos />
    </section>
  );
}

export default Home
