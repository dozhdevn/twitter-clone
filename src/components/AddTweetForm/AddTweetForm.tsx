import { Button, CircularProgress, IconButton } from '@mui/material'
import { FC, useState } from 'react'
import OutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { AddFormBody, AddFormBottomActions, AddFormBottomRight, AddFormTextarea, TweetAvatar, AddFormBottom } from './styledComponentTweetForm';
import { useDispatch } from 'react-redux';
import { fetchAddTweet } from '../../store/Tweets/actionCreators';
import { useSelector } from 'react-redux';
import { selectTweets } from '../../store/Tweets/selectors';
import { styled } from '@mui/system';
import { lightBlue } from '@mui/material/colors';
import { AlertError } from '../AlertError';

interface AddTweetFormProps {
    maxRows?: number
}

export const AddTweetForm: FC<AddTweetFormProps> = ({ maxRows }) => {

    const MAX_LENGTH = 280

    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()
    const { loadingAddTweet, errorAddTweet } = useSelector(selectTweets)

    const textLimitPercent = Math.round(text.length / 2.8)
    const textCount = MAX_LENGTH - text.length

    const ButtonTweet = styled(Button)({
        '&:disabled': {
            backgroundColor: lightBlue[50]
        }
    })

    const handleChangeTextare = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        if (e.target.value.length < MAX_LENGTH + 1) {
            setText(e.target.value)
        }
    }

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text))
        setText('')
    }

    return (
        <>
            <AddFormBody>
                <TweetAvatar
                    alt="Аватарка пользователя"
                    src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1942&q=80" />

                <AddFormTextarea
                    onChange={handleChangeTextare}
                    placeholder="Что происходит?"
                    maxRows={maxRows}
                    value={text} />
            </AddFormBody>

            <AddFormBottom>
                <AddFormBottomActions>
                    <IconButton color="primary">
                        <OutlinedIcon sx={{ fontSize: 26 }} />
                    </IconButton>

                    <IconButton color="primary">
                        <EmojiIcon sx={{ fontSize: 26 }} />
                    </IconButton>
                </AddFormBottomActions>

                <AddFormBottomRight>
                    {
                        text &&
                        <>
                            <span>{textCount}</span>

                            <CircularProgress
                                sx={{ margin: '0 10px', color: 'rgba(0, 0, 0, 0.1)' }}
                                variant="determinate"
                                value={100}
                                size={28} />
                            <CircularProgress
                                sx={{ margin: '0 10px', position: 'absolute', left: '25px' }}
                                variant="determinate"
                                size={28}
                                value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                color={text.length >= MAX_LENGTH ? 'error' : 'primary'} />
                        </>
                    }

                    {
                        (loadingAddTweet && !errorAddTweet) ?
                            <CircularProgress sx={{marginRight: '20px'}}/> :
                            <ButtonTweet
                                disabled={text.length <= 0}
                                onClick={handleClickAddTweet}
                                color="primary"
                                variant="contained">
                                Твитнуть
                            </ButtonTweet>
                    }
                </AddFormBottomRight>
            </AddFormBottom>
            {
                (errorAddTweet && !text) && <AlertError errorMessage={errorAddTweet}/>
            }
        </>
    )
}
