<template>
  <div>
    <div class="bg-gradient-to-b from-sky-100 to-white mb-8">
      <div class="ml-24 text-gray-900 text-3xl mb-6 font-semibold">
        Shopping Cart
      </div>
    </div>
    <div class="card">
      <div class="grid grid-cols-2 gap-72">
        <div class="grid grid-cols-1 gap-4 ml-20 mr-24">
          <div v-for="(p, index) in products" :key="p.id">
            <CartCard :product="p" v-if="index < 4" />
          </div>
        </div>
        <!-- checkout button -->
        <div
          class="w-96 h-52 p-5 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-5"
        >
          <div class="text-gray-900">
            <div class="flex justify-between item-center">
              <div class="text-base font-normal leading-normal">Sub Total</div>
              <div class="text-xl font-semibold leading-loose">$ 207.54</div>
            </div>
            <div
              class="text-gray-400 text-base font-normal leading-normal mb-4"
            >
              Shipping and taxes calculated at checkout
            </div>
          </div>
          <NuxtLink to="/products/checkout">
            <button
              class="w-full px-32 h-14 py-3 bg-sky-600 rounded-lg shadow border border-sky-600 text-white text-base font-semibold leading-normal flex items-center justify-center"
            >
              <div class="w-5 h-5 relative"></div>
              Checkout
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- end checkout button -->
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
import { ref } from "vue";

// Initialize an empty cart as a reactive variable
const cart = ref([]);

// Function to add a product to the cart
const addToCart = (product) => {
  // Add the product to the cart
  cart.value.push(product);
};
</script>

<style scoped></style>
