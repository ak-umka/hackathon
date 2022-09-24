import * as React from 'react'
import { Modal } from '@mui/material'

interface modalProps {
  open: boolean
  handleOpen: any
  handleClose: any
  component: any
}

export default function BasicModal(props: modalProps) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {props.component}
      </Modal>
    </div>
  )
}
