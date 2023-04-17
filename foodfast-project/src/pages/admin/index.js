import { RootStore } from '@/stores/RootStore';
import Link from 'next/link';
import RestaurantList from '../../components/restaurants/RestaurantList'

export default function AdminHome(props) {
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
                        <button className='navigation-right-button'><Link href="/admin/newRestaurant">Add new Restaurant</Link></button>
                    </div>
                </div>
            </div>
            <div className='main-admin'>
                <RestaurantList restaurants={props.restaurants} />
            </div>
        </div>
    );
}

export async function getStaticProps() {
    //fetch data from API
    const store = new RootStore();

    

    return {
        props: {
            restaurants: DUMMY_REST
        }
    };
}

const DUMMY_REST = [
    {
        id: "0",
        name: "Gill London",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: true,
    },
    {
        id: "1",
        name: "Grill London",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: true,
    },
    {
        id: "2",
        name: " London",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: true,
    },
    {
        id: "3",
        name: "Grill ",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: false,
    },
    {
        id: "4",
        name: "Brazil",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: false,
    },
    {
        id: "5",
        name: "Grill Brazil",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: false,
    },
    {
        id: "6",
        name: "Brazil London",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: false,
    },
    {
        id: "7",
        name: "Mc'as",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: false,
    },
    {
        id: "8",
        name: "Hesburger",
        description: "..",
        workingHours: "...",
        address: "...",
        telephoneNumber: "...",
        isHidden: false,
    }
]