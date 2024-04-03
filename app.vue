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
  <main class="w-screen h-screen bg-dark-blue flex items-center justify-center">
    <article class="relative flex flex-col gap-6 px-6 md:px-12 p-12 pb-16 rounded-2xl bg-dark-gray-blue items-center shadow-xl text-center bottom-[16px]">
      <small>{{ 'Advice #' + id }}</small>
      <q class="w-[295px] md:w-[444px]">{{ advice }}</q>
      <img class="hidden md:block" src="/images/pattern-divider-desktop.svg" alt="Pattern divider" />
      <img class="block md:hidden" src="/images/pattern-divider-mobile.svg" alt="Pattern divider" />
      <figure class="absolute bottom-[-32px] p-5 bg-green rounded-full cursor-pointer hover:shadow-green-glow" @click="getQuote()">
        <img src="/images/icon-dice.svg" alt="Generate new advice" />
      </figure>
    </article>
  </main>
</template>
