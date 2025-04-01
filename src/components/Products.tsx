import { useAppSelector } from '../hooks';
import { DUMMY_PRODUCTS } from '../store/cart-slice';
import Product from './Product';
import classes from './Products.module.css';

const Products = () => {
	const prodDetailsId = useAppSelector((state) => state.ui.productIsVisible);
	return (
		<section className={classes.products}>
			{prodDetailsId === 0 && (
				<h2 className={classes.sectionTitle}>Select Your products</h2>
			)}

			<ul
				className={`${
					prodDetailsId === 0 ? classes.list : classes.prodDetails
				}`}
			>
				{DUMMY_PRODUCTS.filter(
					(item) =>
						prodDetailsId === 0 ||
						(prodDetailsId !== 0 && item.id === prodDetailsId)
				).map((product) => (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						description={product.description}
						image={product.image}
						price={product.price}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
