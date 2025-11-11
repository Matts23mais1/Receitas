<template>
  <div>
    <NavBar />
    <HeroSearch />

    <section class="section container">
      <FiltersBox @change="onFilterChange"/>
    </section>

    <section class="section container">
      <h3>{{ recipes.length }} receitas encontradas</h3>
      <div class="card-grid" style="margin-top:18px">
        <RecipeCard v-for="r in recipes" :key="r.id" :recipe="r" />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import HeroSearch from './HeroSearch.vue'
import RecipeCard from './RecipeCard.vue'
import FiltersBox from './FiltersBox.vue'
import store from '../store'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'RecipesGrid',
  components: { NavBar, HeroSearch, RecipeCard, FiltersBox },
  setup(){
    const filters = ref({ q: '', category: 'Todas', difficulty: 'Todas', order: 'Popularidade' })
    const route = useRoute()

    function refresh(){
      // if query present, use it
      filters.value.q = route.query.q || ''
      const arr = store.filteredRecipes(filters.value)
      return arr
    }

    const recipes = ref(refresh())

    watch(() => route.query.q, () => { recipes.value = refresh() })
    function onFilterChange(newFilt){
      filters.value = { ...filters.value, ...newFilt }
      recipes.value = store.filteredRecipes(filters.value)
    }

    function onSearch(query){
      filters.value.q = query
      recipes.value = store.filteredRecipes(filters.value)
    }

    // initialize
    recipes.value = store.filteredRecipes(filters.value)

    return { recipes, onFilterChange }
  }
}
</script>
