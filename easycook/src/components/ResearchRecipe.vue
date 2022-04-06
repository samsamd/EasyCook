<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Recipes search
        </h1> 
        <div class ="columns is-multiline">
          <div class="selectCSS">
          Location : 
          <select v-model="locationSelected">
            <option disabled value="">Choose a location</option>
            <option v-for="location in locationFilter" v-bind:key="location" v-bind:value="location" >
              {{location}}
            </option>
          </select>
          </div>
          <div class="selectCSS">
          Diet : 
          <select v-model="dietSelected">
            <option disabled value="">Choose a diet</option>
            <option v-for="diet in dietFilter" v-bind:key="diet" v-bind:value="diet" >
              {{diet}}
            </option>
          </select>
          </div>
          <button @click="loadRecipesWithFilter(locationSelected,dietSelected)">
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
import service from "../services/easyCookServices"
export default {
  name : "ResearchRecipe",
  components : {
    Recipe
  },
  data () {
    return {
      recipes : new Array(),
      locationFilter: ['american','african','european','french','greek','german','indian','italian','japanese'],
      dietFilter: ['ketogenic','vegan','vegetarian'],
      dietSelected:'',
      locationSelected : ''
    }
  },
  methods: {
    async loadRecipesWithFilter(locationSelected,dietSelected){
      this.recipes = (await service.searchRecipe(locationSelected,dietSelected)).data.results;
    }
  }
}
</script>
<style scoped>
.selectCSS {
  margin-top: 10px;
  margin-right : 10px; 
}
</style>