<template>
  <div>
    <div
      class="bg-gradient-to-b from-sky-100 to-white mb-5 flex flex-col items-center"
    >
      <div class="text-center text-gray-900 text-xl mt-8 font-semibold">
        Thank you!
      </div>
      <div class="text-center text-gray-900 text-sm mt-4 font-normal">
        Your order will be processed immediately.
      </div>
      <NuxtLink to="/home">
        <button class="btn mt-8 mb-64">
          <img src="@/assets/img/product/home-02.svg" class="mr-2 h-5 inline" />
          Back to Home
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
