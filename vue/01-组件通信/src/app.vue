<template>
  <div id="app">
    <h2>组件通信</h2>
    <hr>
    <ul class="links">
      <li><router-link to="/props-emit">Props & Emit</router-link>(父子组件)</li>
      <li><router-link to="/event-bus">Event Bus</router-link>(任意组件)</li>
      <li><router-link to="/vuex">Vuex</router-link>(任意组件)</li>
      <li><router-link to="/refs">Refs</router-link>(父子组件)</li>
      <li><router-link to="/parent-children">Parent & Children</router-link>(兄弟组件)</li>
      <li><router-link to="/attrs-listeners">Attrs & Listeners</router-link>(父子组件)</li>
      <li><router-link to="/provide-inject">Provide & Inject</router-link>(隔代组件)</li>
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
