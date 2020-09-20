<template>
  <fragment>
    <h3>子组件</h3>
    <p>收到来自父组件通过props传递的消息：{{msg}}</p>
    <button @click="$emit('msg', 'hello parent')">发送消息到父组件</button>
  </fragment>
</template>

<script>
  export default {
    name: 'child',
    props: {
      msg: String
    }
  }
</script>
