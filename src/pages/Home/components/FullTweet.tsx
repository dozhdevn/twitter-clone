import { CircularProgress, Divider, IconButton } from '@mui/material'
import moment from 'moment'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setTweet } from '../../../store/Tweet/actionCreators'
import { selectTweet } from '../../../store/Tweet/selectors'
import { FullTweetHeader, FullTweetWrapper, TweetAvatar, FullTweetInfo, FullTweetText, FullTweetFooter } from './styledComponents'
import CommentIcon from '@mui/icons-material/Comment';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import { Tweet } from '../../../components/Tweet'

export const FullTweet: FC = () => {

	const { tweet, loading } = useSelector(selectTweet)
	const dispatch = useDispatch()
	const { id } = useParams<{ id?: string }>()


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
			<>
				<FullTweetWrapper>

					<FullTweetHeader>
						<TweetAvatar
							alt="Avatar"
							src={tweet.user.avatarUrl} />

						<FullTweetInfo>
							<b>{tweet.user.fullname}</b>
							<div>
								<span>@{tweet.user.username}</span>
							</div>
						</FullTweetInfo>
					</FullTweetHeader>

					<FullTweetText gutterBottom>
						{tweet.text}
					</FullTweetText>

					<FullTweetInfo>
						<span>{moment(tweet.createdAt).format('h:mm A')}</span>
						<span>{moment(tweet.createdAt).format('Do MMMM YYYY')}</span>
					</FullTweetInfo>

					<FullTweetFooter>
						<IconButton>
							<CommentIcon style={{ fontSize: 25 }} />
						</IconButton>
						<IconButton>
							<RepostIcon style={{ fontSize: 25 }} />
						</IconButton>
						<IconButton>
							<LikeIcon style={{ fontSize: 25 }} />
						</IconButton>
						<IconButton>
							<ReplyIcon style={{ fontSize: 25 }} />
						</IconButton>
					</FullTweetFooter>
				</FullTweetWrapper>
				<Divider />

				<Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
            avatarUrl:
              'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
          }}
        />
        <Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
            avatarUrl:
              'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
          }}
        />
        <Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
            avatarUrl:
              'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
          }}
        />

		</>
		)
	}

	return null
}
