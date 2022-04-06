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
          Home
        </router-link>
        
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Menus
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/random">
              Random recipe
            </router-link>
            <router-link class="navbar-item" to="/research">
              Recipes search
            </router-link>
            
            
            <hr class="navbar-divider" />
            <router-link class="navbar-item" to="/about">
              About
            </router-link>
            <a
              class="navbar-item"
              href="https://github.com/samsamd/EasyCook"
              target="github"
            >
              Source code
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div v-if="awake">
          <button @click="allowSleep()"> Keep the screen awake </button>
        </div>
        <div v-else>
          <button @click="keepAwake()"> Allow the screen to sleep </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {KeepAwake} from '@capacitor-community/keep-awake'
export default {
  name: "MenuView",
  data() {
    return {
      awake : false,
      mobileMenuActive: false,
    };
  },
  methods: {
    async keepAwake() {
      await KeepAwake.keepAwake();
      this.awake = true;
    },
    async allowSleep() {
      await KeepAwake.allowSleep();
      this.awake = false;
    }
  }
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