<script setup>
definePageMeta({ layout: "default" });

const options = [
  {
    title: "Õnnelik",
    fill: "#ffaaaa",
    options: [{ title: "Rahulolev" }, { title: "Roomus" }],
  },
  {
    title: "Elevil",
    fill: "yellow",
    options: [{ title: "Optimistlik" }, { title: "Ergas" }],
  },
  {
    title: "Üllatunud",
    fill: "red",
    options: [{ title: "Segaduses" }, { title: "Kergendunud" }],
  },
  {
    title: "Mures",
    fill: "green",
    options: [{ title: "Ebakindel" }, { title: "Hirmul" }],
  },
  {
    title: "Vihane",
    fill: "#ffaaaa",
  },
  {
    title: "Kurb",
    fill: "yellow",
  },
  {
    title: "Hooliv",
    fill: "red",
  },
  {
    title: "Armastav",
    fill: "green",
  },
];

const options2 = options
  .map((o) => o.options || [{ title: "Some" }, { title: "Thing" }])
  .flat();

const options3 = options2
  .map((o) => [{ title: "Some" }, { title: "Thing" }])
  .flat();

const options4 = [
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
  <div class="p-8">
    <TestWheel>
      <TestSlices
        @select="onSelect"
        :options="options"
        :inner="0"
        :outer="120"
      />
      <TestSlices
        @select="onSelect"
        :options="options2"
        :inner="121"
        :outer="240"
      />
      <TestSlices
        @select="onSelect"
        :options="options3"
        :inner="241"
        :outer="350"
      />
    </TestWheel>
    You selected {{ selectedSector?.title }}
  </div>
</template>
