<script setup>
import { defineProps, defineEmits, ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import TooltipContent from './TooltipContent.vue';
import { toastError, toastSuccess, alertError } from '../helpers/helpers';
import CodeEditor from "simple-code-editor";

import { useStore } from '../stores/store';

// Get the Store
const store = useStore();

// Emit Events
const emit = defineEmits(['remove']);


// Props
const props = defineProps({
	id: Number, // Unique ID for the connection
	displayNumber: Number, // Display Number for the connection
	websocketUrl: String,
});


// States
const broadcastCommand = ref("");

// Reactive state for WebSocket
const state = reactive({
	websocket: null,
	messages: [], // Received messages
	status: 'disconnected', // WebSocket status: 'connected', 'disconnected', or 'error'
});

/**
 * Send a message to the WebSocket server.
 */
function sendMessage() {
	if (state.websocket && state.websocket.readyState === WebSocket.OPEN) {
		state.websocket.send(broadcastCommand.value);
		// broadcastCommand.value = ''; // Clear input after sending
	} else {
		toastError("WebSocket is not open.");
	}
}

/**
 * Close WebSocket connection and emit the remove event.
 */
function closeConnection() {
	if (state.websocket) {
		state.websocket.close();
	}

	emit('remove', props.id);
}

/**
 * Close WebSocket connection
 */
function disconnectConnection() {
	if (state.websocket) {
		state.websocket.close();
	}
}

/**
 * Initialize WebSocket connection.
 */
function initWebSocket() {
	if (!props.websocketUrl) {
		alertError("WebSocket URL is not provided.");
		return;
	}

	// Update status to connecting
	state.status = 'connecting';

	// Initialize WebSocket
	state.websocket = new WebSocket(props.websocketUrl);

	// Handle WebSocket open event
	state.websocket.addEventListener('open', () => {
		toastSuccess(`WebSocket connection established for ID: ${props.displayNumber}`);
		state.status = 'connected';
	});

	// Handle WebSocket message event
	state.websocket.addEventListener('message', (event) => {
		console.log("Message received:", event.data);
		state.messages.unshift(event.data); // Push to reactive messages array
	});

	// Handle WebSocket close event
	state.websocket.addEventListener('close', () => {
		toastSuccess(`WebSocket connection closed for ID: ${props.displayNumber}`);
		state.status = 'disconnected';
		state.websocket = null;
	});

	// Handle WebSocket error event
	state.websocket.addEventListener('error', (error) => {
		console.error("WebSocket error:", error);
		state.status = 'error';
	});
}

/**
 * Lifecycle Hooks
 */
onMounted(() => {
	initWebSocket();
});

onBeforeUnmount(() => {
	if (state.websocket) {
		state.websocket.close();
	}

	emit('remove', props.id);
});

// Save Command
function saveCommand() {
	if (broadcastCommand.value.trim() == "") {
		toastError('Please enter the message you want to save');
		return;
	}

	store.addMessage(broadcastCommand.value.trim());
	toastSuccess('Command message saved successfully');
}
// End Save Command
</script>

<template>
	<div class="bg-gray-50 dark:bg-neutral-900 p-4 rounded-md min-w-[500px] max-h-[700px] overflow-y-auto">
		<!-- Title -->
		<div class="flex justify-between items-center">
			<h3 class="text-2xl dark:text-white">Connection {{ displayNumber }}</h3>

			<!-- Status and Close Button -->
			<div class="flex items-center">
				<span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium capitalize" :class="{
					'conn-connecting': state.status === 'connecting',
					'conn-connected': state.status === 'connected',
					'conn-disconnected': state.status === 'disconnected',
					'conn-error': state.status === 'error'
				}">
					{{ state.status }}</span>


				<button v-if="state.status == 'connected'" @click="disconnectConnection"
					class="hs-tooltip ml-1 inline-flex justify-center items-center size-7 rounded-full bg-orange-500 hover:bg-orange-600 text-white dark:bg-orange-500">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="shrink-0 size-4">
						<path d="m19 5 3-3" />
						<path d="m2 22 3-3" />
						<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
						<path d="M7.5 13.5 10 11" />
						<path d="M10.5 16.5 13 14" />
						<path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
					</svg>

					<TooltipContent title="disconnect" />
				</button>

				<button v-if="state.status == 'disconnected'" @click="initWebSocket"
					class="hs-tooltip ml-1 inline-flex justify-center items-center size-7 rounded-full bg-green-500 hover:bg-green-600 text-white dark:bg-green-500">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="shrink-0 size-4">
						<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
						<path d="m2 22 3-3" />
						<path d="M7.5 13.5 10 11" />
						<path d="M10.5 16.5 13 14" />
						<path d="m18 3-4 4h6l-4 4" />
					</svg>

					<TooltipContent title="connect" />
				</button>

				<button @click="closeConnection"
					class="hs-tooltip ml-1 inline-flex justify-center items-center size-7 rounded-full bg-red-500 hover:bg-red-600 text-white dark:bg-red-500">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="shrink-0 size-4">
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>

					<TooltipContent title="disconnect and remove" />
				</button>
			</div>
			<!-- End: Status and Close Button -->
		</div>
		<!-- End Title -->

		<!-- Message Input -->
		<div class="mb-5">
			<label class="block text-sm font-medium mb-2 dark:text-white">Enter Message</label>

			<CodeEditor v-model="broadcastCommand" width="100%" theme="mono-blue" :line-nums="true"
				:languages="[['plaintext', 'Plain Text'], ['json', 'JSON'], ['xml', 'XML']]">
			</CodeEditor>

			<button type="button" @click="sendMessage"
				class="mt-3 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-4">
					<path
						d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
					<path d="m21.854 2.147-10.94 10.939" />
				</svg>
				Send
			</button>

			<button type="button" @click="saveCommand"
				class="ml-2 mt-3 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">

				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-4">
					<path
						d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
					<path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
					<path d="M7 3v4a1 1 0 0 0 1 1h7" />
				</svg>
				Save Command
			</button>
		</div>
		<!-- End Message Input -->

		<!-- Response/Output -->
		<div>
			<h4 class="text-xl dark:text-white">Received:</h4>

			<!-- List Group -->
			<ul class="flex flex-col justify-end text-start -space-y-px">
				<li v-for="(msg, index) in state.messages" :key="index"
					class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
					<div class="w-full flex justify-between truncate">
						<span class="me-3 flex-1 w-0 truncate">{{ msg }}</span>

						<button type="button"
							class="hs-tooltip flex items-center gap-x-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 whitespace-nowrap dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">

							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10" />
							</svg>

							<TooltipContent title="Expand" />
						</button>

						<button type="button"
							class="hs-tooltip ml-3 flex items-center gap-x-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 whitespace-nowrap dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">

							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
							</svg>

							<TooltipContent title="Copy" />
						</button>
					</div>
				</li>
			</ul>
			<!-- End List Group -->
		</div>
		<!-- End Response/Output -->
	</div>
</template>
