import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
   state: () => ({
      menuActive: false,
      items: [
         { icon: "home-outline", link: '' },
         { icon: "pizza-outline", link: 'fastfood' },
         { icon: "beer-outline", link: 'beer' },
         { icon: "fast-food-outline", link: 'fastfood' },
         { icon: "pizza-outline", link: 'fastfood' },
         { icon: "beer-outline", link: 'fastfood' },
         { icon: "pizza-outline", link: 'fastfood' },
         { icon: "fast-food-outline", link: 'fastfood' },
       ],
       activeIndex: 0,
   }),
   persist: true,

   actions: {
      toggleMenu() {
         this.menuActive = !this.menuActive;
      },
      activateItem(index) {
         this.activeIndex = index;
      }
   }
})