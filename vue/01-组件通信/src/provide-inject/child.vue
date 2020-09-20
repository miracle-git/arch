<template>
  <fragment>
    <h3>子组件</h3>
    <p>收到来自隔代组件通过provide传递的消息：{{msg}}</p>
    <button @click="handle">发送消息到隔代组件</button>
  </fragment>
</template>

<script>
  export default {
    name: 'child',
    inject: ['msg', 'handle']
  }
</script>
