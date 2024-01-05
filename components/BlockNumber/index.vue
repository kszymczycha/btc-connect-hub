<template>
  <div class="flex flex-grow justify-center items-center">
    <p class="opacity-80 text-gray-500 text-3xl lg:text-5xl">
      BTC Block: {{ block }}
    </p>
  </div>
</template>

<script setup lang="ts">
const wallet = useUniSatWallet();
const {
  data: { value: block },
} = await useFetch("https://blockchain.info/q/getblockcount");
</script>
