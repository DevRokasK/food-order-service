import React from 'react';
import Link from 'next/link';

export default function Navigation() {
    return (
        <div className='navigation-content'>
            <div className='navigation-left'>
                <button className='navigation-left-button'>Discover</button>
            </div>
            <div className='navigation-right'>
                <button className='navigation-right-button'><Link href="/restaurants">Restaurants</Link></button>
            </div>
        </div>
    )
}