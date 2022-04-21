import axios from "axios"
import { ITweet, TweetsState } from "../store/Tweets/types"

export const fetchTweets = async () => {
    // return axios.get('https://trycode.pw/c/2OBQ1.json').then(({data}) => data)
    const {data} = await axios.get('https://trycode.pw/c/2OBQ1.json')
    return await data
}