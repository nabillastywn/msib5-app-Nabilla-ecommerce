<template>
  <div>
    <div class="bg-gradient-to-b from-sky-100 to-white mb-8">
      <div class="ml-24 flex justify-between items-center mr-24">
        <button
          class="bg-white border border-gray-400 py-2 px-3 text-sm text-gray-900 font-semibold rounded"
          @click="goBack"
        >
          <img
            src="@/assets/img/product/arrow-left.png"
            class="mr-2 h-5 inline"
          />
          Back
        </button>
        <div
          class="items-center text-center text-gray-900 text-4xl mb-6 font-semibold"
        >
          Product Details
        </div>
        <button
          class="mt-2 bg-sky-600 py-2 px-3 text-sm text-white border-sky-600 font-semibold hover:bg-sky-700 rounded"
          @click="useCart().addItem(product.id, Number(quantity))"
        >
          <img
            src="@/assets/img/product/plus.svg"
            alt="Cart Icon"
            class="mr-2 h-5 inline"
          />
          Add to Cart
        </button>
      </div>
    </div>
    <ProductDetails @value-updated="qtyValue" :product="product" />
  </div>
</template>

<script setup>
import ProductDetails from "~/components/ProductDetails.vue";
import { useRouter } from "vue-router";
import { useCart } from "~/store/cart";
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const router = useRouter();

const qty = ref(1);

console.log(qty.value);

const qtyValue = (value) => {
  qty.value = value;
};

// fetch the product
const { data: product } = await useFetch(uri, { key: id });

const goBack = () => {
  router.go(-1); // Go back to the previous page
};
</script>

<style scoped></style>
