import './App.css';
import HeaderBar from './HeaderBar.js';
import RecipeCard from './RecipeCard.js';

function App() {
  const name = "Gus";
  return (
    <div className="App">
      <HeaderBar />
      <RecipeCard />
    </div>
  );
}

export default App;
