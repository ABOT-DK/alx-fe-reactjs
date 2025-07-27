import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
  return (
    <div>
      <SearchBar />
      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try a different search term.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;