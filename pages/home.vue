<template>
  <div>
    <div
      class="bg-gradient-to-b from-sky-100 to-white flex justify-between items-center"
    >
      <!-- Left side (text and button) -->
      <div class="ml-24 my-auto mx-auto pl-31">
        <div class="text-5xl font-semibold text-secondary leading-tight">
          Welcome to GITS Commerce
        </div>
        <p class="max-w-sm text-gray-600 my-3">
          Morpheme is a next-gen financial technology company in the process of
          reinventing banking.
        </p>
        <button
          class="mt-2 bg-sky-600 py-2 px-3 text-sm text-white border-sky-600 font-semibold hover:bg-sky-700 rounded"
        >
          <img
            src="../assets/img/cart.png"
            alt="Cart Icon"
            class="mr-2 h-5 inline"
          />
          Start Shopping
        </button>
      </div>
      <!-- Right side (image) -->
      <div>
        <img src="../assets/img/troli.svg" width="900" />
      </div>
    </div>
    <div class="mx-24 px-31 flex justify-between mb-5 items-center">
      <div class="font-bold text-secondary text-lg">Categories</div>
      <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
        <div>View all</div>
        <img src="../assets/img/Button.png" alt="Arrow Right" width="18" />
      </div>
    </div>
    <CategoryCard />
    <div class="bg-slate-50 mt-24">
      <div class="mx-24 flex justify-between mb-5 mt-24 items-center">
        <div class="flex space-x-3 items-center">
          <div class="font-bold text-secondary my-10 text-lg">Flash Sale</div>
          <button
            class="bg-red-500 py-1.5 px-3 text-sm text-white border-red-500 font-semibold hover:bg-red-600 rounded"
          >
            00 : 12 : 12
          </button>
        </div>
        <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
          <div>View all</div>
          <img src="../assets/img/Button.png" alt="Arrow Right" width="18" />
        </div>
      </div>
      <div class="mx-24">
        <Swiper
          :modules="modules"
          :slides-per-view="5"
          :navigation="{ enabled: true, nextEl: '.button-next' }"
          :space-between="10"
          :loop="true"
          :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
        >
          <SwiperSlide v-for="p in products">
            <FlashsaleCard :product="p" />
          </SwiperSlide>
          <div
            class="button-next w-7 h-7 bg-gray-400 absolute z-10 right-0 top-[155px] rounded-full mr-[1px] mb-12"
          >
            <img src="../assets/img/flash/Group.svg" />
          </div>
        </Swiper>
      </div>
    </div>
    <div class="mx-24 px-31 flex justify-between mb-10 mt-24 items-center">
      <div class="font-bold text-secondary text-lg">Latest Product</div>
      <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
        <div>View all</div>
        <img src="../assets/img/Button.png" alt="Arrow Right" width="18" />
      </div>
    </div>
    <div class="flex px-35 ml-24">
      <div
        class="flex-start box-border h-auto w-[265px] p-5 border-0 bg-sky-500 rounded-xl text-secondary font-poppins"
      >
        <div class="self-stretch text-2xl text-white mt-3">Discount</div>
        <div class="self-stretch text-5xl text-white font-bold leading-[60px]">
          More <br />
          and <br />
          More
        </div>
        <div class="text-2x1 text-white mt-12">Up To</div>
        <div class="text-5xl font-bold text-yellow-300 mt-2 mb-3">50%</div>
      </div>
    </div>
    <div class="ml-72 mr-24 mt-[-355px]">
      <Swiper
        :modules="modules"
        :slides-per-view="4"
        :navigation="{ enabled: true, nextEl: '.button-next' }"
        :space-between="10"
        :loop="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
      >
        <SwiperSlide v-for="p in products">
          <LatestCard :product="p" />
        </SwiperSlide>
        <div
          class="button-next w-7 h-7 bg-gray-400 absolute z-10 right-0 top-[155px] rounded-full mr-[1px] mb-12"
        >
          <img src="../assets/img/flash/Group.svg" />
        </div>
      </Swiper>
    </div>
    <div class="mx-24 px-31 flex mb-10 mt-24 items-center">
      <div class="font-bold text-secondary text-lg">Promo</div>
    </div>
    <div class="flex px-35 ml-24">
      <div class="w-[1000px] h-52 bg-gray-300 rounded-xl"></div>
    </div>
    <div class="mx-24 px-31 flex justify-between mb-10 mt-24 items-center">
      <div class="font-bold text-secondary text-lg">Latest Product</div>
      <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
        <div>View all</div>
        <img src="../assets/img/Button.png" alt="Arrow Right" width="18" />
      </div>
    </div>
    <div class="flex px-35 ml-24">
      <div
        class="flex-start box-border h-auto w-[265px] p-5 border-0 bg-sky-500 rounded-xl text-secondary font-poppins"
      >
        <div class="self-stretch text-2xl text-white mt-3">Discount</div>
        <div class="self-stretch text-5xl text-white font-bold leading-[60px]">
          More <br />
          and <br />
          More
        </div>
        <div class="text-2x1 text-white mt-12">Up To</div>
        <div class="text-5xl font-bold text-yellow-300 mt-2 mb-3">50%</div>
      </div>
    </div>
    <div class="ml-72 mr-24 mt-[-355px]">
      <Swiper
        :modules="modules"
        :slides-per-view="4"
        :navigation="{ enabled: true, nextEl: '.button-next' }"
        :space-between="10"
        :loop="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
      >
        <SwiperSlide v-for="p in products">
          <LatestCard :product="p" />
        </SwiperSlide>
        <div
          class="button-next w-7 h-7 bg-gray-400 absolute z-10 right-0 top-[155px] rounded-full mr-[1px] mb-12"
        >
          <img src="../assets/img/flash/Group.svg" />
        </div>
      </Swiper>
    </div>
    <div class="mx-24 px-31 flex justify-between mb-10 mt-24 items-center">
      <div class="font-bold text-secondary text-lg">For You</div>
      <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
        <div>View all</div>
        <img src="../assets/img/Button.png" alt="Arrow Right" width="18" />
      </div>
    </div>
    <div class="grid grid-cols-5 gap-4 ml-20 mr-24">
      <div v-for="(p, index) in products" :key="p.id">
        <ProductCard :product="p" v-if="index < 15" />
      </div>
    </div>
    <!-- contoh -->
    <!-- <div class="w-96 bg-white rounded-xl border border-gray-200 p-4 flex">
      <div class="w-40 bg-gray-100 rounded-lg">
        <img class="w-full h-full" src="product.image" alt="Product Image" />
      </div>
      <div class="flex-grow flex flex-col justify-between ml-4">
        <div>
          <div class="text-gray-900 text-xl font-semibold leading-tight">
            Product Name
          </div>
          <div class="text-gray-400 text-xs">Color Name</div>
        </div>
        <div class="text-slate-700 text-lg font-medium">
          Qty: 1
          <span class="text-red-700 text-sm font-semibold ml-2 cursor-pointer"
            >Remove</span
          >
        </div>
      </div>
      <div class="text-gray-900 text-xl font-semibold ml-4">Rp36.000</div>
    </div> -->
    <!-- contoh -->
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
const modules = [Navigation, Autoplay];
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
