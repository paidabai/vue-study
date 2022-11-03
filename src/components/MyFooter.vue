<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allComplete" :style="isDisabled"/>
    </label>
    <span>
      <span>已完成{{complete}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clean">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",

  props: ['todoList', 'checkAll', 'cleanDone'],

  computed: {
    total() {
      return this.todoList.length
    },

    complete() {
      return this.todoList.reduce((previousValue, currentValue) => {
        return previousValue + (currentValue.done ? 1 : 0)
      },0)
    },

    allComplete: {
      get() {
          return this.total === this.complete && this.total > 0
      },

      set(value) {
        this.checkAll(value)
      }
    },

    isDisabled() {
      return this.total === 0 ? 'display: none' : ''
    }
  },

  methods: {
    clean() {
      this.cleanDone()
    }
  }
}
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>