import { CircularProgress, Grid } from '@mui/material'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tweet } from '../../../components/Tweet'
import { setTweet } from '../../../store/Tweet/actionCreators'
import { selectTweet } from '../../../store/Tweet/selectors'


export const FullTweet: FC = () => {

  const { tweet, loading } = useSelector(selectTweet)
  const dispatch = useDispatch()
  const { id } = useParams<{ id?: string }>()

  console.log(tweet)
  useEffect(() => {
    if (id) {
      dispatch(setTweet(id))
    }

    return () => {
      dispatch(setTweet(undefined))
    }
  }, [dispatch, id])

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: '70px' }}>
        <CircularProgress />
      </div>
    )
  }

  if (tweet) {
    return (
      <Tweet {...tweet} />
    )
  }

  return null
}
