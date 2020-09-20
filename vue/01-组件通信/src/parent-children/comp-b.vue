<template>
  <fragment>
    <h3>B组件</h3>
    <p>{{msg}}</p>
    <button @click="$parent.$emit('msg', 'hello a')">发送消息到A组件</button>
    <br><br>
  </fragment>
</template>

<script>
  export default {
    name: 'comp-b',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      receive() {
        this.msg = '收到来自父组件的消息了...'
      }
    }
  }
</script>
