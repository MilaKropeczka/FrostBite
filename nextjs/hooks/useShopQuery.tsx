'use client';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getShopItems = async () => {
	const response = await axios.get('/api/shop/getItems');
	return response.data;
};

export const useShoprQuery = () => {
	return useQuery({
		queryKey: ['shop'],
		queryFn: () => getShopItems(),
	});
};
