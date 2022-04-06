<template>
    <div class="recipe">
        <div class="card">
            <div class="card-image">
                <figure class ="image is-square">
                    <img :src="recipe.image" alt="Placeholder image"/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media-content">
                    <p class="title is-4">{{ recipe.title }}</p>
                    <router-link :to ="{ name: 'Details', params: {id: recipe.id, name: recipe.title} }" tag="button" > Recipes step </router-link>
                </div>   
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Recipe",
    props: {
        recipe: {}
    },
}

</script>
<style scoped>
.recipe {
    padding : 10px;
}
.image.is-square {
    padding-top : 50%;
}
</style>
