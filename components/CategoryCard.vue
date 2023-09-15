<template>
  <div>
    <div class="px-35 flex justify-between mx-24">
      <div class="text-center">
        <img src="../assets/img/category/Men.svg" width="80" class="mx-auto" />
        <div class="font-semibold mt-3">Men's Fashion</div>
      </div>
      <div class="text-center">
        <img
          src="../assets/img/category/Women.svg"
          width="80"
          class="mx-auto"
        />
        <div class="font-semibold mt-3">Women's Fashion</div>
      </div>
      <div class="text-center">
        <img
          src="../assets/img/category/Bicycle.svg"
          width="80"
          class="mx-auto"
        />
        <div class="font-semibold mt-3">Bicycle</div>
      </div>
      <div class="text-center">
        <img
          src="../assets/img/category/Handphone.svg"
          width="80"
          class="mx-auto"
        />
        <div class="font-semibold mt-3">Handphone</div>
      </div>
      <div class="text-center">
        <img
          src="../assets/img/category/Hobies.svg"
          width="80"
          class="mx-auto"
        />
        <div class="font-semibold mt-3">hobbies and collections</div>
      </div>
      <div class="text-center">
        <img
          src="../assets/img/category/Household.svg"
          width="80"
          class="mx-auto"
        />
        <div class="font-semibold mt-3">Household</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { categories } from "../stores/categories.data";
</script>

<style scoped></style>
<!-- :src="`/img/category/${category.fileName}.png`" -->
