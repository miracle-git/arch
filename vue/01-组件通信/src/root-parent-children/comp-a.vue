<template>
  <fragment>
    <h3>A组件</h3>
    <span>收到来自B组件通过$parent.$emit传递的消息: {{msg}}</span>
  </fragment>
</template>

<script>
  export default {
    name: 'comp-a',
    created() {
      this.$parent.$on('msg', res => this.msg = res)
    },
    data() {
      return {
        msg: ''
      }
    }
  }
</script>
