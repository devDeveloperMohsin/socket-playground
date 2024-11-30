<script setup>
import { ref } from 'vue'
import Connection from './Connection.vue';
import Swal from 'sweetalert2'

// States
const websocketUrl = ref("");
const numberOfConnections = ref(1);
const broadcastCommand = ref("");
const connected = ref(false);

// Connect Method
function toggleConnection() {
	if (connected.value) {
		disconnect();
	}
	else {
		connect();
	}
}
function connect() {
	if (websocketUrl.value.trim() == "") {
		Swal.fire({
			title: 'Error!',
			text: 'Please enter the websocket connection URL',
			icon: 'error',
		});

		return;
	}

	connected.value = true;

	Swal.fire({
		toast: true,
		timer: 2000,
		timerProgressBar: true,
		position: "top-end",
		showConfirmButton: false,

		title: 'Success!',
		text: 'Connection established successfully',
		icon: 'success',
	})
}
// End Connect Method

// Disconnect
function disconnect() {
	websocketUrl.value = "";
	connected.value = false;
}
// End Disconnect
</script>

<template>
	<section class="section my-10">
		<div class="container">
			<h2 v-if="websocketUrl && connected"
				class="text-3xl bg-white text-indigo-500 dark:bg-neutral-800 inline-block px-4 py-2">{{ websocketUrl }}
			</h2>

			<div class="p-4 bg-white dark:bg-neutral-800">
				<!-- Input Field -->
				<div class="mb-7">
					<label class="block text-sm font-medium mb-2 dark:text-white">Enter the websocket
						URL</label>

					<div class="flex">
						<input type="text" v-model="websocketUrl" :disabled="connected"
							class="py-3 px-4 block w-full max-w-sm border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="ws:127.0.0.1:9501">

						<button @click="toggleConnection" type="button"
							class="ml-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
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

						<button type="button"
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

					<div class="flex">
						<input type="text" v-model="broadcastCommand"
							class="py-3 px-4 block w-full max-w-sm border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="Hello World">

						<button type="button"
							class="ml-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
							Send to All
						</button>
					</div>

				</div>
				<!-- End Input Field -->

				<!-- Connections Container -->
				<div class="flex overflow-x-auto space-x-5 pb-5">
					<Connection v-for="i in 10" />
				</div>
				<!-- End Connections Container -->
			</div>
		</div>
	</section>
</template>