<script setup>
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
    <CircleWheel :options="options" @select="onSelect" />
    You selected {{ selected?.title }}
  </div>
</template>
