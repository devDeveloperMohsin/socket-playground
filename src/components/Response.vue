<script setup>
import { defineProps, ref } from 'vue';
import TooltipContent from './TooltipContent.vue';
import { toastError, toastSuccess, alertError } from '../helpers/helpers';


// Props
const props = defineProps({
	message: String,
});


// States
const dataExpanded = ref(false);

/**
 * Toggle Expand the Response Data
 */
function toggleExpand() {
	dataExpanded.value = !dataExpanded.value;
}

/**
 * Copy the response to the clipboard
 */
 async function copyToClipboard() {
	if (!props.message) {
		toastError('No text to copy');
		return;
	}

	try {
		await navigator.clipboard.writeText(props.message);
		toastSuccess('Copied to clipboard');
	} catch (err) {
		toastError('Failed to copy');
	}
}
</script>

<template>
	<div class="w-full flex justify-between" :class="{ 'truncate': !dataExpanded }">
		<span class="me-3 flex-1 w-0" :class="{ 'truncate': !dataExpanded }">{{ message }}</span>

		<button type="button" @click="toggleExpand"
			class="hs-tooltip flex items-center gap-x-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 whitespace-nowrap dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">

			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				<path fill-rule="evenodd"
					d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10" />
			</svg>

			<TooltipContent title="Expand" />
		</button>

		<button type="button" @click="copyToClipboard"
			class="hs-tooltip ml-3 flex items-center gap-x-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 whitespace-nowrap dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">

			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				<path fill-rule="evenodd"
					d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
			</svg>

			<TooltipContent title="Copy" />
		</button>
	</div>
</template>
