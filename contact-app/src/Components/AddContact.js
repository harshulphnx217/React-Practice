import React, { Component } from 'react';

class AddContact extends Component {
    render() {
        return (
            <div className='ui main'>
                <h2> ADD CONTACT</h2>
                <form className='ui form'>
                    <div className='field'>
                        <label> NAME </label>
                        <input type="text" name="name" placeholder=' Name'/>
                    </div>
                    <div className='field'>
                        <label> Email </label>
                        <input type="text" name="email" placeholder=' Email'/>
                    </div>
                    <div>
                        <button className='ui button blue'> ADD </button>
                    </div>
                </form>               
            </div>
        );
    }
}

export default AddContact;