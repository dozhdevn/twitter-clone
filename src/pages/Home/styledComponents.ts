import { ListItem, Paper } from "@mui/material"
import { styled } from "@mui/system"

export const TweetsWrapper = styled(Paper)({
    borderRadius: 0,
    height: '100%',
    borderTop: '0',
    borderBottom: '0'
})

export const TweetsHeader = styled(Paper)({
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

export const RightSide = styled('div')({
    paddingTop: 20,
    position: 'sticky',
    top: 0
})

export const RightSideBlock = styled(Paper)({
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,

})

export const RightSideBlockHeader = styled(Paper)({
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
        fontSize: 20,
        fontWeight: 800,
    }
})

export const RightSideBlockItem = styled(ListItem)({
    cursor: 'pointer',
    '& .MuiTypography-body1': {
    fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
    minWidth: 50,
    },
    '& .MuiListItemText-root': {
    margin: 0,
    },
    '&:hover': {
    backgroundColor: '#edf3f6',
    },
})