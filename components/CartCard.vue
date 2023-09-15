<template>
  <div
    class="w-[470px] h-[160px] bg-white rounded-xl border border-gray-200 p-4 flex"
  >
    <div class="w-40 bg-gray-100 rounded-lg">
      <img :src="product.image" alt="Product Image" class="w-full h-full" />
    </div>
    <div class="flex-grow flex flex-col justify-between ml-4">
      <div>
        <div class="text-gray-900 text-sm font-normal leading-tight mb-2">
          {{ truncatedTitle }}
        </div>
        <div class="text-gray-400 text-xs">Color Name</div>
      </div>
      <div
        class="text-slate-700 text-lg font-medium flex justify-between items-center"
      >
        <span>Qty: {{ product.qty }}</span>
        <button class="flex items-center" @click="cart.removeItem(product.id)">
          <img
            src="@/assets/img/product/trash.svg"
            alt="Trash Icon"
            class="w-4 h-4 mr-1"
          />
          <span class="text-red-700 text-sm font-semibold cursor-pointer"
            >Remove</span
          >
        </button>
      </div>
    </div>
    <div class="text-right text-gray-900 text-sm font-semibold leading-loose">
      $ {{ product.price }}
    </div>
  </div>
</template>

<script setup>
const truncatedTitle =
  product.title.length > 28
    ? product.title.slice(0, 28) + "..." // Add an ellipsis for longer titles
    : product.title;

const { product } = defineProps(["product"]);

import { useCart } from "~/store/cart";
const cart = useCart();
</script>

<style scoped>
/* Add any additional styling you may need */
</style>
