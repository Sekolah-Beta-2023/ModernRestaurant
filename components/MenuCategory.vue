<template>
   <ul class="menu" :class="{ active: menuStore.menuActive }">
     <div class="toggle" :class="{active: menuStore.menuActive}" @click="menuStore.toggleMenu">
       <ion-icon name="add-outline"></ion-icon>
     </div>
     <li v-for="(item, index) in menuStore.items" :key="index" :style="{ '--i': index }" @click="menuStore.activateItem(index)" :class="{ active: menuStore.activeIndex === index }">
       <NuxtLink :to="`/${item.link}`" >
          <ion-icon :name="item.icon"></ion-icon>
       </NuxtLink>
     </li>
     <div class="indicator"></div>
   </ul>
 </template>
 
<script setup>
import { useMenuStore } from '~/stores/menu'
const menuStore = useMenuStore();

 </script>
 