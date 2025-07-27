import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './componenets/AddRecipeForm'
import RecipeList from './componenets/RecipeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RecipeList />
        <AddRecipeForm />
      </div>
    </>
  )
}

export default App
