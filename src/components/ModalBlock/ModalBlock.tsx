import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';

interface ModalBlockProps {
	visible: boolean
	children: React.ReactNode
	title: string
	onClose: () => void
}

const ModalBlock: FC<ModalBlockProps> = ({children, title, visible, onClose}) => {
  return (
	<Dialog open={visible} aria-labelledby="form-dialog-title">
		<DialogTitle id="form-dialog-title">
			<IconButton color='secondary'>
			  <CloseIcon 
			  	sx ={{fontSize: 26}} 
			  	color='secondary'
				onClick={onClose}/>
			</IconButton>
			{title}
		</DialogTitle>
		<DialogContent>
			{children}
		</DialogContent>
	</Dialog>
  )
}

export default ModalBlock