import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import { useEffect, useRef } from 'react';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
	open: boolean;
}

const Modal: React.FC<Props> = ({ children, onClose, open }) => {
	const dialog = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (open) {
			dialog.current?.showModal();
		}
		return () => dialog.current?.close();
	}, [open]);

	const modalRoot = document.getElementById('modal');
	if (!modalRoot) return null;

	return createPortal(
		<dialog ref={dialog} className={classes.modal} onClose={onClose}>
			{children}
		</dialog>,
		modalRoot
	);
};

export default Modal;
