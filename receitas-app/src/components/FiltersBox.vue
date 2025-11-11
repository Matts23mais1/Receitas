<template>
  <div class="filters-box">
    <h4 style="display:flex;align-items:center;gap:8px;color:var(--orange)">⚲ Filtros</h4>
    <div style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap">
      <select v-model="local.category">
        <option>Todas</option>
        <option>Jantar</option>
        <option>Salada</option>
        <option>Sobremesa</option>
        <option>Café da Manhã</option>
      </select>

      <select v-model="local.difficulty">
        <option>Todas</option>
        <option>Fácil</option>
        <option>Médio</option>
        <option>Difícil</option>
      </select>

      <select v-model="local.order">
        <option>Popularidade</option>
        <option>Mais Recentes</option>
      </select>

      <button @click="apply" class="btn" style="background:var(--orange)">Aplicar</button>
      <button @click="clear" style="padding:8px 12px;border-radius:8px">Limpar Filtros</button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'FiltersBox',
  emits: ['change'],
  setup(props,{emit}){
    const local = reactive({ category: 'Todas', difficulty: 'Todas', order: 'Popularidade' })
    function apply(){ emit('change', { ...local }) }
    function clear(){ local.category='Todas';local.difficulty='Todas';local.order='Popularidade'; emit('change', {...local})}
    return { local, apply, clear }
  }
}
</script>
