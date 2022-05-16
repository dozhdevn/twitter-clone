import { Avatar, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";


export const FullTweetWrapper = styled(Paper)({
    padding: '22px'
})

export const FullTweetHeader = styled('div')({
    display: 'flex'
})

export const TweetAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: '15px'
}))

export const FullTweetInfo = styled(Typography)({
    "span": {
        color: grey[500],
        marginRight: '10px'
    }
})

export const FullTweetText = styled(Typography)({
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 1.3125,
    wordBreak: 'break-word'
})

export const FullTweetFooter = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: `1px solid #E6ECF0`,
    padding: '2px 0',
    marginTop: '20px',
    width: '100%',
    left: 0
})