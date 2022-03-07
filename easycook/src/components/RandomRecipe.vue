<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Recette aléatoire
        </h1>
        <button @click="loadRandom">
          Générer une nouvelle recette
        </button>
        <div v-if="loading"> Chargement...</div>
        <div v-else>
          <div class="card-random">
            <Recipe 
            v-for="recipe in recipes"
            :key="recipe.idMeal" 
            :recipe="recipe"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Recipe from "./Recipe.vue";
import axios from "axios";

export default {
  name: "AboutPage",
  components: {
    Recipe
  },
  data() {
    return {
      recipes: new Array(),
      loading: true,
    }
  },
  mounted() {
   this.loadRandom()
  },
  methods: {
    async loadRandom() {

      this.loading = false;
      try {
        const response = await axios
      .get("https://api.spoonacular.com/recipes/random?number=1&apiKey=6523e06f5bcf4f019029724b4e55407f");
      console.error(response);
      this.recipes = response.data.recipes;
      } catch (e) {
        console.error(e);
      }
      console.error(this.recipes);
      this.loading = false;
    }
  }
};
</script>
<style scoped>
.card-random {
    max-width: 50%;
    margin-left: 25%;
}
</style>