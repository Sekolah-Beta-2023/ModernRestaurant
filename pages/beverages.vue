<script setup>
import DefaultLayout from '~/layouts/DefaultLayout.vue';
import MainLayout from '~/layouts/MainLayout.vue'
</script>

<template>
   <DefaultLayout>
      <MainLayout>
         <div class="content" v-motion-pop>
            <div class="content-text" v-motion-pop>
               <h1 v-motion-pop>Beverages</h1>
               <p v-motion-pop>
                  Menu dessert adalah bagian dari hidangan di restoran atau makanan penutup yang disajikan setelah hidangan
                  utama. Dessert adalah penutup yang manis yang dirancang untuk memuaskan selera manis setelah makan. Ini
                  adalah penutup yang beragam dan seringkali dihiasi dengan kreativitas dan rasa yang lezat. Menu dessert
                  dapat mencakup berbagai macam hidangan, seperti kue, es krim, puding, pai, buah-buahan yang dihias,
                  cokelat, dan banyak lagi. Dessert sering dianggap sebagai puncak hidangan makan malam dan dapat menjadi
                  pengalaman yang memuaskan bagi pecinta makanan manis. Beberapa dessert juga mencakup penggunaan berbagai
                  bahan, teknik pembuatan, dan presentasi yang indah, sehingga mereka sering menjadi sorotan dalam
                  pengalaman bersantap.
               </p>

               <NuxtLink to="/beverages-menu">
                  <button>View More</button>
               </NuxtLink>
            </div>
            <img src="~/assets/images/salad.png" alt="" v-motion-pop>
         </div>
      </MainLayout>
   </DefaultLayout>
</template>

<style scoped>
.content {
   height: 100vh;
   position: absolute;
   top: 0;
   width: 100%;
}

.content-text {
   padding: 20px;
}

h1 {
   color: #F5980C;
   font-family: 'Lily Script One', cursive;
   font-size: 48px;
   margin-bottom: 10px;
   width: 52%;
   text-align: center;
   cursor: pointer;
}

h1:hover {
   color: black;
}

p {
   width: 52%;
   line-height: 1.6rem;
   text-indent: 20px;
   padding: 5px;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
}

button {
   cursor: pointer;
   position: fixed;
   z-index: 999;
   right: 40px;
   bottom: 50%;
   width: 100px;
   padding: 10px;
   border-style: none;
   background-color: #000000;
   color: #FFFFFF;
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
   font-weight: 800;
}

.content img {
   position: absolute;
   width: 650px;
   height: 650px;
   left: 90vh;
   top: 0;
   z-index: -1;
}</style>
