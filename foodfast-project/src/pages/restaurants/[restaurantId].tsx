import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
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
                <div className="table">
                    <Table responsive="lg" striped>
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Score</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {restaurant &&
                                React.Children.toArray(
                                    restaurant.ReviewStore.Reviews.map((item, i) => <tr>
                                        <td>{item.author}</td>
                                        <td>{item.score}</td>
                                        <td>{item.comment}</td>
                                    </tr>)
                                )
                            }
                        </tbody>
                    </Table>
                    <div>
                        <Button variant="primary"><a href="/restaurants" className="back-button">Go Back</a></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}