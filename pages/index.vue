<script setup>
definePageMeta({ layout: "default" });

const options1 = [
  {
    title: "First",
    fill: "#ffaaaa",
  },
  {
    title: "Happy",
    fill: "yellow",
  },
  {
    title: "Sad",
    fill: "red",
  },
  {
    title: "Green",
    fill: "green",
  },
  {
    title: "First",
    fill: "#ffaaaa",
  },
  {
    title: "Happy",
    fill: "yellow",
  },
  {
    title: "Sad",
    fill: "red",
  },
  {
    title: "Green",
    fill: "green",
  },
];

const options2 = [
  {
    title: "Sad",
    fill: "red",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
  {
    title: "Green",
    fill: "green",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
];

const options3 = [
  {
    title: "Happy",
    fill: "#2F4E3E",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
  {
    title: "Sad",
    fill: "#556D73",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
  {
    title: "Angry",
    fill: "#252C23",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
  {
    title: "Anxious",
    fill: "#3A4240",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
  {
    title: "Mental block",
    fill: "#556D73",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
  {
    title: "Confused",
    fill: "#3A4240",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
];

const selectedSector = $ref();
const onSelect = (sector) => (selectedSector = sector);
</script>

<template>
  <div
    class="flex items-center justify-center border-4 border-red-500 text-red-400 h-full"
  >
    <div>
      <MummuWheel @select="onSelect" :options="options3" />
      <!-- <EmojiWheel @select="onSelect" :options="options1" /> -->
      <!-- <EmojiWheel @select="onSelect" :options="options2" /> -->
      You selected {{ selectedSector?.title }}
    </div>
  </div>
</template>
