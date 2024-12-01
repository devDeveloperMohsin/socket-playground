<script setup>
import { ref } from 'vue'
import Connection from './Connection.vue';
import TooltipContent from './TooltipContent.vue'
import { alertError, toastSuccess } from '../helpers/helpers';
import CodeEditor from "simple-code-editor";

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
</script>

<template>
	<section class="section my-10">
		<div class="container">
			<div class="p-4 bg-white dark:bg-neutral-800">
				<!-- Socket Container Title -->
				<div class="flex items-center py-2">
					<button @click="closeContainer" class="hs-tooltip">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-red-500"
							viewBox="0 0 16 16">
							<path
								d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
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
						Send to All
					</button>

				</div>
				<!-- End Input Field -->

				<!-- Connections Container -->
				<div class="flex overflow-x-auto space-x-5 pb-5">
					<Connection v-for="conn in connections" :key="conn.id" :id="conn.id" :displayNumber="conn.displayNumber"
						:websocketUrl="websocketUrl" @remove="removeConnection" />
					<div v-if="connections.length == 0" class="text-center w-full">
						<img src="/no-data.svg" alt="no connection created" class="h-64 inline" />
						<h3 class="text-2xl dark:text-white mt-10 text-red-500">No connection created</h3>
					</div>
				</div>
				<!-- End Connections Container -->
			</div>
		</div>
	</section>
</template>