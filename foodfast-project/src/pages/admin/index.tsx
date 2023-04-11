import { RestaurantList } from '@/components/restaurants/RestaurantList';
import { RootStore } from '@/stores/RootStore';
import Link from 'next/link';

export default function AdminHome() {
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
                </div>
            </div>
            <div className='navigation'>
                <div className='navigation-content'>
                    <div className='admin-command-bar'>
                        {/*<button className='navigation-right-button'><Link href={{ pathname: "/admin", query: { filter: '' } }}>All restaurants</Link></button>
                        <button className='navigation-right-button'><Link href={{ pathname: "/admin/list", query: { filter: 'false' } }}>Visible</Link></button>
                        <button className='navigation-right-button'><Link href={{ pathname: "/admin/list", query: { filter: 'true' } }}>Hidden</Link></button>
                        <button className='navigation-right-button' onClick={AddRestaurant}>Add</button>*/}
                    </div>
                </div>
            </div>
            <div className='main-admin'>
                <RestaurantList store={store.RestaurantStore} restaurantState={''}></RestaurantList>
            </div>
        </div>
    );
}