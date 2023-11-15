import { Skeleton } from "@mantine/core"
import React, { useEffect, useState } from "react"
import { avaliadosService } from "../../../services/Filmes"
import Slider from "../../../components/Carousel"


const AvaliadosComponent: React.FC = () => {
    const [avaliados, setAvaliados] = useState<any[]>([])
    const [carregando, setCarregando] = useState(true)

    const pages = [2, 3, 4]

    useEffect(() => {
        getLancamentos()
    }, [])

    const getLancamentos = async () => {
        const responses = await Promise.all(pages.map(async (page) => {
            return await avaliadosService(page)
        }))

        setAvaliados(responses)
        setCarregando(false)
    }

    const renderAvaliados = (page: number) => {
        return (
            <div className="w-full h-full">
                {carregando ? <Skeleton className="h-full" radius={"md"} /> : <Slider data={avaliados[page]?.results} pagination={false}/>}
            </div>
        );
    };

    return (
        <section className='w-full flex flex-col gap-4'>
            <div className='flex justify-between w-full'>
                <h2 className='font-bold text-white text-2xl'>| Bem Avaliados</h2>
                <button>Ver todos</button>
            </div>
            <section className='w-full max-w-[1600px] h-[500px] justify-center flex gap-4 mb-8'>
                <section className='w-2/5 h-full flex flex-col items-between gap-4'>
                    <div className='h-full h-[241.7px]'>
                        {renderAvaliados(2)}
                    </div>
                    <div className='h-full h-[241.7px]'>
                        {renderAvaliados(1)}
                    </div>
                </section>
                <div className='w-3/5 h-[500px]'>
                    {renderAvaliados(0)}
                </div>
            </section>
        </section>
    )
}

export default AvaliadosComponent