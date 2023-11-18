import { Skeleton } from "@mantine/core";
import React, { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from 'react-youtube'
import { getById } from "../../../services/Filmes";
import { IdType } from "./IdType";

const Trailer: React.FC<IdType> = ({ id }) => {
    const [trailer, setTrailer] = useState<any>()
    const [carregando, setCarregando] = useState<boolean>(true)

    useEffect(() => {
        get()
    }, [id])

    const get = async () => {
        setCarregando(true)
        let resp = await getById.getTrailer(id)
        setTrailer(resp?.results[0].key)
        setCarregando(false)
    }

    const opts: YouTubeProps['opts'] = {
        height: '350',
        width: '700',
      };

    return (
        <section className="flex justify-center ">
            {/* <Skeleton className='h-full' radius={'md'}/> */}
            <div className="rounded-xl overflow-hidden">
                {/* <YouTube videoId={trailer} opts={opts} /> */}
                {carregando ? <Skeleton className="h-full" radius={"md"} /> : <YouTube videoId={trailer} opts={opts} />}
            </div>
        </section>
    )
}

export default Trailer