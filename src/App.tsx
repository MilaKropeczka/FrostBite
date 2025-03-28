import './App.css';
import BackgroundGradient from './components/BackgroundGradient';
import Header from './components/Header';
import Categories from './components/Categories';
import Section from './components/Section';
import { SearchBar } from './features/Search/SearchBar';

function App() {
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<BackgroundGradient />
			<Header />
			<SearchBar />
			<Categories />
			<Section />
		</div>
	);
}

export default App;
