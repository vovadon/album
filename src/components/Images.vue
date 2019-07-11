<template>
  <ul class="grid">
    <li v-for="item in list">
      <div class="grid__figure">
        <img v-bind:src="item.thumbnailUrl" alt="">
        <div v-if="$route.name !== 'favorite'" @click="addFavorite($event, item)" class="msg">в избранное</div>
        <div v-else @click="$emit('del-fav', item.id)" class="msg">удалить</div>
        <div class="desc">{{item.title}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Images',
  data() {
    return {

    }
  },
  props: ["list"],
  methods: {
    addFavorite(ev, item) {
      ev.target.innerHTML = "добавлено!";
      this.$emit('add-fav', item);
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

div.desc {
  font-size: 12px;
  color: #454545;
}

.grid {
  display: grid;
  /*grid-auto-flow: column;*/
  /*grid-auto-columns: 90%;*/
  grid-auto-flow: initial;
  grid-template-columns: repeat(auto-fit, minmax(auto, 150px));
  justify-content: center;
  grid-gap: 18px;
  grid-row-gap: 15px;
  /*overflow-x: scroll;*/
  -webkit-overflow-scrolling: touch;
  padding: 15px 0;
}

.grid__figure {
  margin: 0;
  display: grid;
  grid-template-rows: 150px 1fr;
  grid-gap: 5px;

  position: relative;
}

.grid__figure img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.grid__figure img:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
}

img:hover +.msg {
  opacity: 1;
}

.msg {
  background-color: rgb(15, 15, 15, 0.5);
  position: absolute;
  color: #fff;
  opacity: 0;
  width: 100%;
  text-align: center;
  height: 20px;
  top: 130px;
}

.msg:hover {
  opacity: 1;
  cursor: pointer;
}
</style>