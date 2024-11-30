<script setup>
import TooltipContent from './TooltipContent.vue';
</script>

<template>
    <div class="bg-gray-50 dark:bg-neutral-900 p-4 rounded-md min-w-[500px] max-h-[700px] overflow-y-auto">
        <!-- Title -->
        <div class="flex justify-between">
            <h3 class="text-2xl dark:text-white">Connection #1</h3>
            <button class="hs-tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="text-red-500" fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>

                <TooltipContent title="Disconnect" />
            </button>
        </div>
        <!-- End Title -->

        <!-- Message Input -->
        <div class="mb-5">
            <label class="block text-sm font-medium mb-2 dark:text-white">Enter Message</label>
            <input type="text"
                class="mb-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Hello ...">

            <button type="button"
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Send
            </button>
        </div>
        <!-- End Message Input -->

        <!-- Response/Output -->
        <div>
            <h4 class="text-xl dark:text-white">Received:</h4>

            <!-- List Group -->
            <ul class="flex flex-col justify-end text-start -space-y-px">
                <li v-for="i in 15" :key="i"
                    class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <div class="w-full flex justify-between truncate">
                        <span class="me-3 flex-1 w-0 truncate">
                            coverletter_web_ui_developer.pdf asdjkas dkjas dakjsd askd askjd akjsd sakjd sakjd sakjd
                            sakjd askjd asd
                        </span>

                        <button type="button"
                            class="hs-tooltip flex items-center gap-x-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 whitespace-nowrap dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10" />
                            </svg>

                            <TooltipContent title="Expand" />
                        </button>

                        <button type="button"
                            class="hs-tooltip ml-3 flex items-center gap-x-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 whitespace-nowrap dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                viewBox="0 0 16 16">
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
