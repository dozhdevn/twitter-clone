import { Alert, Snackbar } from '@mui/material'
import React from 'react'

interface NotificationProps {
    visible: boolean
    severity: 'success' | "error"
    description: string
    onClose: () => void
}


export const Notification: React.FC<NotificationProps> = ({visible, onClose, description, severity}) => {

    return (
        <Snackbar anchorOrigin={{vertical: 'bottom', horizontal:  'center'}} open={visible} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose} severity={severity}>{description}</Alert>
        </Snackbar>
    )
}

