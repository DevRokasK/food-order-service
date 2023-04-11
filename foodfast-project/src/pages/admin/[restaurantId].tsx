import { RestaurantList } from '@/components/restaurants/RestaurantList';
import { RootStore } from '@/stores/RootStore';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function RestaurantInfo() {
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
                </div>
            </div>
            <div className='navigation'>
                <div className='navigation-content'>
                    <div className='admin-command-bar'>
                        {/*<button className='navigation-right-button'><Link href={{ pathname: "/admin", query: { filter: '' } }}>All restaurants</Link></button>
                        <button className='navigation-right-button'><Link href={{ pathname: "/admin/list", query: { filter: 'false' } }}>Visible</Link></button>
                        <button className='navigation-right-button'><Link href={{ pathname: "/admin/list", query: { filter: 'true' } }}>Hidden</Link></button>*/}
                        <button className='navigation-right-button'>Add</button>
                    </div>
                </div>
            </div>
            <div className='main-admin'>
            <div><h1>Restaurant Info</h1></div>
            </div>
        </div>
    );
}