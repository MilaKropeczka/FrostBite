import { LuIceCreamCone } from 'react-icons/lu';
import { RiCake3Line } from 'react-icons/ri';
import { RiDrinks2Line } from 'react-icons/ri';
import React from 'react';

export default function Categories() {
	const CATEGORIES = [
		{ id: 1, title: 'Flavours', emoji: LuIceCreamCone },
		{ id: 2, title: 'Drinks', emoji: RiDrinks2Line },
		{ id: 3, title: 'Desserts', emoji: RiCake3Line },
	];

	return (
		<div className='relative z-10 mt-8 max-w-xl w-full'>
			<div className='w-full flex gap-4 justify-center'>
				{CATEGORIES.map((item) => (
					<div
						key={item.id}
						className='flex flex-col items-center gap-2'>
						<div className='bg-white p-3 inline-flex items-center justify-center text-pink-800 shadow-xl rounded-xl cursor-pointer transform duration-300 hover:-translate-y-1 hover:bg-gray-50 border border-pink-200 active:scale-90'>
							{React.createElement(item.emoji, { size: 30 })}
						</div>
						<span className='text-sm text-pink-700'>
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
