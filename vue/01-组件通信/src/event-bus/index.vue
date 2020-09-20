<template>
  <fragment>
    <comp-a/>
    <comp-b/>
  </fragment>
</template>

<script>
  import CompA from './comp-a'
  import CompB from './comp-b'

  export default {
    name: 'event-bus',
    components: {
      CompA,
      CompB
    }
  }
</script>
