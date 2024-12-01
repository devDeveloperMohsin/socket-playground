<script setup></script>

<template>
  <ul class="flex flex-col">
    <li v-for="i in 10" :key="i"
      class="inline-flex gap-x-3.5 py-3 px-4 text-sm font-medium bg-white text-gray-800 -mt-px even:bg-gray-100 even:rounded-md first:mt-0 dark:bg-neutral-800 even:dark:bg-neutral-900 dark:text-white">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
        </svg>
      </button>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus corrupti blanditiis adipisci quod rem, soluta
      vitae nihil recusandae quidem animi commodi repellat reprehenderit at consectetur quisquam, facere ducimus nemo
      maxime.
    </li>
  </ul>
</template>