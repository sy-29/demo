<template>
   <header class="header">
      <el-menu
         :default-active="activeIndex"
         class="el-menu-demo"
         mode="horizontal"
         :ellipsis="false"
         @select="handleSelect"
      >
         <el-menu-item index="0">LOGO</el-menu-item>
         <div class="flex-grow" />
         <el-menu-item index="1">Processing Center</el-menu-item>
         <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
         </el-sub-menu>
         <div>
            <el-dropdown trigger="click" split-button type="primary">
               <span class="el-dropdown-link">
                  {{currentLang}}
                  <el-icon class="el-icon--right">
                  <arrow-down />
                  </el-icon>
               </span>
               <template #dropdown>
                  <el-dropdown-menu>
                     <template v-for="(lang,i) in languages" :key="i">
                        <el-dropdown-item @click="changeLang(lang.value)">{{lang.name}}</el-dropdown-item>  
                     </template>             
                  </el-dropdown-menu>
               </template>
            </el-dropdown>  
            <ButtonCostEstimate/> 
         </div>
      </el-menu>        
   </header>
</template>
<script>
import ButtonCostEstimate from "@/components/buttonNormal";
export default {
   name: 'header',
   components: {
      ButtonCostEstimate,
   },
   data(){
      return{
         currentLang: 'zh_CHT',
         languages:[
            {
               name: '简',
               value: 'zh_CN'
            },{
               name: '繁',
               value: 'zh_CHT'
            },{
               name: 'EN',
               value: 'en_US'
            }
         ],
         activeIndex: '1'
      }    
   },  
   mounted(){
      
   },
   methods: {
      changeLang(lang){
         this.currentLang = lang;
         this.$i18n.locale = lang;
         localStorage.setItem('locale',lang);
      },
      handleSelect(key, keyPath){
         console.log(key, keyPath)
      } 
   }
}
</script>
<style scoped lang="less">
.header{   
   //width: 100%;
   //  background-color: #ffffff;
   .logo{
      font-size: @fontSize;
      user-select: none;
      .border();
      background: @bg; 
      color: if(@bg-light, black, white);      
      @media (min-width: @sizes[tablet]) {
         display: inline-block;
      }      
   }
   .el-menu--horizontal{
      white-space: normal;
   }
}
</style>