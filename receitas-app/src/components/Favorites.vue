<template>
  <div>
    <NavBar />
    <div class="container" style="padding:40px 20px">
      <h2>Minhas Receitas Favoritas</h2>
      <div v-if="recipes.length===0" class="favorites-empty">
        <p>Nenhuma receita favorita ainda.</p>
        <router-link to="/" class="btn">Explorar Receitas</router-link>
      </div>
      <div v-else class="card-grid" style="margin-top:18px">
        <RecipeCard v-for="r in recipes" :key="r.id" :recipe="r"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import RecipeCard from './RecipeCard.vue'
import store from '../store'
import { computed } from 'vue'

export default {
  components: { NavBar, RecipeCard },
  setup(){
    const recipes = computed(()=> store.state.recipes.filter(r => store.state.favorites.includes(r.id)))
    return { recipes }
  }
}
</script>
