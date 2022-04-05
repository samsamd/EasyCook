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
//import axios from "axios";
import service from "../services/easyCookServices";
export default {
  name: "RandomRecipe",
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
      this.loading = true;
      this.recipes = (await service.getRandomRecipe()).data.recipes;
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