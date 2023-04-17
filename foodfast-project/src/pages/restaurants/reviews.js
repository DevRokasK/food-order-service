import React from "react";
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import ReviewList from "../../components/ReviewList"
import { useRouter } from 'next/router'

export default function RestaurantPage(props) {
    const router = useRouter();
    const name = router.query.name;
    getProps();
    async function getProps() {
        //fetch data from API
        // http://localhost:5228/api/food-fast/restaurant/test/reviews?restaurantName=test
        const requestURL = `http://localhost:5228/api/food-fast/restaurant/${name}/reviews?restaurantName=${name}`;
        console.group(requestURL)
        const response = await fetch(requestURL, {
            method: "GET"
        });

        const data = await response.json();
        console.log(data);

        return {
            props: {
                reviews: data
            }
        };
    }

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
                        <button className='navigation-right-button'><Link href="/restaurants">Go Back</Link></button>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="reviewGrid">
                    <ReviewList reviews={props.reviews} />
                </div>
                <div className="back-button">
                    <Button variant="primary"><a href="/restaurants">Go Back</a></Button>
                </div>
            </div>
        </div>
    )


}