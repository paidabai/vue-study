<template>
  <div id="app">
    <MyHeader :addTodoList="addTodoList"/>
    <MyBody :todoList="todoList" :changeDone="changeDone" :deleteItem="deleteItem"/>
    <MyFooter :todoList="todoList" :checkAll="checkAll" :cleanDone="cleanDone"/>
  </div>
</template>

<script>
import MyBody from "./components/MyBody.vue";
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: 'App',
  data() {
    return {
      todoList: [
        {id: '001', todo: '吃饭', done: true},
        {id: '002', todo: '睡觉', done: false},
        {id: '003', todo: '打豆豆', done: true},
      ]
    }
  },
  components:{
    MyHeader,
    MyBody,
    MyFooter,
  },
  methods:{
    addTodoList(value) {
      this.todoList.unshift(value)
    },

    changeDone(value) {
      this.todoList.forEach(item => {
        item.todo === value ? item.done = !item.done : item.done
      })
    },

    deleteItem(value) {
      this.todoList = this.todoList.filter(item => item.todo !== value)
    },

    checkAll(value) {
      this.todoList.forEach(item => {
        item.done = (!!value)
      })
    },

    cleanDone() {
      this.todoList = this.todoList.filter(item => item.done === false)
    }
  }
}
</script>


<style scoped>
  #app {
    width: 45vw;
    margin: 0 auto;
  }
</style>
