import { useAppDispatch, useAppSelector } from './hooks';
import { uiActions } from './store/ui-slice';
import Header from './components/Header';
import Products from './components/Products';

function App() {
	const dispatch = useAppDispatch();
	const cartIsVisible = useAppSelector((state) => state.ui.cartIsVisible);
	const toggleCart = () => {
		dispatch(uiActions.toggleCart());
	};

	return (
		<>
			<Header />
			{cartIsVisible && <p>CART</p>}
			<Products />
		</>
	);
}

export default App;
