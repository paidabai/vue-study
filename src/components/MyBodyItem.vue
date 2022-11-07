<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="getDone"/>
      <span v-show="!item.isEdit">{{item.todo}}</span>
      <input class="editInput" ref="edit" @focusout="modifyTodo" v-show="item.isEdit" type="text" v-model="item.todo">
    </label>
    <button class="btn btn-danger" @click="deleteNewItem">删除</button>
    <button v-show="!item.isEdit" class="btn btn-edit" @click="choseItem">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyBodyItem",
  props: ['item', 'changeDone', 'deleteItem'],
  methods:{
    getDone(){
      this.changeDone(this.item.todo)
    },

    deleteNewItem() {
      if (confirm('确认删除吗？')) this.deleteItem(this.item.todo)
    },

    choseItem(){
      if (this.item.hasOwnProperty('isEdit')){
        this.$bus.$emit('getEdit', this.item.todo)
      } else {
        this.$set(this.item, 'isEdit', true)
      }
      this.$nextTick(() => {
        this.$refs.edit.focus()
      })
    },

    modifyTodo(e) {
      this.$bus.$emit('getEdit', this.item.todo)
    },
  },
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li:hover {
    background-color: #dddddd;
  }

  li:hover .btn {
    display: block;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  button {
    margin-right: 5px;
  }

  .editInput {
    height: 21px;
    font-size: 16px;
    padding: 0;
    border: none;
    outline: none;
    border-radius: 5px;
  }
</style>