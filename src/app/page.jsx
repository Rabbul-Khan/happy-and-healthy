import Article from './components/Article';
import FoodSelector from './components/FoodSelector';
import Header from './components/header/Header';
import NavBar from './components/NavBar';
import Settings from './components/Settings';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="flex">
        <NavBar />
        <div className="grid grid-cols-1 lg:grid-cols-10 lg:w-[calc(100vw-4rem)] ">
          <FoodSelector />
          <Article />
          <Settings />
        </div>
      </div>
    </div>
  );
}
