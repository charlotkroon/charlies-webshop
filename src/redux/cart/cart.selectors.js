import {createSelector} from 'reselect';

//#1 Selector: Input Selector (gets the whole state and returns a slice of it)
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectedCartItemsCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);
