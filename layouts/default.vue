<template>
  <div class="relative h-screen">
    <slot></slot>
    <div class="fixed top-2 right-2 flex gap-2 text-gray-400">
      <NuxtLink to="/emotionally">Emotionally</NuxtLink>
      <NuxtLink to="/tuju">Tuju</NuxtLink>
      <NuxtLink to="/ketas">Ketas</NuxtLink>
    </div>
  </div>
</template>
