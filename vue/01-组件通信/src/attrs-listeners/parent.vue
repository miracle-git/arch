<template>
  <fragment>
    <h3>父组件</h3>
    <span>处理状态: {{msg}}</span>
    <child :msg="msg" name="miracle" @click="handleClick"/>
  </fragment>
</template>

<script>
  import Child from './child'

  export default {
    name: 'parent',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      handleClick() {
        this.msg = '已处理子组件事件...'
      }
    },
    components: {
      Child
    }
  }
</script>
