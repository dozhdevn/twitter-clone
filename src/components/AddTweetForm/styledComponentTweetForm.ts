import { Avatar, TextareaAutosize } from "@mui/material"
import { styled } from "@mui/system"

export const AddFormBody = styled('div')({
    display: 'flex',
    width: '100%'
})
export const TweetAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: '15px'
}))

export const AddFormTextarea = styled(TextareaAutosize)({
    width: '100%',
    border: 0,
    fontSize: 20,
    fontFamily: 'inherit',
    resize: 'none',
    outline: 'none',
})

export const AddFormBottom = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export const AddFormBottomActions= styled('div')({
    marginTop: 10,
    paddingLeft: 47
})

export const AddFormBottomRight= styled('div')({
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
})