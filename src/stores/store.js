import { defineStore } from "pinia";
import { ref } from "vue";
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useStore = defineStore("store", () => {
	// State
	const messages = ref(
		JSON.parse(localStorage.getItem("messages")) || [] // Initialize from localStorage
	);

	// Methods
	const fetchMessages = () => {
		const storedMessages = localStorage.getItem("messages");
		messages.value = storedMessages ? JSON.parse(storedMessages) : [];
	};

	const addMessage = (message) => {
		messages.value.push(message);
		localStorage.setItem("messages", JSON.stringify(messages.value));
	};

	const removeMessage = (index) => {
		messages.value.splice(index, 1); // Remove the message at the given index
		localStorage.setItem("messages", JSON.stringify(messages.value));
	};

	// Return state and actions
	return {
		messages,
		fetchMessages,
		addMessage,
		removeMessage,
	};
});
