import React from 'react'

import { Avatar, colors, Typography } from '@mui/material'
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/system';

const SidePropfile = styled('div')({
    display: 'flex',
    position: 'absolute',
    bottom: '30px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    width: '260px',
    borderRadius: '50px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: colors.lightBlue[50],
    } 
})

const SidePropfileInfo = styled('div')({
    flex: 1,
    marginLeft: '10px',
    '& b': {
      fontSize: '16px',
    }
})


export const UserSideProfile = () => {
    return (
        <SidePropfile>
            <Avatar src="https://sun9-82.userapi.com/s/v1/ig2/4UxmxAFvtpnp8DmukeGzsOTaTUFDaeHehqlQfvSQ0sadFOeR-tH6mzYscVJ0QJg9KCB8h0i-UxkOS7pPfhTbjNDE.jpg?size=1388x1852&quality=96&type=album" />
            <SidePropfileInfo>
                <b>Nikita Dozhdev</b>
                <Typography sx={{ color: colors.grey[500] }}>@dzhdvn</Typography>
            </SidePropfileInfo>
            <ArrowDown />
        </SidePropfile>
    )
}
