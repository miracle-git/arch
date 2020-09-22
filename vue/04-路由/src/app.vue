<template>
  <div id="app">
    <h2>路由</h2>
    <hr>
    <ul class="links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
