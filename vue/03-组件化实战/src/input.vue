<template>
  <div class="m-input">
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs"/>
  </div>
</template>

<script>
  import emitter from '../mixins/emitter'

  export default {
    name: 'm-input',
    mixins: [emitter],
    inheritAttrs: false,
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)
        this.dispatch('m-form-item', 'validate')
      }
    }
  }
</script>
