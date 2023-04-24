import React from "react";
import Link from 'next/link';
import MenuList from "../../components/menu/MenuList"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function RestaurantPage(props) {
    /*const router = useRouter();
    const name = router.query.name;
    getProps();
    async function getProps() {
        //fetch data from API
        // http://localhost:5228/api/food-fast/restaurant/test/reviews?restaurantName=test
        const requestURL = `http://localhost:5228/api/food-fast/restaurant/${name}/meals?restaurantName=${name}`;
        console.group(requestURL)
        const response = await fetch(requestURL, {
            method: "GET"
        });

        const data = await response.json();
        console.log(data);

        return {
            props: {
                menu: data
            }
        };
    }*/

    const router = useRouter();
    const name = router.query.name;
    const [data, setData] = useState(null);
    const requestURL = `http://localhost:5228/api/food-fast/restaurant/${name}/meals?restaurantName=${name}`;

    /*useEffect(() => {
        fetch(requestURL)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])*/

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
                        <button className="add-menu"><Link href={`/restaurants/new-menu?restaurantName=${name}`}>Add a menu</Link></button>
                    </div>
                    <div className='navigation-right'>
                        <button className='navigation-right-button'><Link href="/restaurants">Go Back</Link></button>
                    </div>
                </div>
            </div>
            <div className="main">
            <h1 className='page-name'>Menu</h1>
                <div className="reviewGrid">
                    <MenuList menu={data} />
                </div>
                <div className="back-button">
                <button className='main-button'><Link href="/restaurants">Go Back</Link></button>
                </div>
            </div>
        </div>
    )
}