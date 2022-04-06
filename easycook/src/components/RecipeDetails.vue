<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Recipes details <br> {{this.name}}
        </h1>
        <div v-for="details in recipeDetails" :key="details.name">
            <div class="columns is-multiline" >
                <div class="card column is-half-tablet is-one-third-desktop is-one-quarter-widescreen" v-for="step in details.steps" :key="step.number">
                    <div class="card-content">
                       <p class="subtitle"> Step number {{step.number}} </p>
                        <p class="is-italic"> Ingredients : </p>
                        <p v-for="ingredient in step.ingredients" :key="ingredient.id">
                            {{ingredient.name}}
                        </p>
                         <p class="is-italic"> Equipments : <br> </p>
                        <p v-for ="e in step.equipment" :key="e.id">
                            {{e.name}}
                        </p>
                        <p class="is-italic"> Instructions : <br> </p>
                        <p> {{step.step}} </p>
                        <button @click="speak(step.step)">Read the instructions</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import service from "../services/easyCookServices"
import {TextToSpeech} from '@capacitor-community/text-to-speech'
export default {
    name: "RecipeDetails",
    props: {
        id: String,
        name: String
    },
    data() {
        return {
            recipeDetails: new Array()
        }     
    },
    mounted() {
        service.getDetails(this.id).then((response => this.recipeDetails = response.data));
        console.log(service.getDetails(this.id));
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
