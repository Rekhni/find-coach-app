<template>
    <header>
         <nav>
            <h1 class="header-title">
                <router-link class="logo" to="/">Find a Coach</router-link>
            </h1>
            <ul>
                <li>
                     <router-link class="nav-link" to="/">All Coaches</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link class="nav-link" to="/requests">Requests</router-link>
                </li>
                <li v-else>
                  <router-link class="nav-link" to="/auth">Login</router-link>
                </li>
                <li v-if="isLoggedIn">
                  <base-button @click="logout">Logout</base-button>
                </li>
            </ul>
         </nav>
    </header>
</template>

<script>
  export default {
    computed: {
      isLoggedIn() {
        return this.$store.getters.isAuthenticated;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.replace('/auth');
      }
    }
  }
</script>

<style scoped>
header {
  height: 5rem;
  background-color: rgb(33, 23, 83);
  width: 100%;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

.logo {
    text-decoration: none;
}

.nav-link {
  text-decoration: none;
  color: #caa4ff;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding: 10px;

}

.nav-link:hover,
.nav-link:active,
.nav-link.router-link-active {
  border: 1px solid #9567d4;
}

.header-title {
  margin: 0 40px;
}

.header-title a {
    color: white;
}

</style>