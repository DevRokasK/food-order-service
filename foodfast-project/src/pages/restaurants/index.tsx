import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { RootStore } from "@/stores/RootStore";

export default function Restaurants() {

    const store = new RootStore();

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
                        <button className='navigation-right-button'><Link href="/">Go Back</Link></button>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="cardGrid">
                    {
                        React.Children.toArray(
                            store.RestaurantStore?.Restaurants?.map((item, i) =>
                                <div className="RestaurantCard">
                                    <Card>
                                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148695092.jpg" width={286} height={180} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                Address: {item.address}
                                            </Card.Text>
                                            <Card.Text>
                                                Number: {item.telephoneNumber}
                                            </Card.Text>
                                            <Button variant="primary"><a href={`/restaurants/${item.id}`}>Reviews</a></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        )
                    }
                </div>
                <div className="back-button">
                    <Button variant="primary"><a href="/">Go Back</a></Button>
                </div>
            </div>
        </div>
    )
}