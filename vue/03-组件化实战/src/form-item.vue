<template>
  <div class="m-form-item">
    <label v-if="label">{{label}}</label>
    <slot/>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
  import Schema from 'async-validator'

  export default {
    name: 'm-form-item',
    componentName: 'm-form-item',
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    created() {
      this.$on('validate', this.validate)
    },
    data() {
      return {
        error: ''
      }
    },
    methods: {
      validate() {
        const { model, rules } = this.form
        const value = model[this.prop]
        const rule = rules[this.prop]
        const schema = new Schema({ [this.prop]: rule })
        return schema.validate({ [this.prop]: value }, errors => {
          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        })
      }
    }
  }
</script>
