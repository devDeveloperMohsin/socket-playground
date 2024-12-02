<script setup>
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3'
import { useStore } from './../stores/store';
import { toastSuccess, toastError } from '../helpers/helpers';
import TooltipContent from './TooltipContent.vue';

const store = useStore();
const { toClipboard } = useClipboard()

const copyingIndex = ref(null);

const copyMessage = async (index) => {
  try {
    copyingIndex.value = index;
    await toClipboard(store.messages[index]);

    toastSuccess('Copied to clipboard');
  } catch (e) {
    toastError('Oops: Failed to copy');
    console.error(e);
  } finally {
    setTimeout(() => {
      copyingIndex.value = null; // Reset the active index
    }, 500);
  }
}
</script>

<template>
  <ul class="flex flex-col">
    <li v-for="(msg, i) in store.messages" :key="i"
      class="inline-flex gap-x-3.5 py-3 px-4 text-sm font-medium bg-white text-gray-800 -mt-px even:bg-gray-100 even:rounded-md first:mt-0 dark:bg-neutral-800 even:dark:bg-neutral-900 dark:text-white">

      <div class="flex">
        <!-- Delete Button -->
        <button @click="() => store.removeMessage(i)" class="hs-tooltip">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="shrink-0 size-4 text-red-500">
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>

          <TooltipContent title="Remove" />
        </button>
        <!-- End Delete Button -->

        <!-- Copy Button -->
        <button class="hs-tooltip ml-2" @click="() => copyMessage(i)">
          <svg v-if="copyingIndex == i" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="shrink-0 size-4 text-green-700">
            <path d="m12 15 2 2 4-4" />
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>

          <svg v-else="coping" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="shrink-0 size-4">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>

          <TooltipContent :title="copyingIndex == i ? 'Copying' : 'Copy'" />
        </button>
        <!-- End Copy Button -->
      </div>

      {{ msg }}
    </li>
  </ul>
</template>