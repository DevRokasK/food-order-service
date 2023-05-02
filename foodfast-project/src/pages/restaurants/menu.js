import React from "react";
import Link from 'next/link';
import MenuList from "../../components/menu/MenuList"
import OrderList from "../../components/order/OrderList"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function RestaurantPage(props) {
    const router = useRouter();
    const name = router.query.name;
    const [data, setData] = useState(null);
    const requestURL = `http://localhost:5228/api/food-fast/restaurant/${name}/meals?restaurantName=${name}`;

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

    /* let orderData = [];

    function addToOrder(data) {
        orderData.push(data);
        console.log(orderData);
    } */

    const initialOrder = [];
    const [order, setOrder] = useState(initialOrder);
    function addToOrder(data) {
        setOrder(order => [...order, data]);
    }

    function on() {
        document.getElementById("overlay").style.display = "block";
    }

    function off() {
        document.getElementById("overlay").style.display = "none";
    }

    function sumTotal() {
        let sum = 0;
        order.forEach(order => {
            sum += Number(order.price);
        })
        return sum;
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
                    {/* <div className='header-search'>
                        <input type="text" id="searchBox" name="searchBox" className='searchBox' placeholder='What are you looking for?' />
                    </div> */}
                </div>
            </div>
            <div className='navigation'>
                <div className='navigation-content'>
                    <div className='navigation-left'>
                        {order.length > 0 ? (
                            <button className='navigation-left-button' onClick={on}>Check Order</button>
                        ) : (<></>)}
                    </div>
                    <div className='navigation-right'>
                        <button className='navigation-right-button'><Link href="/restaurants">Go Back</Link></button>
                    </div>
                </div>
            </div>
            <div className="main">
                <h1 className='page-name'>Menu</h1>
                <div className="reviewGrid">
                    <MenuList menu={data} addToOrder={addToOrder} />
                </div>
                <div className="back-button">
                    <button className='main-button'><Link href="/restaurants">Go Back</Link></button>
                </div>
                <div id="overlay" onClick={off}>
                    <div className="overlay-data">
                        <h1>Order Info</h1>
                        <h3>Order from: {name}</h3>
                        <h3>Total price: {sumTotal() + "€"}</h3>
                        <h4>Order items:</h4>
                        <OrderList order={order} />
                    </div>
                </div>
            </div>
        </div>
    )
}