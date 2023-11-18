import API from "../API"

async function getAbstract(url: string)  {
    const { data } = await API.get(url)
    return data
}

export const getEmCartazService = async (page: number) => {
    return await getAbstract(`movie/now_playing?language=pt-br&page=${page}`)
}

export const popularesService = async (page: number) => {
    return await getAbstract(`movie/popular?language=pt-BR&page=${page}`)
}

export const avaliadosService = async (page: number) => {
    return await getAbstract(`movie/top_rated?language=pt-BR&page=${page}`)
}

export const getById = {
    async get (id: number) {
        return await getAbstract(`movie/${id}?language=pt-br`)
    },
    async getRecomendacoes(id: number) {
        return await getAbstract(`movie/${id}/recommendations?language=pt-BR&page=1`)
    },
    async getSimilares(id: number) {
        return await getAbstract(`movie/${id}/similar?language=en-US&page=1`)
    },
    async getTrailer(id: number) {
        return await getAbstract(`movie/${id}/videos?language=pt-br`)
    },
}