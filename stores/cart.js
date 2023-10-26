import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    totalPrice: 0
  }),
  persist: true,

  actions: {
    addProductToCart (product) {

      if (this.items.length === 0) {
        this.items.push({
          ...product,
          count: 1
        })
      } else {
        const findIndexProduct = this.items.findIndex((p) => p.id === product.id);

        if (findIndexProduct !== -1) {
          this.items[findIndexProduct] = {
            ...this.items[findIndexProduct],
            count: this.items[findIndexProduct].count + 1
          }
        } else {
         this.items.push({
            ...product,
            count: 1
         })
        }
      }

      this.totalPrice = this.items.reduce(
        (acc, curr) => acc + curr.price * curr.count,
        0
      )
    },

    incrementProduct(id) {
      this.items = this.items.map((product) => {
         if (product.id === id) {
            return {
               ...product,
               count: product.count + 1
            }
         }
         return product
      })

      this.totalPrice = this.items.reduce(
         (acc, curr) => acc + curr.price * curr.count,
         0
       )
    },

    decrementProduct(id) {
      this.items = this.items.map((product) => {
         if (product.id === id) {
            return {
               ...product,
               count: product.count - 1
            }
         }

         return product
      })

      this.totalPrice = this.items.reduce(
         (acc, curr) => acc + curr.price * curr.count,
         0
       )
    },

    clearCart() {
      this.items = [];
    }
  }
})
