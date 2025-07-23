import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getShopItems = async () => {
	const response = await axios.get('/FrostBite/shop/getItems');
	return response.data;
};

export const useShoprQuery = () => {
	return useQuery({
		queryKey: ['shop'],
		queryFn: () => getShopItems(),
	});
};
