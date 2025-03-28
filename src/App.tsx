import './App.css';
import BackgroundGradient from './components/BackgroundGradient';
import Header from './components/Header';
import Categories from './components/Categories';
import { SearchBar } from './features/Search/SearchBar';
import ProductSection from './features/ProductSection/ProductSection';

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
