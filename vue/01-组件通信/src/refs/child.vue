<template>
  <fragment>
    <h3>子组件</h3>
    <p>收到来自父组件通过refs传递的消息：{{msg}}</p>
  </fragment>
</template>

<script>
  export default {
    name: 'child',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      send() {
        this.msg = '收到来自父组件的消息了...'
      }
    }
  }
</script>
