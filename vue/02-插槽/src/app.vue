<template>
  <div id="app">
    <layout>
      <template v-slot:header>
        <h2>Vue插槽</h2>
      </template>
      <template>
        <div class="content">
          插槽分为默认插槽、具名插槽、作用域插槽。
        </div>
      </template>
      <template v-slot:footer="{data}">
        <p>版权归{{data.author}}所有。</p>
      </template>
    </layout>
  </div>
</template>

<script>
  import Layout from './layout'

  export default {
    name: 'app',
    components: {
      Layout
    }
  }
</script>
