import { create } from 'zustand';

type DrawerType = 'cart' | 'profile' | null;

type CartDrawerState = {
	activeDrawer: DrawerType;
	toggleDrawer: (drawer: DrawerType) => void;
	openCart: () => void;
	closeProfile: () => void;
};

export const useCartDrawerStore = create<CartDrawerState>((set) => ({
	activeDrawer: null,
	toggleDrawer: (activeDrawer) => {
		set((state) => ({
			activeDrawer:
				activeDrawer === state.activeDrawer ? null : activeDrawer,
		}));
	},
	openCart: () => set({ activeDrawer: 'cart' }),
	closeProfile: () => set({ activeDrawer: 'profile' }),
}));
