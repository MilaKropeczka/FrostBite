import { useState } from 'react';

export const useCartDrawer = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => setIsOpen(!isOpen);

	return { isOpen, toggleDrawer };
};
