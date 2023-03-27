import Image from 'next/image'
import Link from 'next/link';

export default function MyHome() {

    return (
        <div>
            <div className='header'>
                <div className='header-content'>
                    <div className='header-logo'>
                        <img src="https://i.ibb.co/rHDMF1F/FF-logo.png" alt="FoodFast logo" className='logo' />
                    </div>
                    <div className='header-name'>
                        <Link href="/">FoodFast</Link>
                    </div>
                    <div className='header-search'>
                        <input type="text" id="searchBox" name="searchBox" className='searchBox' placeholder='What are you looking for?' />
                    </div>
                </div>
            </div>
            <div className='navigation'>
                <div className='navigation-content'>
                    <div className='navigation-left'>
                        <button className='navigation-left-button'>Discover</button>
                    </div>
                    <div className='navigation-right'>
                        <button className='navigation-right-button'><Link href="/restaurants">Restaurants</Link></button>
                    </div>
                </div>
            </div>
             {/*<div className='main'>
                    <div>
                        <img src="https://wallpapercave.com/wp/wp11872862.jpg" alt="main page background" className='main-background' />
                    </div>
            </div>*/}
        </div>
    );
}