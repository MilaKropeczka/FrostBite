export function ProductError() {
	return (
		<div className='flex flex-col items-center justify-center text-center w-full py-12'>
			<p className='text-lg font-semibold text-red-700 mb-4'>
				Wystąpił błąd podczas ładowania produktów.
			</p>
		</div>
	);
}
