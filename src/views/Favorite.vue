<template>
  <div class="favorite">
    <div class="container">
      <Gallery @del-fav="delFavHandler" v-bind:list="favList"/>
    </div>
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue';

export default {
  name: 'favorite',
  components: {
    Gallery
  },
  props: {
    authenticated: Boolean,
    favList: null
  },
  methods: {
    delFavHandler(id) {
      this.$emit('del-fav', id);
    }
  },
  created() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
      // console.log(this.authenticated);
    }
  }
}
</script>

<style>
.favorite {
  background-color: #fafafa;
  min-height: calc(100% - 58px);
}

.container {
  width: 75%;
  margin: 0 auto;
  min-height: inherit;
}
</style>