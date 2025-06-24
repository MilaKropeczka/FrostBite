import { create } from 'zustand';

type CartDrawerState = {
	isDrawerOpen: boolean;
	toggleDrawer: () => void;
	openCart: () => void;
};

export const useCartDrawerStore = create<CartDrawerState>((set) => ({
	isDrawerOpen: false,
	toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
	openCart: () => set({ isDrawerOpen: true }),
}));
