<template>
   <a @click="openBtn" class="btn_start"  href="javascript:;">
      {{$t("nav.eng")}}
   </a> 
 </template>
<script>
import useStore from '@/stores/index';
export default {
  data() { 
    const state = useStore();
    return {
      state,
    }
  }, 
  mounted(){
   
  },
  methods:{
    openBtn(){
      this.state.modal = true;
    }
  } 
}
</script>
