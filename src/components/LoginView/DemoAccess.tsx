import { useState } from 'react';
import { Copy, Check, X } from 'lucide-react';
import { toast } from '@/hooks/useToaster';
import { motion, AnimatePresence } from 'framer-motion';

export function DemoAccess() {
	const [copiedEmail, setCopiedEmail] = useState(false);
	const [copiedPassword, setCopiedPassword] = useState(false);
	const [isOpen, setIsOpen] = useState(true);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText('test@test.pl');
			setCopiedEmail(true);
			setTimeout(() => setCopiedEmail(false), 2000);
			toast.success('Email copied to clipboard!');
		} catch (err) {
			toast.error('Failed to copy email');
		}
	};

	const copyPassword = async () => {
		try {
			await navigator.clipboard.writeText('testpassword123');
			setCopiedPassword(true);
			setTimeout(() => setCopiedPassword(false), 2000);
			toast.success('Password copied to clipboard!');
		} catch (err) {
			toast.error('Failed to copy password');
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.3 }}
					className='fixed top-4 right-4 z-50 max-w-sm w-80'>
					<div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl shadow-lg p-4 relative'>
						<button
							onClick={() => setIsOpen(false)}
							className='absolute top-2 right-2 p-1 hover:bg-blue-100 rounded-full transition-colors duration-200 cursor-pointer'
							title='Close'>
							<X size={16} className='text-blue-600' />
						</button>

						<h3 className='font-semibold text-blue-900 text-center mb-3 flex items-center justify-center pr-6'>
							<svg
								className='w-4 h-4 mr-2'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
									clipRule='evenodd'
								/>
							</svg>
							Demo Access
						</h3>

						<div className='space-y-2'>
							<div className='flex items-center justify-between p-2 bg-white rounded-lg border border-blue-100'>
								<div className='flex-1'>
									<p className='text-xs text-gray-500'>
										Email
									</p>
									<p className='text-sm font-medium text-blue-800'>
										test@test.pl
									</p>
								</div>
								<button
									onClick={copyEmail}
									type='button'
									className='ml-3 p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200 cursor-pointer'
									title='Copy email'>
									{copiedEmail ? (
										<Check
											size={16}
											className='text-green-600'
										/>
									) : (
										<Copy
											size={16}
											className='text-blue-600'
										/>
									)}
								</button>
							</div>

							<div className='flex items-center justify-between p-2 bg-white rounded-lg border border-blue-100'>
								<div className='flex-1'>
									<p className='text-xs text-gray-500'>
										Password
									</p>
									<p className='text-sm font-medium text-blue-800'>
										testpassword123
									</p>
								</div>
								<button
									onClick={copyPassword}
									type='button'
									className='ml-3 p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200 cursor-pointer'
									title='Copy password'>
									{copiedPassword ? (
										<Check
											size={16}
											className='text-green-600'
										/>
									) : (
										<Copy
											size={16}
											className='text-blue-600'
										/>
									)}
								</button>
							</div>
						</div>

						<p className='text-xs text-blue-600 text-center mt-3'>
							Use these credentials to test the login
							functionality
						</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
