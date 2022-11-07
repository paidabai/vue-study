<template>
  <ul class="todo-main">
    <MyBodyItem v-for="item in todoList" :item="item" :key="item.id" :changeDone="changeDone" :deleteItem="deleteItem"/>
  </ul>
</template>

<script>
import MyBodyItem from "./MyBodyItem.vue";

export default {
  name: "MyBody",

  props:['todoList', 'changeDone', 'deleteItem'],

  components: {
    MyBodyItem
  },

}
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

</style>