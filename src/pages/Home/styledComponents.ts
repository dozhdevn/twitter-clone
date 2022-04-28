import { Paper } from "@mui/material"
import { styled } from "@mui/system"
export const RightSide = styled('div')({
    paddingTop: 20,
    position: 'sticky',
    top: 0
})
export const TweetsWrapper = styled(Paper)({
    borderRadius: 0,
    borderTop: '0',
    borderBottom: '0'
})

export const TweetsHeader = styled(Paper)({
    display: 'flex',
    position: 'sticky',
    top: 0,
    zIndex: 6,
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
        fontWeight: 800
    }

})