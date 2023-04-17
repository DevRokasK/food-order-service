import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import RestaurantListCustomer from '../../components/restaurants/RestaurantListCustomer'

export default function Restaurants(props) {
    return (
        <div className="grid-container">
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
                        {/*<button className='navigation-left-button'>Discover</button>*/}
                    </div>
                    <div className='navigation-right'>
                        <button className='navigation-right-button'><Link href="/">Go Back</Link></button>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className=''>
                <RestaurantListCustomer restaurants={props.restaurants} />
                </div>
                <div className="back-button">
                    <Button variant="primary"><a href="/">Go Back</a></Button>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    //fetch data from API
    // http://localhost:5228/api/food-fast/restaurants
    const response = await fetch('http://localhost:5228/api/food-fast/restaurants', {
        method: "GET"
    });

    const data = await response.json();

    return {
        props: {
            restaurants: data
        }
    };
}