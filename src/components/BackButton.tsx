import React, { FC } from 'react'
import ArrowBack from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';

export const BackButton: FC = () => {

    const history = useHistory()

    const handleClickButton = () => {
        history.goBack()
    }

    return (
    <IconButton color="primary" onClick={handleClickButton} sx = {{marginRight: '20px'}}>
        <ArrowBack/>
    </IconButton>
    )
}
