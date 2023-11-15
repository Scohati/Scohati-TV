import { Image, Skeleton } from "@mantine/core";
import React, { useEffect, useState } from "react";
import ScrollCarousel from "scroll-carousel";
import { populares } from "../../../../services/Filmes";

import './style.css'

const ScrollCarouselComponent: React.FC = () => {
  const [carregando, setCarregando] = useState(true);
  const [filmesPopulares, setFilmesPopulares] = useState<any>([])
  
  useEffect(() => {
    get()
  }, [])
  
  const get = async () => {
    const resp = await populares(1)
    setFilmesPopulares(resp?.results)
    setCarregando(false)
    setTimeout(() => {
        new ScrollCarousel(".my-carousel", {
            autoplay: true,
            autoplaySpeed: 1,
            speed: 1
        });
    }, 100)
  }


  const scrollCarousel = carregando ? <Skeleton className="h-full" radius={"md"} /> : (
    filmesPopulares.map((item: any) => {
      return (
        <div key={item?.id} className="w-[230px] h-[290px] bg-[#fcfcfc] rounded-xl overflow-hidden cursor-pointer">
          <Image src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} className="w-full h-full"/>
        </div>
      );
    })
  );


  return (
    <div className="my-carousel flex justify-between w-full h-[290px] my-12 gap-2 overflow-hidden">
      {scrollCarousel}
    </div>
  );
};

export default ScrollCarouselComponent;
