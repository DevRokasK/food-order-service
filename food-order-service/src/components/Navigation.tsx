import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

export const Navigation = observer(() => {
    return (
        <div className='navigation-content'>
            <div className='navigation-left'>
                <button className='navigation-left-button'>Discover</button>
            </div>
            <div className='navigation-right'>
                <button className='navigation-right-button'>Restaurants</button>
            </div>
        </div>
    )
})