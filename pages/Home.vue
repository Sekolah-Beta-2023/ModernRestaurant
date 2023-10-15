<template>
   <div class="container">
      <div class="header-content">
         <div class="header-text">
            <h1>Sultan Bagindo</h1>
            <p>Restaurant</p>

            <span>--- Free Home Delivery ---</span>
            <NuxtLink to="/category">
               <button>Get More</button>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .container {
      height: 100vh;
      padding-left: 50px;
   }

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