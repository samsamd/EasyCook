import axios from "axios";

export default {
    /**
     * méthode faisant appel à l'api pour récupérer une recette aléatoire
     * @returns une réponse contenant la recette aléatoire
     */
    async getRandomRecipe() {
        try {
            return await axios
          .get("https://api.spoonacular.com/recipes/random?number=1&apiKey=6523e06f5bcf4f019029724b4e55407f");
          } catch (e) {
            console.error('Erreur lors de la récupération de la recette aléatoire du à l erreur suivante : ',e);
          }        
    },

    /**
     * méthode faisant appel à l'api pour récupérer les recettes suite à une recherche via des filtres sur la localité et le régime
     * @param  location 
     * @param diet 
     * @returns une réponse contenant l'ensemble des recettes
     */
    async searchRecipe(location, diet) {
        try {
            return await axios
          .get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${location}&diet=${diet}&apiKey=6523e06f5bcf4f019029724b4e55407f`);
          } catch (e) {
            console.error('Erreur lors de la récupération de la recette aléatoire du à l erreur suivante : ',e);
          }
    },

    /**
     * Méthode permettant d'appeler l'api pour retourner les détails d'une recette via son id 
     * @param  idRecipe 
     * @returns une réponse contenant les détails de la recette
     */
    async getDetails(idRecipe) {
        const url = "https://api.spoonacular.com/recipes/" + idRecipe + "/analyzedInstructions?apiKey=6523e06f5bcf4f019029724b4e55407f";
        try {
            return await axios
            .get(url);
        }
        catch (e) {
        console.error('Erreur lors de la récupération des instructions : ',e);
        }
    }
}