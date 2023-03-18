import React from 'react';
import { observer } from 'mobx-react';

export const Header = observer(() => {
    return (
        <div>
            <div className='header-logo'>
                <img src="https://www.awilsonsocialwork.net/wp-content/uploads/2017/01/placeholder.jpg" alt="FoodFast logo" className='logo'/>
            </div>
            <div className='header-name'>
                <a>FoodFast</a>
            </div>
        </div>
    )
})