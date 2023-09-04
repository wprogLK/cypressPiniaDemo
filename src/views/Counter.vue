<script setup lang="ts">
  import {useCounterStore} from "@/stores/counter";
  import router from "@/router";

  const store = useCounterStore();

  function click(): void {
    store.increment();

    router.replace("/result")
  }
</script>

<template>
  <p>Current stored value {{store.count}}.</p>
  <button class="counterA__button" @click="click">Increase stored counter</button>
</template>

<style scoped>

</style>