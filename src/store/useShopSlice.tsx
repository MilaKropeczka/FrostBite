import { create } from 'zustand';
import { Product } from '@/features/products';
import { persist } from 'zustand/middleware';

type CartProduct = Product & { quantity: number };

type State = {
	cart: CartProduct[];
	highlightedId: number | null;
	favorites: number[];
};

type Actions = {
	addToCart: (product: CartProduct) => void;
	decrementToCart: (product: CartProduct) => void;
	removeToCart: (id: number) => void;
	setHighlightedId: (id: number | null) => void;
	toggleFavorite: (id: number) => void;
};

const initialState: State = {
	cart: [],
	highlightedId: null,
	favorites: [],
};

export const useShopSlice = create<State & Actions>()(
	persist(
		(set) => ({
			...initialState,
			addToCart: (product) => {
				set((state) => {
					const existingProductIndex = state.cart.findIndex(
						(item) => item.id === product.id
					);

					if (existingProductIndex !== -1) {
						const updatedCart = [...state.cart];
						updatedCart[existingProductIndex].quantity +=
							product.quantity;

						return {
							...state,
							cart: updatedCart,
						};
					} else {
						return {
							...state,
							cart: [product, ...state.cart],
						};
					}
				});
			},
			decrementToCart: (product) => {
				set((state) => {
					const existingProductIndex = state.cart.findIndex(
						(item) => item.id === product.id
					);

					if (existingProductIndex === -1) return state;

					const updatedCart = [...state.cart];
					const existingProduct = updatedCart[existingProductIndex];

					const newQuantity =
						existingProduct.quantity - product.quantity;

					if (newQuantity > 0) {
						updatedCart[existingProductIndex] = {
							...existingProduct,
							quantity: newQuantity,
						};
					} else {
						updatedCart.splice(existingProductIndex, 1);
					}

					return {
						...state,
						cart: updatedCart,
					};
				});
			},
			removeToCart: (id: number) => {
				set((state) => ({
					...state,
					cart: state.cart.filter((item) => item.id !== id),
				}));
			},
			setHighlightedId: (id) => set({ highlightedId: id }),
			toggleFavorite: (id) =>
				set((state) => {
					const isFav = state.favorites.includes(id);
					const favorites = isFav
						? state.favorites.filter((favId) => favId !== id)
						: [...state.favorites, id];

					return { ...state, favorites };
				}),
		}),
		{
			name: 'shop-storage',
		}
	)
);
