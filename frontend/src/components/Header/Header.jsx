import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Hungry? We've Got You Covered!
                Order your favorite meals in just a few taps. Fast delivery, fresh food, happy you!
                </p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header