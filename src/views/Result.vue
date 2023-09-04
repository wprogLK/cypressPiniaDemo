<script setup lang="ts">
  import {useCounterStore} from "@/stores/counter";
  import router from "@/router";

  const store = useCounterStore();
</script>

<template>
  <p>Current stored value {{store.count}}.</p>
</template>

<style scoped>

</style>