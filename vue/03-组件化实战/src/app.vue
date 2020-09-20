<template>
  <div id="app">
    <m-form :model="user" :rules="rules" ref="form">
      <m-form-item label="用户名" prop="username">
        <m-input v-model="user.username" placeholder="请输入用户名"/>
      </m-form-item>
      <m-form-item label="密码" prop="password">
        <m-input v-model="user.password" placeholder="请输入密码" type="password"/>
      </m-form-item>
      <m-form-item>
        <button @click="login">登录</button>
      </m-form-item>
    </m-form>
  </div>
</template>

<script>
  import MForm from './form'
  import MFormItem from './form-item'
  import MInput from './input'

  export default {
    name: 'app',
    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        rules: {
          username: [{ required: true, message: '请输入用户名！' }],
          password: [{ required: true, message: '请输入密码！' }]
        }
      }
    },
    methods: {
      login() {
        this.$refs.form.validate(valid => {
          if (!valid) return false
          alert('submit')
        })
      }
    },
    components: {
      MForm,
      MFormItem,
      MInput
    }
  }
</script>
