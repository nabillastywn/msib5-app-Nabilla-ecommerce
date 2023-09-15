import axios from "axios";
import { defineStore } from "pinia";
import { TCart, TCartProduct, TProduct } from "~/types/types";

export const useCart = defineStore("cart", {
  state: (): {
    cart: TCart;
    cartProduct: TProduct[];
    localCart: TCartProduct[];
  } => ({
    cartProduct: [],
    cart: {} as TCart,
    localCart: [],
  }),
  getters: {
    cartCount: (state) => state.cart.products.length,
  },
  actions: {
    async fetchCart(): Promise<void> {
      try {
        const response = await axios.get("https://fakestoreapi.com/carts/5");
        this.cart = response.data;
        this.localCart = response.data.products;
        this.cart.products.map(async (item) => {
          const dataProduct = await axios.get(
            `https://fakestoreapi.com/products/${item.productId}`
          );
          dataProduct.data.qty = item.quantity;
          this.cartProduct.push(dataProduct.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    async addItem(productId: number, quantity: number): Promise<void> {
      try {
        const index = this.localCart.findIndex(
          (item) => item.productId === productId
        );
        if (index !== -1) {
          this.localCart[index].quantity += quantity;
        } else {
          this.localCart.push({ productId, quantity });
        }

        const requestData = {
          products: this.localCart,
        };

        const response = await axios.put(
          "https://fakestoreapi.com/carts/5",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.cart = response.data;
        this.cartProduct = [];
        this.cart.products.map(async (item) => {
          const dataProduct = await axios.get(
            `https://fakestoreapi.com/products/${item.productId}`
          );
          dataProduct.data.qty = item.quantity;
          this.cartProduct.push(dataProduct.data);
        });
        console.log(this.cartProduct);
      } catch (error) {
        console.error(error);
      }
    },
    async removeItem(productId: number): Promise<void> {
      try {
        console.log(productId);
        const product = this.localCart.filter(
          (product) => product.productId !== productId
        );
        this.cartProduct = this.cartProduct.filter(
          (product) => product.id !== productId
        );

        console.log(this.cartProduct);

        const requestData = {
          products: product,
        };

        const response = await axios.put(
          "https://fakestoreapi.com/carts/5",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.cart = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
