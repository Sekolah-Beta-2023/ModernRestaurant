<template>
   <div class="main-layout" id="MainLayout">
      <div id="MainHeader">
         <MenuCategory />
      </div>
   </div>

   <slot />
</template>

<style scoped>
.main-layout {
   height: 100vh;
   background-image: url('~/assets/images/bg1.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   position: relative;
}

</style>