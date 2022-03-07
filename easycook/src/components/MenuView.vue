<template>
  <nav class="navbar box" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/">
        <img
          class="navbar-brand-img"
          src="../assets/logo-easy-cook.png"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': mobileMenuActive }"
        @click="mobileMenuActive = !mobileMenuActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': mobileMenuActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Accueil
        </router-link>
        
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Menus
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/random">
              Recette aléatoire
            </router-link>
            <router-link class="navbar-item" to="/research">
              Recherche recettes
            </router-link>
            
            
            <hr class="navbar-divider" />
            <router-link class="navbar-item" to="/about">
              A propos
            </router-link>
            <a
              class="navbar-item"
              href="https://github.com/samsamd/EasyCook"
              target="github"
            >
              Voir le code source
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item copyright">
          Created by Univ-Nantes &copy;
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {
      mobileMenuActive: false,
    };
  },
};
</script>

<style scoped>
.navbar {
  height: 70px;
}
.navbar-brand-img {
  margin-left: 10px;
  height: 50px;
  width: 60px;
}

.router-link-active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: green;
}
</style>