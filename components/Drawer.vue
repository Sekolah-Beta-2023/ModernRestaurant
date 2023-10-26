<script setup>
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore();

</script>

<template>
   <div class="drawer-content">
      <div class="drawer-header">
         <h3>Your Cart</h3>
         <button @click="$emit('closeDrawer')">
            <Icon name="ic:baseline-plus" size="33" />
         </button>
      </div>

      <hr>

      <div class="drawer-body">
         <h4 v-if="!cartStore.items.length">Your Cart is Empty</h4>

         <div v-else>
            <div class="product-list">
               <div v-for="product in cartStore.items" class="card">
                  <div class="left">
                     <img src="~/assets/images/salad.png" alt="">
                     <span>{{ product.title }}</span>
                  </div>
                  <div class="center">
                     <button @click="cartStore.decrementProduct(product.id)">-</button>
                     {{ product.count }}
                     <button @click="cartStore.incrementProduct(product.id)">+</button>
                  </div>
                  <div class="right">
                     <span>
                        Rp {{ product.count * product.price }}
                     </span>
                  </div>
               </div>
            </div>

            <div class="drawer-footer">
               <div class="btn-action">
                  <button class="btn-delete" @click="cartStore.clearCart">Clear Cart</button>
                  <button class="btn-checkout">Pay Rp. {{ cartStore.totalPrice }}</button>
               </div>
            </div>
         </div>
      </div>

   </div>
</template>

<style scoped>
.drawer-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px 10px;
}

.drawer-header button {
   cursor: pointer;
   background-color: #FAF0E6;
   border-style: none;
}

.product-list {
   padding: 20px;
   height: 350px;
   overflow-y: auto;
   margin-top: 10px;
}

.product-list::-webkit-scrollbar {
   width: 5px;
}
.product-list::-webkit-scrollbar-thumb {
   background-color: black;
   border-radius: 20px;
}

.card {
   display: flex;
   justify-content: space-between;
   border-bottom: 2px dashed black;
}

.card img {
   width: 100px;
}

.card .left {
   display: flex;
   align-items: center;
}

.card .center {
   display: flex;
   align-items: center;
}

.left span {
   margin-left: 15px;
}

.card .right {
   display: flex;
   align-items: center;
}

.drawer-footer {
   position: absolute;
   bottom: 20px;
   width: 100%;
}

.drawer-footer .btn-action {
   display: flex;
   justify-content: space-between;
   padding: 0px 20px;
}

.drawer-footer button {
   width: 48%;
   padding: 10px;
   cursor: pointer;
}

.btn-delete {
   background-color: #FAF0E6;
   border: 2px solid #D80032;
   color: #D80032;
   transition: all ease-in-out 0.5s;
}

.btn-delete:hover {
   background-color: #D80032;
   color: #FAF0E6;
   transition: all ease-in-out 0.5s;
}

.btn-checkout {
   background-color: #FAF0E6;
   border: 2px solid green;
   color: green;
   transition: all ease-in-out 0.5s;
}
.btn-checkout:hover {
   background-color: green;
   color: #FAF0E6;
   transition: all ease-in-out 0.5s;
}
</style>