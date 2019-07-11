<template>
  <div class="header">
    <nav>
      <ul>
        <li v-bind:class="{'active':$route.name === 'list'}"><router-link to="list">Список альбомов</router-link></li>
        <li v-bind:class="{'active':$route.name === 'favorite'}"><router-link to="favorite">Избранное</router-link></li>
        <li><a href="#/login" v-on:click="$emit('authenticated', false)">Выход</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  height: 57px;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
}

nav {
  width: 75%;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
}

li {
  float: left;
  font-size: 17px;
}

li:last-child {
  float: right;
}

li a {
  display: block;
  color: #333;
  text-align: center;
  padding: 19px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #eee;
  border-bottom: none;
}

.active {
  background-color: #3498db;
  color: #fff;
}
</style>