import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { uiActions } from './store/ui-slice';
import Header from './components/Header';

function App() {
	const dispatch = useAppDispatch();
	const cartIsVisible = useAppSelector((state) => state.ui.cartIsVisible);
	const toggleCart = () => {
		dispatch(uiActions.toggleCart());
	};

	return (
		<>
			<Header />
			<button onClick={toggleCart}>Toggle cart view</button>
			{cartIsVisible && <p>CART</p>}
		</>
	);
}

export default App;
