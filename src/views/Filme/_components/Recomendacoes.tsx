import { Skeleton, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Slider from "../../../components/Carousel";
import { getById } from "../../../services/Filmes";
import { IdType } from "./IdType";

const Recomendacoes: React.FC<IdType> = ({ id }) => {
    const [carregando, setCarregando] = useState<boolean>(true)
    const [filmes, setFilmes] = useState({
        recomendacoesState: [],
        similaresState: []
    })

    useEffect(() => {
        get()
    }, [id])

    const get = async () => {
        setCarregando(true)
        const [recomendacoes, similares] = await Promise.all([
            getById.getRecomendacoes(id),
            getById.getSimilares(id)
        ])
        setFilmes({recomendacoesState: recomendacoes.results, similaresState: similares.results})
        setCarregando(false)
    }
    
    
    return (
        <section className="w-full flex flex-col gap-24 mb-24 h-[550px]">
            <div className="w-full h-1/2">
                <Title order={3} className="mb-4">Recomendações</Title>
                {carregando ? <Skeleton className="h-full" radius={"md"} /> : <Slider data={filmes.recomendacoesState} pagination={true} itemsPorSlide={3}/>}
            </div>
            <div className="w-full h-1/2">
                <Title order={3} className="mb-4">Filmes Parecidos</Title>
                {carregando ? <Skeleton className="h-full" radius={"md"} /> : <Slider data={filmes.similaresState} pagination={true} itemsPorSlide={3}/>}
            </div>
        </section>
    )
}

export default Recomendacoes