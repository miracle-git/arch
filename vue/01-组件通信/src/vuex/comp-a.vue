<template>
  <fragment>
    <h3>A组件</h3>
    <span>收到来自B组件通过vuex传递的消息: {{msg}}</span>
  </fragment>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'vuex',
    computed: {
      ...mapState(['msg'])
    }
  }
</script>
