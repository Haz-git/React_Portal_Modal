import React, { useState } from 'react';
import Modal from './Modal';

const Form = () => {

    const [ modalControl, setModalControl ] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('This button is working');
        setModalControl(true);
    }

    const renderModal = () => {
        console.log(modalControl)
        if (modalControl === true) {
            return (
                <Modal />
            )
        }
    }

    return (
        <div>
            <div>
                <h1>Hello! This is a small React Portal Test!</h1>
            </div>
            <form onSubmit={handleOnSubmit} className='ui form'>
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                    <button class="ui button" type="submit">Submit</button>
            </form>
            {renderModal()}
        </div>
    )
}

export default Form;