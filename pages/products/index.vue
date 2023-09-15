<template>
  <div>
    <!-- Checkboxes -->
    <div class="ml-24 mb-8">
      <div class="font-bold mb-3">Heading</div>
      <template v-for="index in 10" :key="index">
        <div class="mb-2 flex items-center">
          <input
            type="checkbox"
            :id="'checkbox' + index"
            class="w-5 h-5 relative bg-white rounded-md border border-gray-300 mr-2"
          />
          <label
            :for="'checkbox' + index"
            class="text-slate-700 text-base font-semibold leading-normal"
          >
            Type
          </label>
        </div>
      </template>
    </div>

    <div class="ml-24 mb-8">
      <div class="font-bold mb-3">Heading</div>
      <template v-for="index in 10" :key="index">
        <div class="mb-2 flex items-center">
          <input
            type="checkbox"
            :id="'checkbox' + index"
            class="w-5 h-5 relative bg-white rounded-md border border-gray-300 mr-2"
          />
          <label
            :for="'checkbox' + index"
            class="text-slate-700 text-base font-semibold leading-normal"
          >
            Type
          </label>
        </div>
      </template>
      <button
        class="mt-2 bg-sky-200 py-2 px-3 text-sm text-sky-700 border-sky-200 font-bold hover:bg-sky-300 rounded"
      >
        <img src="@/assets/img/product/refresh.svg" class="mr-2 h-5 inline" />
        Reset Option
      </button>
    </div>

    <!-- Product grid -->
    <div class="grid grid-cols-4 gap-5 px-36 ml-40 mt-[-810px]">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "product-list",
});

// Fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
