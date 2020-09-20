<template>
  <fragment>
    <h3>隔代组件</h3>
    <span>处理状态: {{res}}</span>
    <parent/>
  </fragment>
</template>

<script>
  import Parent from './parent'

  export default {
    name: 'provide-inject',
    provide() {
      return {
        msg: this.msg,
        handle: this.handle
      }
    },
    data() {
      return {
        msg: 'hello child',
        res: ''
      }
    },
    methods: {
      handle() {
        this.res = '已处理子组件事件...'
      }
    },
    components: {
      Parent
    }
  }
</script>
