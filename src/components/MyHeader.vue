<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todo" @keydown.enter="addTodo"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "MyHeader",

  props:['addTodoList'],

  data(){
    return {
      todo: ''
    }
  },

  methods: {
    addTodo(){
      if (!this.todo) {
        alert('请输入任务名称')
      } else {
        const todo = {id: nanoid(), todo: this.todo.trim(), done: false}
        this.addTodoList(todo)
        this.todo = ''
      }
    }
  }
}
</script>

<style scoped>
  .todo-header input {
    width: 45vw;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 0;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>