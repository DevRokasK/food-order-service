import Link from 'next/link';
import ReviewList from "../../components/reviews/ReviewList"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function RestaurantPage(props) {
    const router = useRouter();
    const name = router.query.name;
    const [data, setData] = useState();
    const requestURL = `http://localhost:5228/api/food-fast/restaurant/${name}/reviews?restaurantName=${name}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(requestURL);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log("error", error);
                setData([]);
            }
        }

        fetchData();
    }, [])

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
                        <button className="add-review"><Link href={`/restaurants/new-review?restaurantName=${name}`}>Add a review</Link></button>
                    </div>
                    <div className='navigation-right'>
                        <button className='navigation-right-button'><Link href="/restaurants">Go Back</Link></button>
                    </div>
                </div>
            </div>
            <div className="main">
                <h1 className='page-name'>Reviews</h1>
                <div className="reviewGrid">
                    <ReviewList reviews={data} />
                </div>
                <div className="back-button">
                    <button className='main-button'><Link href="/restaurants">Go Back</Link></button>
                </div>
            </div>
        </div>
    )


}