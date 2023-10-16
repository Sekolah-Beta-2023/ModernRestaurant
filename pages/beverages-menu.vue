<script setup>
import DefaultLayout from '~/layouts/DefaultLayout.vue';

</script>

<template>
   <DefaultLayout>
      <div class="container">
         <div class="content-menu">
            <h1>Beverages Menu's</h1>
            <div class="menu">
               <div class="card">
                  <img src="~/assets/images/salad.png" alt="" width="100" height="100" >
                  <div class="card-body">
                     <h5 class="title">Nestea Lemon</h5>
                     <p class="price">Price</p>
                  </div>
               </div>
               <div class="card">
                  <img src="~/assets/images/salad.png" alt="" width="100" height="100" >
                  <div class="card-body">
                     <h5 class="title">Nestea Lemon</h5>
                     <p class="price">Price</p>
                  </div>
               </div>
               <div class="card">
                  <img src="~/assets/images/salad.png" alt="" width="100" height="100" >
                  <div class="card-body">
                     <h5 class="title">Nestea Lemon</h5>
                     <p class="price">Price</p>
                  </div>
               </div>
               <div class="card">
                  <img src="~/assets/images/salad.png" alt="" width="100" height="100" >
                  <div class="card-body">
                     <h5 class="title">Nestea Lemon</h5>
                     <p class="price">Price</p>
                  </div>
               </div>
               <div class="card">
                  <img src="~/assets/images/salad.png" alt="" width="100" height="100" >
                  <div class="card-body">
                     <h5 class="title">Nestea Lemon</h5>
                     <p class="price">Price</p>
                  </div>
               </div>
               <div class="card">
                  <img src="~/assets/images/salad.png" alt="" width="100" height="100" >
                  <div class="card-body">
                     <h5 class="title">Nestea Lemon</h5>
                     <p class="price">Price</p>
                  </div>
               </div>
               <div class="card">
                  <img src="~/assets/images/salad.png" alt="" width="100" height="100" >
                  <div class="card-body">
                     <h5 class="title">Nestea Lemon</h5>
                     <p class="price">Price</p>
                  </div>
               </div>
               <div class="card">
                  <img src="~/assets/images/salad.png" alt="" width="100" height="100" >
                  <div class="card-body">
                     <h5 class="title">Nestea Lemon</h5>
                     <p class="price">Price</p>
                  </div>
               </div>
            </div>

            <div class="cart-content">
               <span class="count">0</span>
               <Icon class="cart" name="ant-design:shopping-cart-outlined" size="60" />
            </div>
         </div>
      </div>
   </DefaultLayout>
</template>

<style scoped>
.container {
   background-color: #000000;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   border-radius: 10px;
}

.cart-content {
   position: fixed;
   bottom: 30px;
   color: #ffffff;
   right: 80px;
   cursor: pointer;
   transition: all ease-in-out .5s;
}

.count {
   color: #ffffff;
   position: absolute;
   top: -10px;
   font-size: 28px;
   right: -15px;
   background-color: #F5980C;
   border-radius: 50%;
   width: 50%;
   text-align: center;
}

.cart:hover {
   color: #F5980C;
   transition: all ease-in-out .5s;
}

.content-menu {
   background-color: #F5980C;
   height: 100vh;
   width: 100%;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

}

.menu {
   height: 90%;
   width: 95%;
   background-color: #000000;
   border-radius: 10px;
   display: flex;
   flex-wrap: wrap;
   align-content: flex-start;
   padding-left:80px;
   padding-right: 80px;
   padding-top: 50px;
}

h1 {
   font-family: 'Lily Script One', cursive;
   color: #ffffff;
   font-size: 38px;
}

.card {
   height: 100px;
   width: 300px;
   margin-bottom: 20px;
   margin-right: 20px;
   display: flex;
   border-right: 2px solid white;
   border-bottom: 2px solid #F5980C;
   cursor: pointer;
   transition: all ease-in-out .5s;
}

.card .card-body {
   color: #ffffff;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
}

.card-body .title {
   font-size: 24px;
   font-family: 'Lily Script One', cursive;
   text-align: center;
}

.card:hover {
   background-color: #F5980C;
   border-bottom: 2px solid #ffffff;
   transition: all ease-in-out .5s;
   border-top-left-radius: 50%;
   border-bottom-right-radius: 50%;
}
</style>