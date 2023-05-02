import React from "react";
import Link from 'next/link';
import MenuList from "../../components/menu/MenuList"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

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

    let orderData = [];

    function addToOrder(data) {
        orderData.push(data);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    </div>
                    <div className='navigation-right'>
                        <button className='navigation-right-button'><Link href="/restaurants">Go Back</Link></button>
                        <button className='navigation-right-button' onClick={handleShow}>Check Order</button>
                    </div>
                </div>
            </div>
            <div className="main">
                <h1 className='page-name'>Menu</h1>
                <div className="reviewGrid">
                    <MenuList menu={data} onAddToOrder={addToOrder} />
                </div>
                <div className="back-button">
                    <button className='main-button'><Link href="/restaurants">Go Back</Link></button>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}