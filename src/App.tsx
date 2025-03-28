import './App.css';
import BackgroundGradient from './components/BackgroundGradient';
import { SearchBar } from './features/SearchBar';
import ProductSection from './features/ProductSection';
import Categories from './features/Categories';
import Header from './features/Header';

function App() {
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<BackgroundGradient />
			<Header />
			<SearchBar />
			<Categories />
			<ProductSection />
		</div>
	);
}

export default App;
