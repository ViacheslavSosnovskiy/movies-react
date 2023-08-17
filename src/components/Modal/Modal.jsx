import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ModalBackdrop, ModalContent } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

const Modal = ({children, onToggle}) => {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        function handleKeyDown(event) {
            if(event.code === 'Escape') {
                onToggle()
            }
        }
        return function cleanUpKeyDown() {
            window.removeEventListener('keydown', handleKeyDown)
        }
    })

    const handleBackdropClick = (event) => {
        if(event.currentTarget === event.target) {
            onToggle()
        }
    }

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
        <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  )
}

export default Modal