import { ListItem, Paper } from "@mui/material"
import { styled } from "@mui/system"


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