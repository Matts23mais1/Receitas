<template>
  <div>
    <NavBar />
  <section class="section recipe-detail no-top-padding">
    <div class="container detail-grid">
      <div class="detail-main">
        <div class="image-container">
          <img :src="recipe.image || placeholder" :alt="recipe.title || 'Receita'" loading="lazy" />
        </div>

        <div class="panel">
          <h2>Ingredientes</h2>
          <ul>
            <li v-for="(ing,i) in recipe.ingredients" :key="i">• {{ ing }}</li>
          </ul>
        </div>

        <div class="panel">
          <h2>Modo de Preparo</h2>
          <ol>
            <li v-for="(s,i) in recipe.steps" :key="i">{{ s }}</li>
          </ol>
        </div>
      </div>

      <aside class="detail-aside">
        <div class="info-card">
          <h3>{{ recipe.title }}</h3>
          <div class="meta" style="margin-top:8px">
            <div>⏱ {{ recipe.time }} min</div>
            <div>•</div>
            <div>{{ recipe.difficulty }}</div>
          </div>
          <div style="margin-top:12px;color:var(--muted)">{{ recipe.views }} visualizações</div>
          <div v-if="recipe.rating" style="margin-top:8px;display:flex;gap:4px;align-items:center">
            <span>⭐</span>
            <span>{{ recipe.rating }}</span>
          </div>
          <div style="margin-top:18px;display:flex;gap:8px">
            <button class="btn" @click="fav" aria-pressed="false">{{ isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos' }}</button>
            <button class="btn secondary" @click="share" aria-label="Compartilhar receita">Compartilhar</button>
            <button v-if="isUserRecipe" class="btn danger" @click="removeRecipe" aria-label="Remover receita">Remover Receita</button>
          </div>
        </div>
      </aside>
    </div>
  </section>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import store from '../store'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'RecipeDetail',
  components: { NavBar },
  setup(){
    const route = useRoute()
    const id = route.params.id
    const recipe = store.getRecipeById(id) || {}
    const isFav = computed(()=> store.isFavorite(recipe.id))
    const isUserRecipe = computed(() => recipe.id && recipe.id > 12) // Assuming user recipes have IDs > 12 (timestamp-based)
    function fav(){ if(isFav.value) store.removeFavorite(recipe.id); else store.addFavorite(recipe.id) }
    function share(){ alert('Função de compartilhar (ex: copiar link)') }
    function removeRecipe(){
      if(confirm('Tem certeza que deseja remover esta receita? Esta ação não pode ser desfeita.')){
        store.removeRecipe(recipe.id)
        route.push('/')
      }
    }
    return { recipe, isFav, isUserRecipe, fav, share, removeRecipe, placeholder: 'https://via.placeholder.com/800x500?text=Receita' }
  }
}
</script>
