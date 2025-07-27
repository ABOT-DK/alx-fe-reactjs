import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';

<Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

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