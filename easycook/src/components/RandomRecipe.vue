<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Recette aléatoire
        </h1>
        <button>
          Générer une nouvelle recette
        </button>
        <div v-if="loading"> Chargement...</div>
        <div v-else>
          <Recipe 
          v-for="recipe in recipes"
          :key="recipe.idMeal" 
          :recipe="recipe"/>
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
    axios
      .get("https://api.spoonacular.com/recipes/random?number=1&apiKey=6523e06f5bcf4f019029724b4e55407f")
      .then((response) => {
        this.recipes = response.data.recipes
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => this.loading = false)
  },
};
</script>