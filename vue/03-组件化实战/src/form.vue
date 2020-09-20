<template>
  <div class="m-form">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'm-form',
    provide() {
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: {
        type: Object
      }
    },
    methods: {
      validate(callback) {
        const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
        Promise.all(tasks).then(() => callback(true)).catch(() => callback(false))
      }
    }
  }
</script>
