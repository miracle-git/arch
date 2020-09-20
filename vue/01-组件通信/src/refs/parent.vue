<template>
  <fragment>
    <h3>父组件</h3>
    <button @click="$refs.child.send()">发送消息到子组件</button>
    <child ref="child"/>
  </fragment>
</template>

<script>
  import Child from './child'

  export default {
    name: 'parent',
    components: {
      Child
    }
  }
</script>
