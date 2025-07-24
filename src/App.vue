<template>
  <div>
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
  export default {
    components: {
      TheHeader
    },
    created() {
      this.$store.dispatch('tryLogin');
    },
    computed: {
      didAutoLogout() {
        return this.$store.getters.didAutoLogout;
      }
    },
    watch: {
      didAutoLogout(curValue, oldValue) {
        if (curValue && curValue !== oldValue) {
          this.$router.replace('/coaches');
        }
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  * {
    box-sizing: border-box;
  }
  html {
    font-family: "Roboto", sans-serif;
  }
  body {
    margin: 0
  }

  .route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }

  .route-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .route-enter-active {
    transition: all 0.3s ease-out;
  }

  .route-leave-active {
     transition: all 0.3s ease-in;
  }

  .route-enter-to,
  .route-leave-from {
    opacity: 1;
    transform: translateY((0));
  }
</style>