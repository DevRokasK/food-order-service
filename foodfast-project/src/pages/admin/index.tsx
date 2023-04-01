import { RootStore } from '@/stores/RootStore';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export default function AdminHome(store: RootStore) {

    return (
        <div>
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

            </div>
            <div className='main-admin'>

            </div>
        </div>
    );
}