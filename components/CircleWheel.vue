<script setup>
const { options = [] } = defineProps(["options"]);
defineEmits(["select"]);

const items = options.map((option, i) => {
  const point = polar(i * (180 / (options.length - 1)), 120);
  return { ...option, point };
});
</script>
<template>
  <div class="relative">
    <button
      v-for="(item, i) in items"
      @click="$emit('select', item)"
      class="w-16 text-sm rounded-full h-16 absolute bg-black text-white grid place-items-center text-center -translate-x-5 -translate-y-5"
      :style="{
        left: item.point.x / 1.5 + 'px',
        top: i * 70 + 'px',
        background: item.fill,
      }"
    >
      {{ item.title }}
    </button>
  </div>
</template>
