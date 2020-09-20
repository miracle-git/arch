<template>
  <fragment>
    <comp-a/>
    <comp-b/>
    <button @click="send">发送消息到子组件</button>
  </fragment>
</template>

<script>
  import CompA from './comp-a'
  import CompB from './comp-b'

  export default {
    name: 'root-parent-children',
    methods: {
      send() {
        this.$children.forEach(item => item.receive && item.receive())
      }
    },
    components: {
      CompA,
      CompB
    }
  }
</script>
