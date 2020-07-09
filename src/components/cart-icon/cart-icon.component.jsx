//dependencies
import React from 'react';

//icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//components
import './cart-icon.styles.scss';

const CartIcon = () => (
	<div className='cart-icon'>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'> 0 </span>
	</div>
);

export default ShoppingIcon;
