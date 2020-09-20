<template>
  <child/>
</template>

<script>
  import Child from './child'

  export default {
    name: 'parent',
    components: {
      Child
    }
  }
</script>
