<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Recherche de recettes
        </h1> 
        <div class ="columns">
          Localité : 
          <select v-model="locationSelected">
            <option disabled value="">Choisissez une localité</option>
            <option v-for="location in locationFilter" v-bind:key="location" v-bind:value="location" >
              {{location}}
            </option>
          </select>
          <button @click="loadRecipesWithFilter(locationSelected)">
            Rechercher
          </button> 
        </div>
        <div>
          <div class = "columns is-multiline">
            <Recipe 
            v-for="recipe in recipes"
            :key="recipe.idMeal" 
            class = "column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
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
  name : "ResearchRecipe",
  components : {
    Recipe
  },
  data () {
    return {
      recipes : new Array(),
      locationFilter: ['american','african','european','french','greek','german','indian','italian','japanese'],
      locationSelected : ''
    }
  },
  methods: {
    async loadRecipesWithFilter(locationSelected){
      try {
        const response = await axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${locationSelected}&apiKey=6523e06f5bcf4f019029724b4e55407f`);
      this.recipes = response.data.results;
      console.log(this.recipes);
      } catch (e) {
        console.error('Erreur lors de la récupération de la recette aléatoire du à l erreur suivante : ',e);
      }
    }
  }
}
</script>
