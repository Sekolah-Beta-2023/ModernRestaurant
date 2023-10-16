<template>
  <div class="container">
    <div class="circle"></div>
    <ul class="menu" :class="{ active: menuStore.menuActive }">
      <div class="toggle" :class="{ active: menuStore.menuActive }" @click="menuStore.toggleMenu">
        <Icon name="ic:baseline-plus" size="33" />
      </div>
      <li v-for="(item, index) in menuStore.items" :key="index" :style="{ '--i': index }"
        @click="menuStore.activateItem(index)" :class="{ active: menuStore.activeIndex === index }">
        <NuxtLink :to="`/${item.link}`">
          <img src="../assets/images/dessert.svg" alt="" width="40" height="40">
        </NuxtLink>
      </li>
      <div class="indicator"></div>
    </ul>
  </div>
</template>
 
<script setup>
import { useMenuStore } from '~/stores/menu'
const menuStore = useMenuStore();
</script>

<style scoped>

.container {
  position: absolute;
  background-color: red;
  height: 50vh;
  bottom: 0;
  z-index: 2;
}

.menu {
  position: absolute;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: -30px;
}

.menu .toggle {
  position: absolute;
  width: 75px;
  height: 75px;
  background: #fff;
  color: #222327;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  cursor: pointer;
  transition: 0.5s;
}

.menu .toggle.active {
  transform: rotate(315deg);
  box-shadow: 0 0 0 68px #F5980C;
  background: #222327;
  color: #fff;
}

.menu li {
  position: absolute;
  left: 10px;
  list-style: none;
  transform: rotate(calc(360deg / 8 * var(--i))) translateX(40px);
  transform-origin: 140px;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  z-index: 10;
}

.menu.active li {
  visibility: visible;
  opacity: 1;
}

.menu li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  font-size: 1.75em;
  color: #222327;
  transform: rotate(calc(360deg / -8 * var(--i)));
  border-radius: 50%;
}

.menu.active li.active {
  transform: rotate(calc(360deg / 8 * var(--i))) translateX(12px);
}

.indicator {
  position: absolute;
  left: calc(50% + 2.5px);
  transform-origin: right;
  width: 100px;
  height: 1px;
  background: transparent;
  pointer-events: none;
  transition: 0.5s;
}

.indicator::before {
  content: '';
  position: absolute;
  top: -27.5px;
  left: 72px;
  width: 55px;
  height: 55px;
  background: #222327;
  box-shadow: 0 0 0 6px #c444ff;
  border-radius: 50%;
  transition: 0.5s;
  opacity: 0;
}

.menu.active .indicator::before {
  opacity: 1;
  top: -27.5px;
  left: -27.5px;
  background: #fff;
  box-shadow: 0 0 0 6px #222327;
  color: #F5980C;
}

.menu li:nth-child(2).active~.indicator {
  transform: translateX(-103px) rotate(0deg);
}

.menu li:nth-child(3).active~.indicator {
  transform: translateX(-103px) rotate(45deg);
}

.menu li:nth-child(4).active~.indicator {
  transform: translateX(-103px) rotate(90deg);
}

.menu li:nth-child(5).active~.indicator {
  transform: translateX(-103px) rotate(135deg);
}

.menu li:nth-child(6).active~.indicator {
  transform: translateX(-103px) rotate(180deg);
}

.menu li:nth-child(7).active~.indicator {
  transform: translateX(-103px) rotate(225deg);
}

.menu li:nth-child(8).active~.indicator {
  transform: translateX(-103px) rotate(270deg);
}

.menu li:nth-child(9).active~.indicator {
  transform: translateX(-103px) rotate(315deg);
}
</style>
 