<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Détails de la recette <br> {{this.name}}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
    name: "RecipeDetails",
    props: {
        id: Number,
        name: String
    },
    data() {
        return {
            recipeDetails: new Array()
        }     
    },
    mounted() {
        const url = "https://api.spoonacular.com/recipes/" + this.id + "/analyzedInstructions?apiKey=6523e06f5bcf4f019029724b4e55407f";
        axios
        .get(url)
        .then((response) => {
            this.recipeDetails = response.data
        })
        .catch ((e) => {
        console.error('Erreur lors de la récupération des instructions : ',e);
        })
    }
}
</script>
