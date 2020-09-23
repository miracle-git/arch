<template>
  <div id="app">
    <h2>Vuex</h2>
    <hr>
    <p><button @click="$store.commit('add')">Add Counter</button> {{$store.state.count}}</p>
    <p><button @click="$store.dispatch('addAsync')">Add Aysnc Counter</button> {{$store.state.count}}</p>
<!--    <p>Double Counter: {{$store.getters.doubleCount}}</p>-->
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
