<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="getDone"/>
      <span ref="item">{{item.todo}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteNewItem">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyBodyItem",
  props: ['item', 'changeDone', 'deleteItem'],
  methods:{
    getDone(){
      this.changeDone(this.$refs.item.innerText)
    },

    deleteNewItem() {
      this.deleteItem(this.$refs.item.innerText)
    }
  }
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
</style>