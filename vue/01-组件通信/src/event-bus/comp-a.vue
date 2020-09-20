<template>
  <fragment>
    <h3>A组件</h3>
    <span>收到来自B组件通过$bus.$emit的消息: {{msg}}</span>
  </fragment>
</template>

<script>
  export default {
    name: 'comp-a',
    created() {
      this.$bus.$on('msg', res => this.msg = res)
    },
    data() {
      return {
        msg: ''
      }
    }
  }
</script>
