import Link from 'next/link';
import RestaurantListCustomer from '../../components/restaurants/RestaurantListCustomer'
import { useState, useEffect } from 'react';

export default function Restaurants(props) {
    const [filter, setFilter] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState(props.restaurants);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [sorted, setSorted] = useState(false);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleSearch = async () => {
        setShowSearchResults(false);
        const response = await fetch(`http://localhost:5228/api/food-fast/restaurants/filter?filter=${filter}`, {
            method: "GET"
        });

        const data = await response.json();
        setFilteredRestaurants(data);
        setShowSearchResults(true);
        setSorted(false);
    };

    const handleSort = async () => {
        const response = await fetch(`http://localhost:5228/api/food-fast/restaurants/ordered-az`, {
            method: "GET"
        });
    
        const data = await response.json();
        setFilteredRestaurants(data);
        setShowSearchResults(true);
        setSorted(true);
    };
    

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
                        <input type="text" id="searchBox" name="searchBox" className='searchBox' placeholder='What are you looking for?' value={filter} onChange={handleFilterChange} />
                        <button className='navigation-right-button navigation-right-button-search' id="searchButton" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
            <div className='navigation'>
                <div className='navigation-content'>
                    <div className='navigation-left'>
                        <button className='navigation-left-button' onClick={handleSort}>Sort A-Z</button>
                    </div>
                    <div className='navigation-right'>
                        <button className='navigation-right-button'><Link href="/">Go Back</Link></button>
                    </div>
                </div>
            </div>
            <div className="main">
            {showSearchResults ? (
                <div>
                    <h1 className='page-name'>{sorted ? `Search results: Sorted A-Z` : `Search results: ${filter}`}</h1>
                    {filteredRestaurants.length > 0 ? (
                        <RestaurantListCustomer restaurants={filteredRestaurants} />
                    ) : (
                        <p className='empty-message'>No search results yet!</p>
                    )}
                </div>
                ) : (
    <div>
        <h1 className='page-name'>Restaurants</h1>
        <RestaurantListCustomer restaurants={props.restaurants} />
    </div>
)}
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
