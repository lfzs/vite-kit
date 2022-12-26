<template>
<router-view v-slot="{ Component }">
  <component :is="Component" />
</router-view>
</template>

<script setup>
$utils.log(import.meta.env)
</script>
