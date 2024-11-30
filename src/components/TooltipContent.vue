<script setup>
const props = defineProps({
  title: String,
});

</script>
<template>
    <span
        class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-700 text-white rounded-md"
        role="tooltip">
        {{ props.title }}
    </span>
</template>