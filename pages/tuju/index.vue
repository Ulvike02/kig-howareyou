<script setup>
definePageMeta({ layout: "default" });

const start = [
  {
    title: "Õnnelik",
    fill: "red",
    icon: "https://api.iconify.design/iconoir:3d-add-hole.svg",
  },
  {
    title: "Elevil",
    fill: "yellow",
    icon: "https://api.iconify.design/iconoir:3d-add-hole.svg",
  },
];

const up = [
  {
    title: "Õnnelik",
    fill: "#ffaaaa",
    icon: "https://api.iconify.design/iconoir:3d-add-hole.svg",
  },
  {
    title: "Elevil",
    fill: "yellow",
  },
  {
    title: "Üllatunud",
    fill: "red",
  },
  {
    title: "Mures",
    fill: "green",
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
</script>

<template>
  <div class="">
    <div>
      <TestWheel>
        <TestSlices
          :options="start"
          :inner="50"
          :outer="150"
          :corner="5"
          :padding="2"
        />
      </TestWheel>
      <TestWheel>
        <TestSlices
          :options="up"
          :inner="50"
          :outer="150"
          :corner="5"
          :padding="2"
        />
      </TestWheel>
    </div>
  </div>
</template>
