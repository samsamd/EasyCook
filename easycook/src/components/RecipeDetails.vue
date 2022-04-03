<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Détails de la recette <br> {{this.name}}
        </h1>
        <div v-for="details in recipeDetails" :key="details.name">
            <div class="columns is-multiline" >
                <div class="card column is-half-tablet is-one-third-desktop is-one-quarter-widescreen" v-for="step in details.steps" :key="step.number">
                    <div class="card-content">
                       <p class="subtitle"> Etape numero {{step.number}} </p>
                        <p class="is-italic"> Ingredients : </p>
                        <p v-for="ingredient in step.ingredients" :key="ingredient.id">
                            {{ingredient.name}}
                        </p>
                         <p class="is-italic"> Equipements : <br> </p>
                        <p v-for ="e in step.equipment" :key="e.id">
                            {{e.name}}
                        </p>
                        <p class="is-italic"> Instructions : <br> </p>
                        <p> {{step.step}} </p>
                        <button @click="speak(step.step)">Lire les instructions</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import {TextToSpeech} from '@capacitor-community/text-to-speech'
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
    },
    methods : {
        async speak(step) {
            await TextToSpeech.speak({
                text: step,
            });
        }
    }
}
</script>
