<template>
  <section class="hero">
    <div class="content container">
  <h4>Receitas Deliciosas</h4>
  <h1 class="hero-title">Descubra pratos incríveis para todas as ocasiões</h1>



      <div class="explore-all">
        <router-link to="/receitas" class="btn">Explorar Todas as Receitas</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store.js'

export default {
  name: 'HeroSearch',
  setup(){
    const q = ref('')
    const router = useRouter()
    const currentSlide = ref(0)

    const featuredRecipes = computed(() => {
      return store.state.recipes.filter(recipe => recipe.popular).slice(0, 5)
    })

    function doSearch(){
      router.push({ path: '/receitas', query: { q: q.value } })
    }

    function nextSlide() {
      currentSlide.value = (currentSlide.value + 1) % featuredRecipes.value.length
    }

    function prevSlide() {
      currentSlide.value = currentSlide.value === 0 ? featuredRecipes.value.length - 1 : currentSlide.value - 1
    }

    function goToSlide(index) {
      currentSlide.value = index
    }

    onMounted(() => {
      setInterval(nextSlide, 5000) // Change slide every 5 seconds
    })

    return { q, doSearch, currentSlide, featuredRecipes, nextSlide, prevSlide, goToSlide }
  }
}
</script>
