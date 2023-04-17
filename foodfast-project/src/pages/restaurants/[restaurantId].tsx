import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { RootStore } from "@/stores/RootStore";
import { useRouter } from "next/router";

export default function RestaurantPage() {
    const router = useRouter();
    const restaurantId = router.query.restaurantId;

    // send a request to backend API
    // to fetch the restaurant with restaurantId

    const store = new RootStore();
    const restaurant = store.RestaurantStore.Restaurants[Number(restaurantId)];
    if (restaurant) {
        restaurant.ReviewStore?.GetReview();
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
                        <button className='navigation-left-button'>Discover</button>
                    </div>
                    <div className='navigation-right'>
                        <button className='navigation-right-button'><Link href="/restaurants">Go Back</Link></button>
                    </div>
                </div>
            </div>
            <div className="main">
            <button className="add-review"><Link href={`/restaurants/new-review`}>Add a review</Link></button>
                <div className="reviewGrid">
                    { restaurant &&
                        React.Children.toArray(
                            restaurant.ReviewStore.Reviews.map((item, i) =>
                                <div className="reviewCard">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.author}</Card.Title>
                                            <Card.Text>
                                                Review: {item.comment}
                                            </Card.Text>
                                            <Card.Text>
                                                Score: {item.score}
                                            </Card.Text>
                                            <button className="delete-review"><Link href="/pakeist">Delete a review</Link></button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        )
                    }
                </div>
                <div className="back-button">
                    <Button variant="primary"><a href="/restaurants">Go Back</a></Button>
                </div>
            </div>
        </div>
    )
}