import axios from "axios"

export const fetchTags = async () => {
    const {data} = await axios.get('/tags')
    return await data
}