import { Image, Skeleton, Badge, Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { getById } from "../../../services/Filmes";
import settings from "../../../settings";
import { IconStarFilled } from "@tabler/icons-react";
import { Trailer } from ".";
import { IdType } from "./IdType";


interface Generos {
    id: number;
    name: string;
}
interface FilmeInterface {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    vote_average: number;
    genres: Generos[];
    original_title: string;
}

const Info: React.FC<IdType> = ({ id }) => {
    const [filme, setFilme] = useState<FilmeInterface>()
    
    useEffect(() => {
        get()
    }, [id])

    const get = async () => {
        const resp = await getById.get(Number(id))
        setFilme(resp)
        console.log(resp)
    }
    

    const generos = filme?.genres.map(genero => (
        <Badge key={genero.id} variant="light" color="blue">{genero.name}</Badge>
    ))


    return (
        <section className="w-full grid gap-8">
            <Image
                src={`${settings.API_IMAGE_URL}${filme?.backdrop_path}`}
                className="absolute top-[65px] left-0 bg-black brightness-[.30]"
            />
            <div
                className="w-full flex flex-wrap justify-center items-end relative"
            >

                <div className="w-1/2 min-w-[200px] max-w-[500px]">
                    <Image
                        className="w-full rounded-xl"
                        src={`${settings.API_IMAGE_URL}${filme?.poster_path}`}
                    />
                </div>
                <div className='1/2 py-4 px-12 flex flex-col gap-5'>

                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-white max-w-[500px]">{filme?.title}</h2>
                        <Badge className="self-end" variant="light" color="yellow" size="xl">
                            <span className="flex items-center gap-2 text-lg">
                                <IconStarFilled className='w-[15px] text-yellow-500'/>
                                {filme?.vote_average.toFixed(1)}
                            </span>
                        </Badge>
                    </div>

                    <div className="flex gap-1 w-full justify-between items-center">
                        <Title order={4}>Gênero:</Title>
                        <span className="flex items-center gap-2">
                            {generos}
                        </span>
                    </div>  

                    <div className="flex gap-1 w-full justify-between items-center text-3xl">
                        <Title order={4}>Título Original:</Title>
                        <Text className="text-xl">{filme?.original_title}</Text>
                    </div>

                    <div className="flex flex-col gap-4 mt-4 w-full justify-between items-start text-3xl">
                        <Title order={4}>Trailer:</Title>
                        <Trailer id={id}/>
                    </div>
                </div>
                {/* <Skeleton className='w-4/6 h-[400px]' radius={'md'}/>
                <Skeleton className='h-[400px]' radius={'md'}/> */}
            </div>

            <div className="w-full h-[250px] bg-white bg-opacity-10 rounded-xl p-4">
                {/* <Skeleton className='h-full' radius={'md'}/> */}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui, adipisci ad saepe, voluptatum quibusdam dicta accusantium necessitatibus architecto ut doloremque id ducimus fugiat maxime molestias illum iure! Consectetur, voluptas? */}
                {filme?.overview}
            </div>
        </section>
    )
}

export default Info