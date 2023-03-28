<template>
    <headerVue />   
    <main>
      <router-view />
    </main>   
    <footerVue />
    <FormContactPopup :visible="state.modal"/>
</template>
<script>
import footerVue from '@/components/footer.vue';
import FormContactPopup from '@/components/formPop.vue';
import headerVue from '@/components/header.vue';
import useStore from '@/stores/index';
export default {
  name: 'App',
  data(){ 
    const state = useStore();
    return{
      state,
    }
  }, 
  components: {
    headerVue,
    footerVue,
    FormContactPopup
  },    
  mounted(){
  },
  methods:{
  }
}
</script>