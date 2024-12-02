<script setup>
import { ref } from 'vue'
import Connection from './Connection.vue';
import TooltipContent from './TooltipContent.vue'
import { alertError, toastSuccess, toastError } from '../helpers/helpers';
import hljs from 'highlight.js';
import CodeEditor from "simple-code-editor";
import { useStore } from '../stores/store';

// Get the Store
const store = useStore();

// Emit Events
const emit = defineEmits(['closeSocketContainer']);

// Props
const props = defineProps({
	socketContainerId: Number, // Unique ID for the Socket Container
});

// States
const websocketUrl = ref("wss://echo.websocket.org");
const numberOfConnections = ref(1);
const broadcastCommand = ref("");
const connected = ref(true);

const prevConnectionNumber = ref(0); // Store the Display Number of the Previous Connection
const connections = ref([]); // Stores the Connections Array

// Connect Method
function toggleConnection() {
	if (connected.value) {
		disconnect();
	}
	else {
		connect();
	}
}
// End Toogle Connection Method

// Connect Method
function connect() {
	if (websocketUrl.value.trim() == "") {
		alertError('Error!', 'Please enter the websocket connection URL')
		return;
	}

	connected.value = true;

	toastSuccess('Success', 'Successfully Connected!');
}
// End Connect Method

// Disconnect Method
function disconnect() {
	// Here Send the message to all Components to Disconnect

	websocketUrl.value = "";
	connected.value = false;

	prevConnectionNumber.value = 0;
	connections.value = [];
}
// End Disconnect Method

// Create Connections Method
function createConnections() {
	// Validate if connected to socket
	if (!connected.value) {
		alertError('Error!', 'Please enter the websocket URL you want to connect to');
		return;
	}

	// Validate number of connections
	if (numberOfConnections.value < 1) {
		alertError('Error!', 'Please enter how many connections you want to create. Minimum 1');
		return;
	}

	// Add connections to the array
	for (let i = 0; i < numberOfConnections.value; i++) {
		connections.value.push({ id: Date.now() + i, displayNumber: ++prevConnectionNumber.value });
	}
}
// End Create Connections Method

// Remove Connection Method
function removeConnection(id) {
	connections.value = connections.value.filter(conn => conn.id !== id);

	// If all connections are removed than reset the previous connection counter number (Display Number)
	if (connections.value.length == 0) {
		prevConnectionNumber.value = 0;
	}
}
// End Remove Connection Method

// Remove Connection Method
function closeContainer() {
	emit('closeSocketContainer', props.socketContainerId);
}
// End Remove Connection Method

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
	<section class="section my-10">
		<div class="container">
			<div class="p-4 bg-white dark:bg-neutral-800">
				<!-- Socket Container Title -->
				<div class="flex items-center py-2">
					<button @click="closeContainer"
						class="hs-tooltip ml-1 inline-flex justify-center items-center size-5 rounded-full bg-red-500 hover:bg-red-600 text-white dark:bg-red-500">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="shrink-0 size-4">
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>

						<TooltipContent title="Close the Connection" />
					</button>

					<h2 v-if="websocketUrl && connected" class="ml-3 text-3xl text-indigo-500 dark:bg-neutral-800">
						{{ websocketUrl }}
					</h2>
				</div>

				<!-- End Socket Container Title -->

				<!-- Input Field -->
				<div class="mb-7">
					<label class="block text-sm font-medium mb-2 dark:text-white">Enter the websocket
						URL</label>

					<div class="flex">
						<input type="text" v-model="websocketUrl" :disabled="connected"
							class="py-3 px-4 block w-full max-w-sm border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="ws:127.0.0.1:9501">

						<button @click="toggleConnection" type="button"
							class="ml-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
							:class="[connected ? 'bg-red-500 hover:bg-red-600 focus:bg-red-600' : 'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700']">

							<svg v-if="connected" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="shrink-0 size-4">
								<path d="m19 5 3-3" />
								<path d="m2 22 3-3" />
								<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
								<path d="M7.5 13.5 10 11" />
								<path d="M10.5 16.5 13 14" />
								<path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
							</svg>

							<svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="shrink-0 size-4">
								<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
								<path d="m2 22 3-3" />
								<path d="M7.5 13.5 10 11" />
								<path d="M10.5 16.5 13 14" />
								<path d="m18 3-4 4h6l-4 4" />
							</svg>
							{{ connected ? 'Disconnect' : 'Connect' }}
						</button>
					</div>

				</div>
				<!-- End Input Field -->

				<!-- Input Field -->
				<div class="mb-7">
					<label class="block text-sm font-medium mb-2 dark:text-white">Enter number of
						connections</label>

					<div class="flex">
						<input type="number" v-model="numberOfConnections" min="1"
							class="py-3 px-4 block w-full max-w-sm border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="e.g 4">

						<button type="button" @click="createConnections"
							class="ml-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="shrink-0 size-4">
								<path d="M5 12h14" />
								<path d="M12 5v14" />
							</svg>
							Create
						</button>
					</div>

				</div>
				<!-- End Input Field -->

				<!-- Input Field -->
				<div class="mb-7">
					<label class="block text-sm font-medium mb-2 dark:text-white">Enter message to be sent to
						all connections</label>

					<!-- Docs: https://simple-code-editor.vicuxd.com/ -->
					<CodeEditor v-model="broadcastCommand" width="100%" theme="mono-blue" :line-nums="true"
						:languages="[['plaintext', 'Plain Text'], ['json', 'JSON'], ['xml', 'XML']]">
					</CodeEditor>

					<button type="button"
						class="mt-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="shrink-0 size-4">
							<path
								d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
							<path d="m21.854 2.147-10.94 10.939" />
						</svg>
						Send to All
					</button>

					<button type="button" @click="saveCommand"
						class="ml-2 mt-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">

						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="shrink-0 size-4">
							<path
								d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
							<path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
							<path d="M7 3v4a1 1 0 0 0 1 1h7" />
						</svg>
						Save Command
					</button>

				</div>
				<!-- End Input Field -->

				<!-- Connections Container -->
				<div class="flex overflow-x-auto space-x-5 pb-5">
					<Connection v-for="conn in connections" :key="conn.id" :id="conn.id" :displayNumber="conn.displayNumber"
						:websocketUrl="websocketUrl" @remove="removeConnection" />
					<div v-if="connections.length == 0" class="text-center w-full">
						<img src="/no_data.svg" alt="no connection created" class="h-64 inline" />
						<h3 class="text-2xl mt-10 text-red-500">No connection created</h3>
					</div>
				</div>
				<!-- End Connections Container -->
			</div>
		</div>
	</section>
</template>