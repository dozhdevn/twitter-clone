import { Button, CircularProgress, IconButton } from '@mui/material'
import { FC, useState } from 'react'
import OutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { AddFormBody, AddFormBottomActions, AddFormBottomRight, AddFormTextarea, TweetAvatar, AddFormBottom } from './styledComponentTweetForm';
import { useDispatch } from 'react-redux';
import { fetchAddTweet } from '../../store/Tweets/actionCreators';

interface AddTweetFormProps {
    maxRows?: number
}

export const AddTweetForm: FC<AddTweetFormProps> = ({maxRows}) => {

    const MAX_LENGTH = 280

    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()
    const textLimitPercent = Math.round(text.length / 2.8)
    const textCount = MAX_LENGTH - text.length

    const handleChangeTextare  = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        if(e.target.value.length < MAX_LENGTH + 1){
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
                    value={text}/>
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
                    <span>{textCount}</span>

                    {
                       !text ?
                        <CircularProgress
                            sx={{margin: '0 10px', color: 'rgba(0, 0, 0, 0.1)'}}
                            variant="determinate"
                            value={100}
                            size={28}/> :
                       <CircularProgress
                            sx={{margin: '0 10px'}} 
                            variant="determinate"
                            size={28}
                            value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                            color={text.length >= MAX_LENGTH ? 'error' : 'primary'}/>

                    }

                    <Button
                        disabled={text.length <= 0}
                        onClick={handleClickAddTweet}
                        color="primary"
                        variant="contained">
                        Твитнуть
                    </Button>
                </AddFormBottomRight>
            </AddFormBottom>
        </>
    )
}
