<template>
   <div class="container" id="DefaultLayout">
      <div class="navigasi">
         <ul>
            <li>
               <NuxtLink to="/">
                  Home
               </NuxtLink>
            </li>
            <li>
               <NuxtLink to="/category">
                  Category
               </NuxtLink>
            </li>
            <li>
               <NuxtLink to="/about">
                  About
               </NuxtLink>
            </li>
            <li>
               <NuxtLink to="/contact">
                  Contacts
               </NuxtLink>
            </li>
         </ul>
      </div>
      <slot />
   </div>
</template>

<style scoped>
.container {
   height: 100vh;
   padding-left: 45px;
}

.navigasi {
   position: fixed;
   top: 50%;
   left: -140px;
   transform: rotate(270deg);
   background-color: #F5980C;
   font-family: 'Lily Script One', cursive;
   border-radius: 10px;
}

.navigasi ul {
   display: flex;
   flex-direction: row-reverse;
   list-style: none;
}

.navigasi ul li {
   padding: 15px;
   transition: all ease-in-out .5s;
   cursor: pointer;
}

ul li a {
   text-decoration: none;
   color: #000000;
}

ul li:hover {
   background-color: #ffffff;
   transition: all ease-in-out .5s;
}

ul li a:hover {
   color: #F5980C;
}
</style>