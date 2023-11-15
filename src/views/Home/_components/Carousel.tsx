import React, { useEffect, useState } from "react";
import { Skeleton } from "@mantine/core";
import { getEmCartazService } from "../../../services/Filmes";
import Slider from "../../../components/Carousel";

const HomeCarousel: React.FC = () => {
    const [carregando, setCarregando] = useState<boolean>(true)
    const [filmesEmCartaz, setFilmesEmCartaz] = useState<any>([])


    useEffect(() => {
        get()
    }, [])
    
    async function get() {
        try {
            const { results } = await getEmCartazService(1)
            setFilmesEmCartaz([...results])
            setCarregando(false)
        } catch (error: any) {
            throw new Error(error)
        }
    }

    const slider = carregando 
                ? <Skeleton className='h-full' radius={'md'}/> 
                : <Slider data={filmesEmCartaz} pagination={true}/>
    
    return (
        <section className='w-full max-w-[1600px] h-[500px] mt-8'>
            { slider }
        </section>
    )
}

export default HomeCarousel