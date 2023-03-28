<template>
   <footer class="footer">
      <div class="box">
         <p class="copyright">Copyright © 2023 Ignite Vision</p>
      </div>
   </footer>
</template>
<style scoped lang="less">
.footer{
   width: 100%;
   margin:0 auto;
  // background-color: @light;
   .box{
      max-width: @max-width;
      margin:0 auto;
      padding: 1rem;
      text-align: @center;
      p{
         color: @dark;
      }
   }
}
</style>