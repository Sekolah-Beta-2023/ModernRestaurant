import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
   state: () => ({
      menuActive: true,
      items: [
         { icon: "dessert.svg", link: '' },
         { icon: "dessert.svg", link: 'dessert' },
         { icon: "dessert.svg", link: 'beverages' },
         { icon: "dessert.svg", link: 'dessert' },
         { icon: "dessert.svg", link: 'dessert' },
         { icon: "dessert.svg", link: 'dessert' },
         { icon: "dessert.svg", link: 'dessert' },
         { icon: "dessert.svg", link: 'dessert' },
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