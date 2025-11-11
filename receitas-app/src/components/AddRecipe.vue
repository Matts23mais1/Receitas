<template>
  <div>
    <NavBar />
    <div class="container" style="padding:40px 20px">
      <h2>Enviar Nova Receita</h2>
      <p>Compartilhe sua receita com a comunidade</p>
      <div class="add-recipe-form">
        <label>Nome da Receita *</label>
        <input v-model="form.title" placeholder="Ex: Bolo de Chocolate" />

        <label>Categoria *</label>
        <select v-model="form.category">
          <option value="Almoço">Almoço</option>
          <option value="Jantar">Jantar</option>
          <option value="Café da Manhã">Café da Manhã</option>
          <option value="Sobremesa">Sobremesa</option>
          <option value="Lanche">Lanche</option>
        </select>

        <label>Tempo de Preparo (minutos) *</label>
        <input type="number" v-model.number="form.time" placeholder="30" />

        <label>Dificuldade *</label>
        <select v-model="form.difficulty">
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
        </select>

        <label>Ingredientes *</label>
        <textarea v-model="ingInput" placeholder="Liste os ingredientes, um por linha&#10;Ex:&#10;500g de farinha&#10;3 ovos&#10;200ml de leite&#10;Digite cada ingrediente em uma linha separada"></textarea>

        <label>Modo de Preparo *</label>
        <textarea v-model="stepsInput" placeholder="Descreva o passo a passo, um por linha&#10;Ex:&#10;Pré-aqueça o forno a 180°C&#10;Misture os ingredientes secos&#10;Adicione os ovos e bata bem&#10;Digite cada passo em uma linha separada"></textarea>

        <label>Dicas Adicionais (Opcional)</label>
        <textarea v-model="tipsInput" placeholder="Compartilhe dicas úteis, uma por linha&#10;Ex:&#10;Use ingredientes em temperatura ambiente&#10;Pode ser congelado por até 3 meses&#10;Digite cada dica em uma linha separada"></textarea>

        <label>Upload de Imagem (Opcional)</label>
        <input type="file" accept="image/*" @change="onFileChange" />
        <small>Selecione um arquivo de imagem do seu computador (PNG/JPG). O upload converte a imagem para uma data URL.</small>

        <div v-if="form.image" style="margin:12px 0">
          <img :src="form.image" alt="Preview da imagem" style="max-width:100%;border-radius:12px;display:block" />
        </div>

        <label style="margin-top:8px">Ou URL da Imagem (Opcional)</label>
        <input v-model="form.image" placeholder="https://exemplo.com/imagem.jpg" />
        <small>Cole a URL de uma imagem da sua receita (ou use o upload acima).</small>

        <div style="margin-top:20px; display:flex; gap:12px; justify-content:flex-end">
          <button class="btn secondary" @click="cancel">Cancelar</button>
          <button class="btn" @click="submit">Enviar Receita</button>
        </div>
        <p style="font-size:12px; color:#666; margin-top:10px">* Campos obrigatórios</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import store from '../store'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { NavBar },
  setup(){
    const router = useRouter()
    const form = reactive({ title:'', time:30, category:'Almoço', difficulty:'Médio', rating:0, image:'', ingredients:[], steps:[], tips:[], views: 0, popular:false, comments:[] })
    const ingInput = ref('')
    const stepsInput = ref('')
    const tipsInput = ref('')

    // Lê o arquivo selecionado e converte para data URL (base64) para armazenar em form.image
    function onFileChange(e){
      const file = e && e.target && e.target.files && e.target.files[0]
      if(!file) return
      const reader = new FileReader()
      reader.onload = () => {
        form.image = reader.result
      }
      reader.readAsDataURL(file)
    }

    function submit(){
      if (!form.title || !form.category || !form.time || !form.difficulty || !ingInput.value || !stepsInput.value) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return
      }
      const ingr = ingInput.value.split('\n').map(s=>s.trim()).filter(Boolean)
      const stps = stepsInput.value.split('\n').map(s=>s.trim()).filter(Boolean)
      const tips = tipsInput.value ? tipsInput.value.split('\n').map(s=>s.trim()).filter(Boolean) : []
      const r = { ...form, ingredients:ingr, steps:stps, tips, views: 0, popular:false }
      store.addRecipe(r)
      router.push('/')
    }

    function cancel(){
      router.push('/')
    }

    return {
      form,
      ingInput,
      stepsInput,
      tipsInput,
      onFileChange,
      submit,
      cancel
    }
  }
}
</script>
