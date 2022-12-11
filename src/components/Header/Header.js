import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../redux/cartSlice';

const Header = () => {
    const dispatch = useDispatch()
    const handleChange =(event)=> {
        const text =event.target.value;
        dispatch(setSearchText(text))
    }
    return (
        <div className='container-fluid'>
            <div className="w-100 bg-dark lh-lg">
                <input className="my-2 w-50" type="text" name='searchText' placeholder='Search Text here'  onChange={handleChange}/>
            </div>
            
        </div>
    );
};

export default Header;