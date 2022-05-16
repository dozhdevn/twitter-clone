import { axios } from "../core/axios"


export const fetchTags = async () => {
    const {data} = await axios.get('/tags')
    return await data
}