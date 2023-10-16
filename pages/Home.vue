<template>
   <DefaultLayout>
      <div class="header-content"
         v-motion 
            :initial="{
            scale: 1,
            }" 
            :enter="{
               transition: {
               delay: 1000,
            },
            }"
      >
         <div class="header-text">
            <h1 v-motion-pop>Sultan Bagindo</h1>
            <p v-motion-pop>Restaurant</p>

            <span v-motion-pop>--- Free Home Delivery ---</span>
            <NuxtLink to="/category" v-motion-pop>
               <button>Get More</button>
            </NuxtLink>
         </div>
      </div>
   </DefaultLayout>
</template>

<script setup >
import DefaultLayout from '~/layouts/DefaultLayout.vue';
</script>

<style scoped>
.header-content {
   background-image: url('~/assets/images/headerimage.png');
   height: 100vh;
   background-repeat: no-repeat;
   background-size: cover;

   display: flex;
   justify-content: center;
   align-items: center;
}

.header-text {
   text-align: center;
   color: #ffffff;
   font-family: 'Poppins', sans-serif;
}

.header-text h1 {
   font-size: 68px;
   color: #F5980C;
   font-family: 'Lily Script One', cursive;
   padding-bottom: 0px;
}

.header-text p {
   font-size: 42px;
   padding: 0px;
}

.header-text span {
   display: block;
   margin-top: 100px;
}

button {
   padding: 10px;
   width: 150px;
   border-radius: 10px;
   background-color: #F5980C;
   color: #ffffff;
   font-family: 'Lily Script One', cursive;
   margin-top: 20px;
   letter-spacing: 4px;
   cursor: pointer;
   border-style: none;
   transition: all ease-in 0.5s;
}

button:hover {
   background-color: #ffffff;
   color: #F5980C;
   transition: all ease-in 0.5s;
}
</style>