<script setup>
const advice = ref('')
const id = ref('')

async function getQuote() {
  try {
    const timestamp = new Date().getTime();
    const url = `https://api.adviceslip.com/advice?_=${timestamp}`; // Prevent caching
    const response = await fetch(url);
    const data = await response.json();
    advice.value = data.slip.advice;
    id.value = data.slip.id;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
}

onMounted(() => getQuote())
</script>

<template>
  <div class="w-screen h-screen bg-dark-blue flex items-center justify-center">
    <div class="flex flex-col gap-8 p-8 rounded-xl bg-dark-gray-blue items-center">
      <small>{{ 'Advice #' + id }}</small>
      <q>{{ advice }}</q>
    </div>
  </div>
</template>
