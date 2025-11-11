  <template>
  <div>
    <NavBar />
    <HeroSearch />

    <section class="section container">
      <h3>Receitas em Destaque</h3>
      <div class="card-grid" style="margin-top:18px">
        <RecipeCard v-for="r in featuredRecipes" :key="r.id" :recipe="r" />
      </div>
      <div style="text-align:center;margin-top:32px">
        <router-link to="/receitas" class="btn" style="background:var(--orange)">Ver Todas as Receitas</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import HeroSearch from './HeroSearch.vue'
import RecipeCard from './RecipeCard.vue'
import store from '../store'

export default {
  name: 'Home',
  components: { NavBar, HeroSearch, RecipeCard },
  setup(){
    // Show only first 4 recipes as featured
    const featuredRecipes = store.state.recipes.slice(0, 4)
    return { featuredRecipes }
  }
}
</script>
