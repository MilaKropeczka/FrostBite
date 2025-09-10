import './App.css';
import { AppRouter } from './routes/AppRouter';

function App() {
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<AppRouter />
		</div>
	);
}

export default App;
