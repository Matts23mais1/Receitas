  import { reactive, computed } from 'vue'

const state = reactive({
  recipes: [
    // Exemplo de dados — você pode substituir com dados reais / API
    {
      id: 1,
      title: "Bolo de Chocolate Molhadinho",
      time: 60,
      difficulty: "Médio",
      category: "Sobremesa",
      views: 2100,
      popular: true,
      rating: 4.5,
      image: "https://recipesblob.oetker.com.br/assets/e289562a3d9948cbbcca4fedd989d79c/1272x764/bolo-de-chocolate-molhadinho-na-travessa.webp",
      ingredients: ["3 ovos","200g de chocolate meio amargo","100g de manteiga","200g de açúcar","1 xícara de farinha de trigo","1 colher de sopa de fermento","100ml de leite"],
      steps: ["Pré-aqueça o forno a 180°C","Derreta o chocolate com a manteiga","Bata os ovos com o açúcar até ficar cremoso","Misture os ingredientes secos","Incorpore a massa do chocolate","Asse por 35-40 minutos em forma untada"],
      comments: []
    },
    {
      id: 2,
      title: "Panquecas Americanas",
      time: 25,
      difficulty: "Fácil",
      category: "Café da Manhã",
      views: 1520,
      popular: true,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
      ingredients: ["2 xícaras de farinha de trigo","1 ovo","300ml de leite","2 colheres de sopa de açúcar","1 colher de chá de fermento","1 pitada de sal","2 colheres de sopa de manteiga derretida"],
      steps: ["Misture os ingredientes secos","Bata o ovo com o leite e a manteiga","Incorpore os líquidos aos secos","Aqueça uma frigideira antiaderente","Despeje pequenas porções da massa","Vire quando aparecerem bolhas na superfície"],
      comments: []
    },
    {
      id: 3,
      title: "Frango com Quiabo",
      time: 45,
      difficulty: "Médio",
      category: "Jantar",
      views: 1250,
      popular: false,
      rating: 4.8,
      image: "https://sabores-new.s3.amazonaws.com/public/2024/11/frango-com-quiabo-1.jpg",
      ingredients: ["500g de frango em cubos","300g de quiabo","1 cebola","2 tomates","2 dentes de alho","Óleo de cozinha","Sal e pimenta"],
      steps: ["Tempere o frango com sal e pimenta","Refogue o frango até dourar","Adicione cebola e alho picados","Incorpore os tomates picados","Adicione o quiabo lavado e cortado","Cozinhe até o quiabo ficar macio","Sirva com arroz"],
      comments: []
    },
    {
      id: 4,
      title: "Salada Caesar",
      time: 15,
      difficulty: "Fácil",
      category: "Salada",
      views: 980,
      popular: false,
      rating: 4.0,
      image: "https://receitadaboa.com.br/wp-content/uploads/2024/04/bottom_view_caesar_salad_oval_plate_dark_red_table-23000869-1.jpg",
      ingredients: ["1 alface romana","100g de peito de frango grelhado","50g de queijo parmesão","Croutons","Molho Caesar","Pimenta"],
      steps: ["Lave e rasgue a alface","Corte o frango em tiras","Rale o queijo parmesão","Misture tudo em uma tigela","Adicione os croutons","Tempere com molho Caesar"],
      comments: []
    },
    {
      id: 5,
      title: "Tacos Mexicanos",
      time: 35,
      difficulty: "Médio",
      category: "Jantar",
      views: 1450,
      popular: true,
      rating: 4.3,
      image: "https://static.itdg.com.br/images/640-440/763a97fad5636232d9ffe30955b44acf/347923-original.jpg",
      ingredients: ["500g de carne moída","8 tortillas de milho","1 cebola","2 tomates","Coentro fresco","Limão","Temperos mexicanos"],
      steps: ["Refogue a carne moída com cebola","Tempere com sal, cominho e páprica","Corte os tomates e cebola em cubos","Aqueça as tortillas","Monte os tacos","Decore com coentro e limão"],
      comments: []
    },
    {
      id: 6,
      title: "Smoothies",
      time: 5,
      difficulty: "Fácil",
      category: "Café da Manhã",
      views: 750,
      popular: false,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop",
      ingredients: ["200g de morangos frescos","200ml de leite","1 banana","2 colheres de sopa de mel","Gelo"],
      steps: ["Lave os morangos","Descasque a banana","Coloque tudo no liquidificador","Bata até ficar homogêneo","Adicione gelo se desejar","Sirva imediatamente"],
      comments: []
    },
    {
      id: 7,
      title: "Lasanha Bolonhesa",
      time: 90,
      difficulty: "Difícil",
      category: "Jantar",
      views: 2200,
      popular: true,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=400&fit=crop",
      ingredients: ["500g de carne moída","12 placas de lasanha","400g de molho de tomate","300g de queijo mussarela","200g de presunto","Molho branco","Cebola e alho"],
      steps: ["Prepare o molho bolonhesa refogando a carne","Cozinhe as placas de lasanha","Prepare o molho branco","Misture o molho bolonhesa com o branco","Monte camadas alternadas","Asse por 40 minutos a 180°C"],
      comments: []
    },
    {
      id: 8,
      title: "Brigadeiro Gourmet",
      time: 45,
      difficulty: "Médio",
      category: "Sobremesa",
      views: 1800,
      popular: true,
      rating: 4.7,
      image: "https://harald.com.br/wp-content/uploads/2020/04/briadeirogormet-melken-700x520-1.jpg",
      ingredients: ["1 lata de leite condensado","4 colheres de sopa de chocolate em pó","2 colheres de sopa de manteiga","Chocolate granulado","Creme de leite"],
      steps: ["Misture o leite condensado com o chocolate","Cozinhe em fogo baixo mexendo sempre","Adicione a manteiga","Cozinhe até desgrudar do fundo","Deixe esfriar","Enrole em bolinhas e passe no granulado"],
      comments: []
    },
    {
      id: 9,
      title: "Omelete de Queijo",
      time: 10,
      difficulty: "Fácil",
      category: "Café da Manhã",
      views: 620,
      popular: false,
      rating: 3.9,
      image: "https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1993-Omelete-de-pizza-mussarela-ore%CC%81gano-e-tomate.jpg",
      ingredients: ["3 ovos","50g de queijo mussarela","Sal","Pimenta","Manteiga","Ervas finas"],
      steps: ["Bata os ovos com sal e pimenta","Aqueça a manteiga na frigideira","Despeje os ovos batidos","Adicione o queijo ralado","Dobre ao meio","Sirva quente"],
      comments: []
    },
    {
      id: 10,
      title: "Risoto de Cogumelos",
      time: 40,
      difficulty: "Médio",
      category: "Jantar",
      views: 1350,
      popular: false,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=400&fit=crop",
      ingredients: ["300g de arroz arbóreo","200g de cogumelos variados","1 litro de caldo de legumes","1 cebola","100ml de vinho branco","50g de queijo parmesão","Manteiga"],
      steps: ["Refogue a cebola na manteiga","Adicione o arroz e toste","Despeje o vinho e deixe evaporar","Adicione caldo aos poucos mexendo sempre","Incorpore os cogumelos","Finalize com queijo parmesão"],
      comments: []
    },
    {
      id: 11,
      title: "Pudim de Leite",
      time: 70,
      difficulty: "Médio",
      category: "Sobremesa",
      views: 1650,
      popular: true,
      rating: 4.9,
      image: "data:image/jpeg;base64,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",
      ingredients: ["1 litro de leite","4 ovos","200g de açúcar","Essência de baunilha","Caramelo para untar"],
      steps: ["Prepare o caramelo derretendo o açúcar","Unte a forma com caramelo","Bata os ovos com o leite e açúcar","Coe a mistura","Asse em banho-maria por 1 hora","Deixe esfriar antes de desenformar"],
      comments: []
    },
    {
      id: 12,
      title: "Sushi Caseiro",
      time: 60,
      difficulty: "Difícil",
      category: "Jantar",
      views: 1950,
      popular: true,
      rating: 4.5,
      image: "https://www.albal.pt/portal/pics/Recetas/Sushi-Albal2_Teaser-738x595.jpg",
      ingredients: ["400g de arroz para sushi","Nori (folhas de algas)","200g de salmão fresco","Pepino","Abacate","Vinagre de arroz","Açúcar","Sal"],
      steps: ["Cozinhe o arroz e tempere com vinagre","Corte os ingredientes em tiras","Coloque o nori sobre a esteira","Espalhe o arroz deixando borda","Adicione os recheios","Enrole apertando bem","Corte em pedaços"],
      comments: []
    }
  ],
  favorites: []
})

export default {
  state,
  addFavorite(id) {
    if (!state.favorites.includes(id)) state.favorites.push(id)
  },
  removeFavorite(id) {
    const i = state.favorites.indexOf(id)
    if (i > -1) state.favorites.splice(i,1)
  },
  isFavorite(id) {
    return state.favorites.includes(id)
  },
  getRecipeById(id) {
    return state.recipes.find(r => r.id === Number(id))
  },
  addRecipe(recipe) {
    recipe.id = Date.now()
    state.recipes.unshift(recipe)
  },
  removeRecipe(id) {
    const index = state.recipes.findIndex(r => r.id === id)
    if (index > -1) {
      state.recipes.splice(index, 1)
    }
  },
  filteredRecipes(filters) {
    // filters: { q, category, time, difficulty, order }
    let arr = state.recipes.slice()
    if (filters.q) {
      const q = filters.q.toLowerCase()
      arr = arr.filter(r => r.title.toLowerCase().includes(q))
    }
    if (filters.category && filters.category !== 'Todas') {
      arr = arr.filter(r => r.category === filters.category)
    }
    if (filters.difficulty && filters.difficulty !== 'Todas') {
      arr = arr.filter(r => r.difficulty === filters.difficulty)
    }
    if (filters.time) {
      if (filters.time === 'Rápido') arr = arr.filter(r => r.time <= 30)
      else if (filters.time === 'Médio') arr = arr.filter(r => r.time > 30 && r.time <= 60)
      else if (filters.time === 'Longo') arr = arr.filter(r => r.time > 60)
    }
    if (filters.order === 'Popularidade') {
      arr.sort((a,b) => b.views - a.views)
    } else if (filters.order === 'Mais Recentes') {
      arr.sort((a,b) => b.id - a.id)
    }
    return arr
  },
  addComment(recipeId, comment) {
    const recipe = state.recipes.find(r => r.id === recipeId)
    if (recipe) {
      recipe.comments.push({ id: Date.now(), text: comment, date: new Date().toISOString() })
    }
  },
  rateRecipe(recipeId, rating) {
    const recipe = state.recipes.find(r => r.id === recipeId)
    if (recipe) {
      recipe.rating = rating
    }
  }
}
