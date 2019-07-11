<template>
  <div id="app">
    <Header @authenticated="setAuthenticated" v-if="authenticated" />
    <router-view 
      @authenticated="setAuthenticated"
      @add-fav="addFavorite"
      @del-fav="delFavorite"
      v-bind:authenticated="authenticated"
      v-bind:favList="favorite" />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      favorite: [],
      authenticated: false,
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login" });
    }

    if (localStorage.getItem('favorite')) {
      try {
        let obj = JSON.parse(localStorage.getItem('favorite'));
        this.favorite = Object.values(obj);
      }
      catch(e) {
        localStorage.removeItem('favorite');
      }
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
      if (!this.authenticated) {
        this.$router.replace({ name: "login" });
      }
    },
    addFavorite(item) {
      this.favorite.push(item);
      this.saveElement();
      // console.log(this.favorite);
    },
    delFavorite(id) {
      this.favorite = this.favorite.filter(fav => fav.id !== id);
      this.saveElement();
    },
    saveElement() {
      const parsed = JSON.stringify(this.favorite);
      localStorage.setItem('favorite', parsed);
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  height: inherit;
}
</style>
