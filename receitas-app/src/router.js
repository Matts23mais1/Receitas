import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import RecipesGrid from './components/RecipesGrid.vue'
import RecipeDetail from './components/RecipeDetail.vue'
import Favorites from './components/Favorites.vue'
import AddRecipe from './components/AddRecipe.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/receitas', component: RecipesGrid },
  { path: '/recipe/:id', component: RecipeDetail, props: true },
  { path: '/favorites', component: Favorites },
  { path: '/add', component: AddRecipe }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
