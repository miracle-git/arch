<template>
  <fragment>
    <h3>B组件</h3>
    <button @click="sendMessage('hello a')">发送消息到A组件</button>
  </fragment>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'comp-b',
    methods: {
      ...mapMutations(['sendMessage'])
    }
  }
</script>
