import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = () => {

    const [ modalState, setModalState ] = useState('visible active');

    const onDismiss = () => {
        setModalState('');
    }

    return createPortal( 
        <div onClick={onDismiss} className={`ui modals dimmer ${modalState}`}>
            <div className={`ui standard modal ${modalState}`}>
                <div className='header'>
                    Thank you!
                </div>
                <div className='content'>
                    <p>You will hear from us shortly!</p>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;