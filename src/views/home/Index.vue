<template>
<HelloVite />
<button @click="$router.push({ name: 'user' })">to user page</button>
</template>

<script setup>
import HelloVite from '@/components/common/HelloVite.vue'
</script>
