<script setup>
definePageMeta({ layout: "emotionally" });
const options = [
  {
    title: "Tired",
    fill: "#2F4E3E",
  },
  {
    title: "Sad",
    fill: "#556D73",
  },
  {
    title: "Angry",
    fill: "#252C23",
  },
  {
    title: "Anxious",
    fill: "#3A4240",
  },
  {
    title: "Mental block",
    fill: "#556D73",
  },
  {
    title: "Confused",
    fill: "#3A4240",
  },
];

const selected = $ref();
const onSelect = (sector) => (selected = sector);
</script>
<template>
  <div>
    <img src="/assets/Background.jpg" class="fixed inset-0" />
    <CircleWheel :options="options" @select="onSelect" />
    You selected {{ selected?.title }}
  </div>
</template>
