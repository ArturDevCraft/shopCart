import React, { RefObject, useRef, useState } from 'react';
import classes from './withProductDetails.module.css';
import { useAppDispatch, useAppSelector } from '../hooks';
import { uiActions } from '../store/ui-slice';

interface ProductDetailsProps {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
}

export const withProductDetails = <P extends ProductDetailsProps>(
	WrappedComponent: React.ComponentType<P>
) => {
	return function WithProductDetailsComponent(props: P) {
		const quantityInput = useRef<HTMLInputElement>(null);
		const [quantity, setQuantity] = useState(1);
		const dispatch = useAppDispatch();
		const prodDetailsId = useAppSelector((state) => state.ui.productIsVisible);
		const closeDetails = () => {
			dispatch(uiActions.showProductDetails(0));
		};

		const showDetails = () => {
			dispatch(uiActions.showProductDetails(props.id));
		};

		const handleChange = () => {
			setQuantity(parseInt(quantityInput.current?.value ?? '1'));
		};

		return (
			<div className={classes.productWrapper}>
				<WrappedComponent {...props} onClick={showDetails} quantity={quantity}>
					{prodDetailsId !== 0 && (
						<div className={classes.details}>
							<label htmlFor="quantity">Quantity: </label>
							<input
								ref={quantityInput}
								onChange={handleChange}
								className={classes.quantity}
								name="quantity"
								id="quantity"
								type="number"
								defaultValue={quantity}
							/>
							<p className={classes.description}>{props.description}</p>
							<button onClick={closeDetails} className={classes.closeButton}>
								Close Details
							</button>
						</div>
					)}
				</WrappedComponent>
			</div>
		);
	};
};
