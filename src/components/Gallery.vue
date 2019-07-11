<template>
  <div class="wrapper">
    <div class="pagination">
      <button :disabled="pageNumber === 0" class="button" @click="prevPage">Назад</button>
      <p v-if="title !== undefined">Альбом: {{title}}</p>
      <p v-else>Избранное</p>
      <button :disabled="pageNumber >= pageCount - 1" class="button" @click="nextPage">Вперед</button>
    </div>
    <Images @del-fav="delFavHandler" @add-fav="addFavHandler" v-bind:list="paginatedData"/>
  </div>
</template>

<script>
import Images from './Images.vue';

export default {
  name: 'Gallery',
  components: {
    Images
  },
  props: {
    list: null,
    title: String
  },
  data() {
    return {
      pageNumber: 0,
      size: 12,
    }
  },
  methods: {
    addFavHandler(item) {
      this.$emit('add-fav', item);
    },
    delFavHandler(id) {
      this.$emit('del-fav', id);
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed:{
    pageCount(){
      let l = this.list.length,
          s = this.size;
      return Math.ceil(l/s);
    },
    paginatedData(){
      const start = this.pageNumber * this.size,
            end = start + this.size;
      return this.list.slice(start, end);
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 17px 0 17px;
}

.button {
  padding: 7px 12px 8px;
  text-align: center;
  color: #007bff;
  background-color: transparent;
  background-image: none;
  border: 1px solid #007bff;
  border-radius: 4px;
  transition: all 0.3s linear;
}

.button:hover {
  cursor: pointer;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

}

.button:disabled {
  color: #007bff;
  border: 1px solid #007bff;
  background-color: transparent;
  background-image: none;
  border-color: #007bff;
  opacity: .65;
  cursor: default;
}
</style>