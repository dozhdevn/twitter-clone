import axios from "axios"
import { ITweet } from "../store/Tweets/types"

export const fetchTweets = async () => {
    // return axios.get('/tweets').then(({data}) => data)
    const {data} = await axios.get('/tweets')
    return await data
}
export const fetchTweetData = async (id: string):Promise<ITweet[]> => {
    const {data} = await axios.get(`/tweets?_id=${id}`)
    return await data
}