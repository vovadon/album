<template>
  <div class="list">
    <div >
      <p>Список альбомов</p>
      <ol>
        <li v-for="album in albumList">
          <router-link :to="{ name: 'album', params: { id: album.id, title: album.title }}">{{album.title}}</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'list',
  props: {
    authenticated: Boolean,
  },
  data() {
    return {
      limit: 15,
      albumList: [],
    }
  },
  methods: {
    
  },
  created() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
    axios.get('https://jsonplaceholder.typicode.com/albums?_limit=' + this.limit)
      .then(res => this.albumList = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>
p {
  text-align: center;
  margin: 15px 0;
  color: #222;
  font-size: 20px;
}

ol {
  margin: 0;
  text-decoration: none;
  color: #222;
  list-style-position: inside;
}

ol a {
  text-decoration: none;
  color: #222;
}

ol li {
  padding: 7px 12px 8px;
  border: 1px solid #e1e5eb;
  border-bottom: none;
}

ol li:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

ol li:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: 1px solid #e1e5eb;
}

ol li:hover {
  background-color: #e1e5eb;
}

ol li:hover a {
  color: #1457c4;
}

.list {
display: flex;
justify-content: center;
min-height: calc(100% - 58px);
background-color: #fafafa;
}

.list div {
  display: inline-block;
}
</style>