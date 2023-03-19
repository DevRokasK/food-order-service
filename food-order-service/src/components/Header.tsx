import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

export const Header = observer(() => {
    return (
        <div>
            <div className='header-logo'>
                <img src="https://i.ibb.co/rHDMF1F/FF-logo.png" alt="FoodFast logo" className='logo' />
            </div>
            <div className='header-name'>
                <Link to="/">FoodFast</Link>
            </div>
            <div className='header-search'>
                <input type="text" id="searchBox" name="searchBox" className='searchBox' placeholder='What are you looking for?'/>
            </div>
        </div>
    )
})