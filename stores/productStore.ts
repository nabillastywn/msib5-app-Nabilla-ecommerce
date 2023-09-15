// productStore.ts

import { ref, Ref } from "vue";

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const products: Ref<TProduct[]> = ref([]);
const loading: Ref<boolean> = ref(false);

// Fetch products from the API
const fetchProducts = async () => {
  try {
    loading.value = true;
    const response = await fetch("https://dummyjson.com/products"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    loading.value = false;
  }
};

export const useProductStore = {
  products,
  fetchProducts,
  loading,
};
