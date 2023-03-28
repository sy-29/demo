<template>
   <el-dialog
      v-model="visible2"
      @close="close"
      width="87%">
      <FormContact @close="close"/>
   </el-dialog>
</template>
<script>
import useStore from '@/stores/index';
import FormContact from './formContact.vue';

export default {
   components: { FormContact },
   props: {
      visible: { type: Boolean, required: true },
   },
   data() {
      const state = useStore();
      return {
         visible2: this.visible,
         state
      }
   },
   mounted(){
      
   },
   methods: {
      open() {
         this.visible2 = true;
      },
      close() {
         this.state.modal = false;
      },
      toggle() {
         this.visible2 = !this.visible2;
      }
   },
   watch: {
      'visible'(v) {
         this.visible2 = v;
      }
   }
}
</script>