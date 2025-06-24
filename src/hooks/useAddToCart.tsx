import { useShopSlice } from '@/store/useShopSlice';
import { useCartDrawerStore } from '@/store/useCartDrawerStore';
import { Product } from '@/features/products';

export function useAddToCart() {
	const { addToCart, setHighlightedId } = useShopSlice();
	const { openCart } = useCartDrawerStore();

	function handleAddCart(product: Product) {
		if (!product) return;
		const cartProduct = { ...product, quantity: 1 };
		addToCart(cartProduct);
		openCart();
		setHighlightedId(cartProduct.id);
	}

	return handleAddCart;
}
