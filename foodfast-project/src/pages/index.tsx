import Link from 'next/link';
import RestaurantListCustomer from '../components/restaurants/RestaurantListCustomer'
import RestaurantListIndex from '../components/restaurants/RestaurantListIndex'
import { useState, useEffect } from 'react';

interface HomeProps {
  restaurants: Array<any>;
}

export default function Home(props: HomeProps) {

  /* const [filter, setFilter] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSearch = async () => {
    if (!filter) {
      return;
    }
    const response = await fetch(`http://localhost:5228/api/food-fast/restaurants/filter?filter=${filter}`, {
      method: "GET"
    });

    const data = await response.json();
    setFilteredRestaurants(data);
    setIsSearchClicked(true);
  }; */

  return (
    <div className='view'>
      <div className='header'>
        <div className='header-content'>
          <div className='header-logo'>
            <img src="https://i.ibb.co/rHDMF1F/FF-logo.png" alt="FoodFast logo" className='logo' />
          </div>
          <div className='header-name'>
            <Link href="/">FoodFast</Link>
          </div>
          {/* <div className='header-search'>
            <input type="text" id="searchBox" name="searchBox" className='searchBox' placeholder='What are you looking for?' value={filter} onChange={handleFilterChange} />
            <button className='navigation-right-button navigation-right-button-search' id="searchButton" onClick={handleSearch}>Search</button>
          </div> */}
        </div>
      </div>
      <div className='navigation'>
        <div className='navigation-content'>
          <div className='navigation-left'>
            <button className='navigation-left-button'><Link href="/admin">Admin view</Link></button>
          </div>
          <div className='navigation-right'>
            <button className='navigation-right-button'><Link href="/restaurants">Restaurants</Link></button>
          </div>
        </div>
      </div>
      <div className='main'>
        {/*         {isSearchClicked ? (
          <div>
            <h1 className='page-name'>Search results: {filter}</h1>
            {filteredRestaurants.length > 0 ? (
              <RestaurantListCustomer restaurants={filteredRestaurants} />
            ) : (
              <p className='empty-message'>No search results yet!</p>
            )}
          </div>
        ) : (
          <div>
            <h1 className='page-name'>Restaurants</h1>
            <div className="">
              <RestaurantListIndex restaurants={props.restaurants} />
            </div>
          </div>
        )} */}
        <div className='opening'>
          <div className='absolute-button'>
            <h1>Tastier, Faster!</h1>
            <button className='main-button-atlernative'><Link href="/restaurants">Check all available restaurants</Link></button>
          </div>
        </div>
        <p className='rights'>All right reserved.</p>
      </div>
    </div>
  );

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
