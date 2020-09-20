import React from 'react';

const Modal = () => {
    return (
        <div class="ui basic modal">
            <div class="ui icon header">
                <i class="archive icon"></i>
                Your Form Has Been Submitted!
            </div>
            <div class="content">
                <p>Thank you for giving us your details. We will get back to you shortly.</p>
            </div>
            <div class="actions">
                <div class="ui red basic cancel inverted button">
                    <i class="remove icon"></i>
                    No
                </div>
                <div class="ui green ok inverted button">
                    <i class="checkmark icon"></i>
                    Yes
                </div>
            </div>
        </div>
    )
}

export default Modal;