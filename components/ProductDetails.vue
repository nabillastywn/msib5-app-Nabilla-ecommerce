<template>
  <div>
    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="">
          <div class="p-7">
            <img
              :src="product.image"
              alt="product img"
              class="mx-auto my-7"
              width="300"
              height="300"
            />
          </div>
          <div class="ml-24 grid grid-cols-4 gap-4 mt-4">
            <template v-for="i in 4" :key="i">
              <div class="col-span-1">
                <img
                  :src="product.image"
                  alt="product img"
                  class="mx-auto my-2"
                  width="80"
                  height="80"
                />
              </div>
            </template>
          </div>
        </div>
        <div class="p-7">
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <p class="text-xl text-sky-800 font-semibold mb-7">
            ${{ product.price }}
          </p>
          <div class="text-sm text-gray-500 font-normal">Color</div>
          <div class="space-x-5 mb-4">
            <button
              class="bg-white border border-white py-2 px-3 text-sm text-slate-600 font-semibold rounded"
            >
              <img
                src="../assets/img/product/orange.svg"
                class="mr-2 h-5 inline"
              />
              Color Name
            </button>
            <button
              class="bg-gray-50 border border-gray-50 py-2 px-3 text-sm text-slate-600 font-semibold rounded"
            >
              <img
                src="../assets/img/product/green.svg"
                class="mr-2 h-5 inline"
              />
              Color Name
            </button>
            <button
              class="bg-gray-200 border border-gray-200 py-2 px-3 text-sm text-slate-600 font-semibold rounded"
            >
              <img
                src="../assets/img/product/purple.svg"
                class="mr-2 h-5 inline"
              />
              Color Name
            </button>
          </div>
          <div class="text-sm text-gray-500 font-normal">Size</div>
          <div class="space-x-3 mb-5">
            <button
              class="bg-gray-50 border border-gray-50 py-2 px-3 text-sm text-slate-600 font-semibold rounded w-10"
            >
              S
            </button>
            <button
              class="bg-gray-200 border border-gray-200 py-2 px-3 text-sm text-slate-600 font-semibold rounded w-10"
            >
              M
            </button>
            <button
              class="bg-gray-50 border border-gray-50 py-2 px-3 text-sm text-slate-600 font-semibold rounded w-10"
            >
              L
            </button>
            <button
              class="bg-white border-sky-700 border-2 py-2 px-3 text-sm text-slate-600 font-semibold rounded w-10"
            >
              XL
            </button>
          </div>
          <div>
            <div class="text-sm text-gray-500 font-normal mb-1">Quantity</div>
            <div class="space-x-3 mb-5 items-center flex">
              <button
                class="bg-gray-200 border border-grey-200 py-2 px-3 justify-center font-semibold items-center gap-2 inline-flex rounded w-10 h-10"
                @click="decrement"
              >
                <img
                  src="../assets/img/product/minus.svg"
                  class="inline items-center relative"
                />
              </button>
              <button
                class="bg-white border border-grey-200 py-2 px-3 text-sm text-slate-600 justify-center font-semibold items-center gap-2 inline-flex rounded w-10 h-10"
              >
                {{ quantity }}
              </button>
              <button
                class="bg-sky-600 border border-sky-600 py-2 px-3 justify-center items-center gap-2 inline-flex rounded w-10 h-10"
                @click="increment"
              >
                <img
                  src="../assets/img/product/plus.svg"
                  class="inline items-center relative"
                />
              </button>
            </div>
          </div>
          <div class="text-sm text-gray-500 font-normal mb-1">Description</div>
          <p class="mb-7 text-violet-950 text-lg font-semibold">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
const quantity = ref(1); // Initial quantity

const increment = () => {
  // Increment the quantity
  quantity.value++;
};

const decrement = () => {
  // Ensure quantity doesn't go below 1
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
