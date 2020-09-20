<template>
  <fragment>
    <h3>父组件</h3>
    <span>收到来自子组件通过$emit传递的的消息: {{msg}}</span>
    <child msg="hello child" @msg="res => msg = res"/>
  </fragment>
</template>

<script>
  import Child from './child'

  export default {
    name: 'parent',
    data() {
      return {
        msg: ''
      }
    },
    components: {
      Child
    }
  }
</script>
