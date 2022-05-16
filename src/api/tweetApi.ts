import { axios } from "../core/axios"
import { Tweet } from "../store/Tweets/types"

interface Response<T> {
    status: string,
    data: T
}

export const fetchTweets = async (): Promise<Tweet[]> => {
    // return axios.get('/tweets').then(({data}) => data)
    const {data} = await axios.get<Response<Tweet[]>>('/tweets')
    return data.data
}
export const fetchTweetData = async (id: string):Promise<Tweet> => {
    const {data} = await axios.get<Response<Tweet>>(`/tweets/${id}`)
    return data.data
}
export const fetchAddTweet = async (payload: string): Promise<Tweet> => {
    const { data } = await axios.post<Response<Tweet>>('/tweets', {text: payload})
    return  data.data
}