<template>
  <fragment>
    <slot name="header"/>
    <slot/>
    <slot name="footer" :data="{author: 'miracle'}"/>
  </fragment>
</template>

<script>
  export default {
    name: 'layout'
  }
</script>
