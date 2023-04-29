import React from 'react';
import Link from 'next/link';
import Image from 'next/Image';

export default function Header() {
    return (
        <div className='header-content'>
            <div className='header-logo'>
                <Image src="https://i.ibb.co/rHDMF1F/FF-logo.png" alt="FoodFast logo" className='logo' />
            </div>
            <div className='header-name'>
                <Link href="/">FoodFast</Link>
            </div>
            {/* <div className='header-search'>
                <input type="text" id="searchBox" name="searchBox" className='searchBox' placeholder='What are you looking for?' />
                <button className='navigation-right-button navigation-right-button-search'><Link href="/">Search</Link></button>
            </div> */}
        </div>
    )
}