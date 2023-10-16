<script setup>
import DefaultLayout from '~/layouts/DefaultLayout.vue';
</script>

<template>
   <DefaultLayout>
      <div class="container-about">
         <div class="content-about">
            <h1>About Us</h1>
            <p>
               Selamat datang di <span>Sultan Bagindo</span> Kami adalah restoran yang berkomitmen untuk memberikan pengalaman kuliner
               terbaik kepada pelanggan kami. Dengan berbagai hidangan lezat yang disiapkan oleh koki berbakat kami, kami
               telah menjadi tempat favorit bagi pecinta makanan di [Lokasi Anda].
            </p>
         </div>
      </div>
   </DefaultLayout>
</template>

<style scoped>
.container-about {
   color: #ffffff;
   background-image: url('~/assets/images/headerimage.png');
   height: 100vh;
   background-repeat: no-repeat;
   background-size: cover;
   padding: 20px;

   display: flex;
   justify-content: center;
   align-items: center;
}

.content-about {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

h1 {
   font-family: 'Lily Script One', cursive;
   color: #F5980C;
   text-align: center;
   font-size: 48px;
   margin-bottom: 50px;
}

p {
   width: 70%;
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   border-bottom: 2px dashed #ffffff;
   padding-bottom: 10px;
   text-align: justify;
   letter-spacing: 3px;
   line-height: 1.7rem;
}

</style>