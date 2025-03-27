import './App.css';
import BackgroundGradient from './components/BackgroundGradient';
import Search from './components/Search';
import Header from './components/Header';
// import Navigate from './components/Navigate';
import Categories from './components/Categories';
import Section from './components/Section';

function App() {
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<BackgroundGradient />
			{/* <Navigate /> */}
			<Header />
			<Search />
			<Categories />
			<Section />
		</div>
	);
}

export default App;
