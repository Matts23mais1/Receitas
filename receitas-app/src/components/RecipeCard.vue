<template>
  <div class="card">
    <div class="image-wrap">
      <img :src="recipe.image || placeholder" :alt="recipe.title || 'Receita'" loading="lazy" />
      <div v-if="recipe.popular" class="badge">Popular</div>
    </div>
    <div class="body">
      <div class="content">
        <h3>{{ recipe.title }}</h3>
        <div class="meta">
          <div>⏱ {{ recipe.time }} min</div>
          <div>•</div>
          <div>{{ recipe.category }}</div>
        </div>
        <div style="margin-top:12px;color:var(--muted)">{{ recipe.views }} visualizações</div>
        <div v-if="recipe.rating" style="margin-top:8px;display:flex;gap:4px;align-items:center">
          <span>⭐</span>
          <span>{{ recipe.rating }}</span>
        </div>
      </div>
      <div class="actions">
        <router-link :to="`/recipe/${recipe.id}`" class="btn">Ver Receita</router-link>
        <button @click="toggleFav" class="fav-btn">
          <span v-if="isFav">💖</span>
          <span v-else>🤍</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'RecipeCard',
  props: ['recipe'],
  data(){ return { placeholder: 'https://via.placeholder.com/600x400?text=Receita' } },
  computed: {
    isFav(){
      return store.isFavorite(this.recipe.id)
    }
  },
  methods:{
    toggleFav(){
      if(this.isFav) store.removeFavorite(this.recipe.id)
      else store.addFavorite(this.recipe.id)
    }
  }
}
</script>
