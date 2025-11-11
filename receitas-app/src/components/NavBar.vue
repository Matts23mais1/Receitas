<template>
  <header class="header">
    <div class="container inner">
      <div class="brand">
        <img src="/logo.png" alt="ReceitasFáceis logo" class="logo" loading="lazy">
        <div>
          <div class="brand-title">Receitas Deliciosas</div>
          <small class="brand-subtitle">Receitas Deliciosas em Minutos</small>
        </div>
      </div>

      <nav class="nav">
        <router-link to="/" exact-active-class="active">
          <span class="icon">🏠</span>
          Início
        </router-link>
        <router-link to="/receitas" active-class="active">
          <span class="icon">🍽️</span>
          Receitas
        </router-link>
        <router-link to="/favorites" active-class="active">
          <span class="icon">❤️</span>
          Favoritos
        </router-link>
        <router-link to="/add" active-class="active">
          <span class="icon">➕</span>
          Adicionar
        </router-link>
        <div class="search-nav" :class="{ 'open': isSearchOpen }">
          <input v-model="q" placeholder="Buscar receitas..." @keyup.enter="doSearch" aria-label="Pesquisar receitas" />
          <button @click="toggleSearch" aria-label="Abrir busca">🔍</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NavBar',
  setup(){
    const q = ref('')
    const router = useRouter()
    const isSearchOpen = ref(false)

    function doSearch(){
      router.push({ path: '/receitas', query: { q: q.value } })
      isSearchOpen.value = false
    }

    function toggleSearch(){
      isSearchOpen.value = !isSearchOpen.value
    }

    return { q, doSearch, isSearchOpen, toggleSearch }
  }
}
</script>
