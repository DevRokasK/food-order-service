import { useRef } from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import classes from '../restaurants/NewRestaurantForm.module.css';
import MenuList from "../../components/menu/MenuList"
import { Menu } from '@/models/Menu';

export default function NewMenuForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const sizeInputRef = useRef();
    const packageInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredSize = sizeInputRef.current.value;
        const enteredPackage = packageInputRef.current.value;

        const menuData = {
            name: enteredName,
            price: enteredPrice,
            size: enteredSize,
            package: enteredPackage,
        };

        props.onAddMenu(menuData);
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
                        <button className='navigation-right-button'><Link href={`/admin/menu?name=${props.name}`}>Cancel</Link></button>
                    </div>
                </div>
            </div>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='name'>Item Name</label>
                        <input type='text' required id='name' ref={nameInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='price'>Price, €</label>
                        <input type='number' required id='price' ref={priceInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='size'>Size</label>
                        <input type='text' required id='size' ref={sizeInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='package'>Packaging</label>
                        <input type='text' required id='package' ref={packageInputRef} />
                    </div>
                    <div className={classes.actions}>
                        <button>Add to Menu</button>
                    </div>
                </form>
            </Card>
        </div>
    );
}