<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div v-if="wallet?.address">
      {{ wallet?.address }}
    </div>
    <BlockNumber v-else />
  </div>
</template>

<script setup lang="ts">
const wallet = useUniSatWallet();
</script>
