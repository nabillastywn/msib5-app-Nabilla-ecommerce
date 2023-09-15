<template>
  <div>
    <NuxtLink :to="`/products/${product.id}`">
      <div
        class="bg-white mb-10 border rounded-xl overflow-hidden cursor-pointer"
        style="
          border-radius: 12px;
          border: 1px solid var(--gray-200, #eaecf0);
          background: var(--base-white, #fff);
          margin-left: 15px;
          margin-right: 15px;
          height: 300px;
          width: 200px;
          display: flex; /* Use flexbox for centering */
          flex-direction: column; /* Stack content vertically */
          align-items: center; /* Center items horizontally */
          justify-content: center; /* Center items vertically */
        "
      >
        <img
          :src="product.image"
          class="thumb flex-shrink-0 overflow-hidden"
          style="
            background: url('/src/assets/img/flash/${product.fileName}.png')
              var(--gray-100, #f2f4f7);
            margin: 0;
            padding: 0;
          "
        />
        <div class="bg-white p-4">
          <div
            class="mr-2 rounded-lg py-0.3 px-2 inline-block"
            style="
              border-radius: 16px;
              background: var(--gray-100, #f2f4f7);
              mix-blend-mode: multiply;
            "
          >
            <button class="text-gray-700 text-xs font-semibold">Label</button>
          </div>
          <div class="mt-3 text-base my-0 mb-2">{{ truncatedTitle }}</div>
          <div class="flex items-center justify-between">
            <div class="text-black text-lg font-bold">
              $ {{ product.price }}
            </div>
            <div class="text-gray-400 text-xs">450 ML</div>
          </div>
          <div class="flex items-center space-x-3 mb-1">
            <div class="text-gray-400 text-xs mt-1 price">
              $ {{ product.price }}
            </div>
            <div
              class="mt-1 mr-2 rounded-lg py-0.3 px-2 inline-block"
              style="
                border-radius: 16px;
                background: var(--error-50, #fef3f2);
                mix-blend-mode: multiply;
              "
            >
              <button class="text-red-700 text-xs font-semibold">-10%</button>
            </div>
          </div>
          <!-- <p class="font-bold text-gray-500 m-4 truncate">
              {{ truncatedTitle }}
            </p> -->
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

// Compute a truncated title with a maximum length of 50 characters
const truncatedTitle =
  product.title.length > 25
    ? product.title.slice(0, 25) + "..." // Add an ellipsis for longer titles
    : product.title;
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}

.price {
  text-decoration: line-through; /* Add a line through the text */
}
</style>
