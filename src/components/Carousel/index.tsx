import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Image } from '@mantine/core'
import { IconStarFilled } from '@tabler/icons-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './carousel.style.css'


interface PropsObj {
    id: number
    vote_average: number
    title: string
    backdrop_path: string
    poster_path: string
}

interface SliderProps {
    data: PropsObj[]
    pagination: boolean
}

const Slider: React.FC<SliderProps> = ({ data, pagination }) => {
  data.map(item => {
    return {
        image: `https://image.tmdb.org/t/p/original${item?.backdrop_path ?? item?.poster_path}`,
        caption: item?.title
    }
  })


  const renderLancamentos = data.map((item, index) => {
      return (
          <div className="w-full h-full" key={index}>
              <SwiperSlide className='relative'>
                <Image src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}/>

                <span className='absolute top-5 right-5 flex items-center gap-1 bg-black bg-opacity-50 rounded-xl px-4'>
                  <IconStarFilled className='w-[15px] text-yellow-500'/>
                  <p className='text-sm text-white font-bold'>{item?.vote_average.toFixed(1)}</p>
                </span>

                <h4
                  className='text-2xl font-bold text-white absolute bottom-5 left-14 bg-black bg-opacity-50 rounded-xl px-4 py-1'
                >
                  {item?.title}
                </h4>

              </SwiperSlide>
          </div>
      )
  })

  return (
    <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={pagination}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
        loop={true}
      >
        {renderLancamentos}
      </Swiper>
  )
}

export default Slider
