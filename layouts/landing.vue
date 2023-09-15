<template>
  <header>
    <div class="flex bg-sky-100 justify-between">
      <div class="mt-8 mb-7 ml-24 flex items-center space-x-8">
        <img src="../assets/img/Logo.svg" />
        <nav class="font-body space-x-8">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
          <NuxtLink to="/categories">Categories</NuxtLink>
        </nav>
      </div>

      <!-- Right-aligned elements -->
      <div class="mt-8 mr-24 flex space-x-8 items-center">
        <router-link to="/home">Login</router-link>
        <NuxtLink to="/home">
          <button class="btn">Sign Up</button>
        </NuxtLink>
      </div>
    </div>
  </header>
  <!-- output the page content here -->
  <div>
    <slot />
  </div>

  <footer>
    <div class="bg-gray-900 flex justify-between">
      <div
        class="ml-24 my-7 pl-31 grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex"
      >
        <div
          class="self-stretch text-white text-xl font-semibold leading-loose"
        >
          Join our newsletter
        </div>
        <div
          class="self-stretch text-gray-200 text-base font-normal leading-normal"
        >
          Join over 4,000+ startups already growing with Morpheme.
        </div>
      </div>

      <div class="mt-8 mr-24 flex space-x-8 items-center">
        <form>
          <div class="grow shrink basis-0">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              class="p-3.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500 text-sm font-normal leading-tight"
            />
          </div>
        </form>
        <button
          type="submit"
          class="bg-sky-600 py-2 px-3 text-sm text-white border-sky-600 font-semibold hover:bg-sky-700 rounded"
        >
          Subscribe
        </button>
      </div>
    </div>
    <!-- FOOOOTERRR LAINNN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
    <div
      class="bg-gray-800 pt-16 pb-12 flex-col justify-between items-start gap-12 flex"
    >
      <div class="self-stretch justify-between items-start gap-16 inline-flex">
        <div>
          <div class="mt-8 mb-3 ml-24 flex items-center space-x-8">
            <div
              class="grow shrink basis-0 self-stretch flex-col justify-between items-start gap-2 inline-flex"
            >
              <img src="../assets/img/LogoWhite.png" />
              <div
                class="self-stretch text-gray-200 text-base font-normal leading-normal"
              >
                Design amazing digital experiences <br />
                that create more happy in the world.
              </div>
            </div>
          </div>
        </div>
        <div
          class="mr-24 grow shrink basis-0 h-60 justify-start items-start gap-8 flex"
        >
          <div
            class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
          >
            <div
              class="self-stretch text-gray-300 text-sm font-semibold leading-tight"
            >
              Product
            </div>
            <div
              class="self-stretch h-52 flex-col justify-start items-start gap-3 flex"
            >
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Overview
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Features
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Solutions
                  </div>
                </div>
                <div
                  class="px-2 py-0.5 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-30 justify-start items-center flex"
                >
                  <div
                    class="text-center text-white text-xs font-medium leading-none"
                  >
                    New
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Tutorials
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Pricing
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Releases
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
          >
            <div
              class="self-stretch text-gray-300 text-sm font-semibold leading-tight"
            >
              Company
            </div>
            <div
              class="self-stretch h-52 flex-col justify-start items-start gap-3 flex"
            >
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    About us
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Careers
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Press
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    News
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Media kit
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
          >
            <div
              class="self-stretch text-gray-300 text-sm font-semibold leading-tight"
            >
              Resources
            </div>
            <div
              class="self-stretch h-52 flex-col justify-start items-start gap-3 flex"
            >
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Blog
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Newsletter
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Events
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Help centre
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Tutorials
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
          >
            <div
              class="self-stretch text-gray-300 text-sm font-semibold leading-tight"
            >
              Social
            </div>
            <div
              class="self-stretch h-52 flex-col justify-start items-start gap-3 flex"
            >
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Twitter
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    LinkedIn
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Facebook
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    GitHub
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    AngelList
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Dribbble
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
          >
            <div
              class="self-stretch text-gray-300 text-sm font-semibold leading-tight"
            >
              Legal
            </div>
            <div
              class="self-stretch h-52 flex-col justify-start items-start gap-3 flex"
            >
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Terms
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Privacy
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Cookies
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Licenses
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Settings
                  </div>
                </div>
              </div>
              <div class="justify-start items-center gap-2 inline-flex">
                <div class="justify-center items-center gap-2 flex">
                  <div
                    class="text-gray-200 text-base font-semibold leading-normal"
                  >
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-800">
      <div class="mx-20 px-8 flex-col justify-start items-start gap-8 flex">
        <div
          class="self-stretch pt-8 border-t border-slate-600 justify-start items-center gap-5 inline-flex"
        >
          <div
            class="grow shrink basis-0 text-gray-500 text-base mb-8 font-normal leading-normal"
          >
            © 2077 Morpheme UI. All rights reserved.
          </div>
          <div class="justify-start items-center gap-6 flex mb-8">
            <div class="w-6 h-6 relative">
              <img src="../assets/img/footer/tw.png" />
            </div>
            <div class="w-6 h-6 justify-center items-center flex">
              <img src="../assets/img/footer/lk.png" />
            </div>
            <div class="w-6 h-6 relative">
              <img src="../assets/img/footer/fb.png" />
            </div>
            <div class="w-6 h-6 relative">
              <img src="../assets/img/footer/git.png" />
            </div>
            <div class="w-6 h-6 relative">
              <img src="../assets/img/footer/v.png" />
            </div>
            <div class="w-6 h-6 relative">
              <img src="../assets/img/footer/net.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
