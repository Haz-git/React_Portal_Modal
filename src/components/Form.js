import React from 'react';

const Form = () => {
    return (
        <div>
            <div>
                <h1>Hello! This is a small React Portal Test!</h1>
            </div>
            <form className='ui form'>
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                <div class="field">
                    <div class="ui checkbox">
                    <input type="checkbox" tabindex="0" class="hidden" />
                    <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                    <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;