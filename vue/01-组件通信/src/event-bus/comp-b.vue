<template>
  <fragment>
    <h3>B组件</h3>
    <button @click="$bus.$emit('msg', 'hello a')">发送消息到A组件</button>
  </fragment>
</template>

<script>
  export default {
    name: 'comp-b'
  }
</script>
