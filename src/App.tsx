import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { uiActions } from './store/ui-slice';

function App() {
	const dispatch = useAppDispatch();
	const cartIsVisible = useAppSelector((state) => state.ui.cartIsVisible);
	const toggleCart = () => {
		dispatch(uiActions.toggleCart());
	};
  
	return (
		<>
			<button onClick={toggleCart}>Toggle cart view</button>
			{cartIsVisible && <p>CART</p>}
		</>
	);
}

export default App;
