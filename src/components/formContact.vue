<template>
   <el-form class="form" ref="form1" :model="form1" :rules="rules1" label-position="top">
      <h2>{{$t("form.title")}}</h2>
      
   </el-form>
   <el-dialog
         v-model="form2Visible"         
         width="87%"
        >
         <el-form class="form" ref="form2" :model="form2" :rules="rules2" label-position="top" >
               <h2>{{$t("form.subtit")}}</h2>
               
         </el-form>            
      </el-dialog>
      <el-dialog
         v-model="modalTips.visible"
         >
         <div class="box" v-if="modalTips.type==1">
               <h4><!--<img src="@/assets/img/Icon_submission_failed.png"/>--><br/>Submission too Frequent!</h4>
               <p>Please submit another enquiry after 5 minutes</p>
         </div>  
         <div class="box" v-else-if="modalTips.type==0">
               <h4><!--<img src="@/assets/img/Icon_submission_failed.png"/>--><br/>Submission Failed!</h4>
               <p>Please try again later.</p>
         </div>   
         <div class="box" v-else>
               <h4><!--<img src="@/assets/img/Icon_submitted_successfully.png"/>--><br/>Submitted Successfully!</h4>
               <p>Thank you for contacting us.<br/>Our team will be in touch in 3-5 working days.  </p>
               <p class="sm">A confirmation email will be sent to your email provided. <br/>If you do not see the email in your inbox, please check your junk mail folder. </p>
         </div>            
      </el-dialog>
</template>
<script>
//import request from '../utils/request';
export default {
   data() {
      const monthList={
         1: this.$t("month.mon1"),
         2: this.$t("month.mon2"),
         3: this.$t("month.mon3"),
         4: this.$t("month.mon4"),
         5: this.$t("month.mon5"),
         6: this.$t("month.mon6"),
         7: this.$t("month.mon7"),
         8: this.$t("month.mon8"),
         9: this.$t("month.mon9"),
         10: this.$t("month.mon10"),
         11: this.$t("month.mon11"),
         12: this.$t("month.mon12")
      } 
      return {
         loading: false,
         monthList,
         form2Visible: false,
         modalTips: {
            visible: false, 
            type: null
         },
      }
   },
   computed: {
      allowNext() {
         // const { form1 } = this;
         // return form1.programCategory && form1.programDate && form1.followers && form1.influencer && form1.ageGroup.length > 0 && !this.loading;
      },
      allowSubmit() {
         // const { form2 } = this;
         // return form2.name && form2.companyName && form2.district && form2.mobile && form2.email && !this.loading;
      }
   },
   mounted() {
   },
   methods: {
      submit() {
         if ( this.loading ) return;
         this.$refs["form2"].validate(valid => {
            if (valid) {           
               
            }
        })
      },
      closeTips() {
         this.$emit("close");
      }
   }
}
</script>