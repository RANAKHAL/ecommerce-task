import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Sign() {
    return (
        <div>
            <div className='sign text-center' >Sign-up and get 20% off to your first order <a href='/'>Sign Up Now </a>
                {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
                <FontAwesomeIcon icon={faTimes} className='float-end me-5 ' />
            </div>

        </div>

    )
}
