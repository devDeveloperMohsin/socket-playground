<template>
  <Navbar />
  <SocketContainer />

</template>

<script setup>
import Navbar from './components/Navbar.vue';
import SocketContainer from './components/SocketContainer.vue';
import { ref, onMounted } from "vue";

const wsServer = "ws://0.0.0.0:9501";

const numConnections = ref(0);
const connections = ref([]);
const broadcastMessage = ref("");
const savedCommands = ref([]);

const createConnections = () => {
  connections.value = [];
  for (let i = 0; i < numConnections.value; i++) {
    const websocket = new WebSocket(wsServer);

    const connection = {
      websocket,
      status: "Connecting...",
      statusClass: "badge bg-warning",
      message: "",
      messages: [],
    };

    websocket.onopen = () => {
      connection.status = "Connected";
      connection.statusClass = "badge bg-success";
    };

    websocket.onclose = () => {
      connection.status = "Disconnected";
      connection.statusClass = "badge bg-danger";
    };

    websocket.onmessage = (evt) => {
      connection.messages.unshift(evt.data);
    };

    websocket.onerror = () => {
      connection.status = "Error";
      connection.statusClass = "badge bg-danger";
    };

    connections.value.push(connection);
  }
};

const sendMessage = (index) => {
  const message = connections.value[index].message;
  if (message) {
    connections.value[index].websocket.send(message);
  }
};

const broadcastMessageToAll = () => {
  connections.value.forEach((connection) => {
    connection.websocket.send(broadcastMessage.value);
  });
};

const disconnectAll = () => {
  connections.value.forEach((connection) => {
    connection.websocket.close();
  });
  connections.value = [];
};

const disconnectConnection = (index) => {
  connections.value[index].websocket.close();
  connections.value.splice(index, 1);
};

const saveCommand = () => {
  if (!broadcastMessage.value) return;
  savedCommands.value.push(broadcastMessage.value);
  localStorage.setItem("savedCommands", JSON.stringify(savedCommands.value));
};

const loadSavedCommands = () => {
  savedCommands.value = JSON.parse(localStorage.getItem("savedCommands")) || [];
};

onMounted(() => {
  loadSavedCommands();
});
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
