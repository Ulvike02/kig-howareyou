<script setup>
definePageMeta({ layout: "default" });

const options = [
  {
    title: "Õnn",
    fill: "#ffaaaa",
    options: [
      {
        title: "Rahulolev",
        options: [{ title: "Eriti rahulolev" }, { title: "Mega rahulolev" }],
      },
      {
        title: "Uhke",
        options: [{ title: "Eriti uhke" }, { title: "Mega uhke" }],
      },
    ],
  },
  {
    title: "Elevus",
    fill: "yellow",
    options: [{ title: "Optimistlik" }, { title: "Erutatud" }],
  },
  {
    title: "Üllatus",
    fill: "red",
    options: [{ title: "Segaduses" }, { title: "Kergendunud" }],
  },
  {
    title: "Mure",
    fill: "green",
    options: [{ title: "Ebakindel" }, { title: "Kartlik" }],
  },
  {
    title: "Viha",
    fill: "#ffaaaa",
    options: [{ title: "Ärritunud" }, { title: "Vaenulik" }],
  },
  {
    title: "Kurbus",
    fill: "yellow",
    options: [{ title: "Ahastus" }, { title: "Valu" }],
  },
  {
    title: "Hoolivus",
    fill: "red",
    options: [{ title: "Murelik" }, { title: "Empaatiline" }],
  },
  {
    title: "Armastus",
    fill: "green",
    options: [{ title: "Iha" }, { title: "Kirglik" }],
  },
];

const options2 = options
  .map((o) => o.options || [{ title: "..." }, { title: "..." }])
  .flat();

const options3 = options
  .map((o) =>
    (o.options || []).map(
      (o2) => o2.options || [{ title: "..." }, { title: "..." }]
    )
  )
  .flat(Infinity);

const selectedSector = $ref();
const onSelect = (sector) => (selectedSector = sector);
</script>

<template>
  <div class="flex items-center justify-center h-full">
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
  </div>
</template>
