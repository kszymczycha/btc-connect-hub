<template>
  <div class="p-4 flex justify-between place-items-center shadow-md">
    <IconBtc class="mr-1" />
    <h1 class="mr-auto">BTC ConnectHub</h1>
    <div
      v-if="uniSatWallet?.shortAddress"
      class="ml-auto mr-4 flex items-center"
    >
      <IconCopy class="cursor-pointer" />
      <div class="ml-1">{{ uniSatWallet?.shortAddress }}</div>
    </div>
    <button
      v-if="uniSatWallet?.address"
      class="p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded"
      @click="handleDisconnectWallet"
    >
      Disonnect Wallet
    </button>
    <button
      v-else
      class="p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded"
      @click="handleConnectWallet"
    >
      Connect Wallet
    </button>
  </div>
</template>

<script setup lang="ts">
let uniSatWallet = useUniSatWallet();

onMounted(async () => {
  console.log("on mounted top 1  ");

  if (walletIsInstalled()) {
    const [address] = await window.unisat.getAccounts();
    setAddress(address);
  }

  console.log("on mounted top 2");
});

const walletIsInstalled = (): boolean => {
  return typeof unisat !== "undefined";
};

const handleDisconnectWallet = () => {
  console.log("Disconnect wallet");
};

const setAddress = (addr: string): void => {
  uniSatWallet.value.address = addr;
  uniSatWallet.value.shortAddress = shortAddress(addr);
};

const shortAddress = (address: string): string => {
  const start = address.slice(0, 4);
  const end = address.slice(-4);
  return `${start}...${end}`;
};

const handleConnectWallet = async () => {
  if (walletIsInstalled()) {
    const unisat = (window as any).unisat;
    const [address] = await unisat.requestAccounts();
    setAddress(address);
  } else {
    alert("UniSat Wallet is not installed!");
  }
};
</script>
