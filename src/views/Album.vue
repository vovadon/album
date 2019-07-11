<template>
  <div class="album">
    <div class="container">
      <Gallery @add-fav="addFavHandler" v-bind:list="list" v-bind:title="title"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Gallery from '../components/Gallery.vue';

export default {
  name: 'album',
  props: {
    authenticated: Boolean,
  },
  components: {
    Gallery
  },
  data() {
    return {
      list: [],
      id: this.$route.params.id,
      title: this.$route.params.title
    }
  },
  created() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
    axios.get('https://jsonplaceholder.typicode.com/photos?albumId=' + this.id)
      .then(res => this.list = res.data)
      .catch(err => console.log(err));
  },
  methods: {
    addFavHandler(item) {
      this.$emit('add-fav', item);
    }
  }
}
</script>

<style scoped>
.album {
  background-color: #fafafa;
  min-height: calc(100% - 58px);
}

.container {
  width: 75%;
  margin: 0 auto;
}

p {
  display: inline-block;
  font-size: 18px;
  color: #333;
  margin: 0;
}
</style>