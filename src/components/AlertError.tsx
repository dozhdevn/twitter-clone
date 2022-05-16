import { Alert } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'

interface propsAlertError {
    errorMessage: string
}

export const AlertError: FC<propsAlertError> = ({ errorMessage }) => {
    const [show, setShow] = useState<boolean>(false)

    useEffect( () => {
        setShow(true)
        let timer = setTimeout( () => setShow(false), 2500)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return show ? (
        <Alert severity="error">
            {errorMessage}
        </Alert>
    ) : (
        null
    )
}
