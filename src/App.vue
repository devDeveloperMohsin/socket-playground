<script setup>
import Navbar from './components/Navbar.vue';
import SocketContainer from './components/SocketContainer.vue';
import { ref, onMounted } from "vue";

// Reinitializes the components every time when app is mounted
// Doc: https://preline.co/docs/frameworks-vuejs.html
// Ensure Preline's methods are initialized
onMounted(() => {
  setTimeout(() => {
    if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
      window.HSStaticMethods.autoInit();
    }
  }, 100);
});

// States
const socketContainers = ref([Date.now() + 1]);

function addSocketContainer() {
  socketContainers.value.push({ id: Date.now() + 1 });
}

function closeSocketContainer(id) {
  socketContainers.value = socketContainers.value.filter(cont => cont.id !== id);
}
</script>

<template>
  <Navbar />
  <SocketContainer v-for="socketContainer in socketContainers" :key="socketContainer.id"
    :socketContainerId="socketContainer.id" @closeSocketContainer="closeSocketContainer" />

  <div class="container my-10">
    <button @click="addSocketContainer"
      class="bg-white w-full text-center p-5 border-4 font-semibold border-solid border-gray-50 hover:border-red-500 hover:text-red-500 dark:bg-neutral-800 dark:text-white dark:border-neutral-800">
      + Connect to new socket
    </button>
  </div>

</template>