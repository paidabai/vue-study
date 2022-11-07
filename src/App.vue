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
      todoList: JSON.parse(localStorage.getItem('todoList')) || []
    }
  },
  components:{
    MyHeader,
    MyBody,
    MyFooter,
  },
  methods:{
    addTodoList(value) {
      this.todoList.forEach(item => {
        if (item.todo === value.todo) {
          alert('该任务已存在,请修改任务')
          throw ''
        }
      })
      try {
        this.todoList.unshift(value)
      } catch (err){}
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
    },

    editItem(value) {
      this.todoList.forEach(item => {
        item.todo === value ? item.isEdit = !item.isEdit : ''
      })
    }
  },
  watch: {
    todoList: {
      handler(newValue) {
        localStorage.setItem('todoList', JSON.stringify(newValue))
      },
      deep: true
    }
  },
  mounted() {
    this.$bus.$on('getEdit', this.editItem)
  }

}
</script>


<style scoped>
  #app {
    width: 45vw;
    margin: 0 auto;
  }
</style>
