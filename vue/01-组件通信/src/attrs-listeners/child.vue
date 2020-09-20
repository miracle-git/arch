<template>
  <fragment>
    <h3>子组件</h3>
    <p>收到来自父组件通过attrs传递的消息：{{$attrs.name}}</p>
    <button v-on="$listeners">响应父组件的事件</button>
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
