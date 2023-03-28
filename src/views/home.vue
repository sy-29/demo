<template>
   <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
   </div>
   <div class="box">
      {{$t("nav.eng")}}
   </div>
   <div class="box">
      <Edit style="width: 1em; height: 1em; margin-right: 8px" />
      <Share style="width: 1em; height: 1em; margin-right: 8px" />
      <Delete style="width: 1em; height: 1em; margin-right: 8px" />
      <Search style="width: 1em; height: 1em; margin-right: 8px" />
   </div>
   <div class="box">
		<el-checkbox-group v-model="cols.selections">
			<el-checkbox v-for="v, k in cols.presets" :key="v" :label="v" size="mini">{{ k }}</el-checkbox>
		</el-checkbox-group>
		<div slot="footer" class="dialog-footer">
			<el-button size="small" @click="cols.selected = [];cols.selections = []" icon="el-icon-close">Cancel</el-button>
			<el-button size="small" type="primary" @click="displayColsConfirm" icon="el-icon-check">Confirm</el-button>
		</div>
      <el-link :underline="false" icon="el-icon-setting" @click="cols.selections = cols.selected; ">Display Columns</el-link>
   </div>
   <div class="box">
      <el-table :data="items" fit>
         <el-table-column v-if="cols.selected.includes('country_language')" label="Language" prop="country_language"></el-table-column>
         <el-table-column v-if="cols.selected.includes('industry')" label="Industry" prop="industry"></el-table-column>
         <el-table-column v-if="cols.selected.includes('study_type')" label="Study Type" prop="study_type"></el-table-column>
         <el-table-column v-if="cols.selected.includes('collects_pii')" label="Collects PII" prop="collects_pii"></el-table-column>
         <el-table-column v-if="cols.selected.includes('survey_group_ids')" label="Survey Group IDs" prop="survey_group_ids"></el-table-column>
         <el-table-column v-if="cols.selected.includes('cpi')" label="CPI" prop="cpi"></el-table-column>
         <el-table-column v-if="cols.selected.includes('total_client_entrants')" label="Total Client Entrants" prop="total_client_entrants"></el-table-column>
         <el-table-column v-if="cols.selected.includes('total_remaining')" label="Total Remaining" prop="total_remaining"></el-table-column>
         <el-table-column v-if="cols.selected.includes('completion_percentage')" label="Completion Percentage" prop="completion_percentage"></el-table-column>
         <el-table-column v-if="cols.selected.includes('conversion')" label="Conversion" prop="conversion"></el-table-column>
         <el-table-column v-if="cols.selected.includes('overall_completes')" label="Overall Completes" prop="overall_completes"></el-table-column>
         <el-table-column v-if="cols.selected.includes('mobile_conversion')" label="Mobile Conversion" prop="mobile_conversion"></el-table-column>
         <el-table-column v-if="cols.selected.includes('earnings_per_click')" label="Earnings Per Click" prop="earnings_per_click"></el-table-column>
         <el-table-column v-if="cols.selected.includes('length_of_interview')" label="LOI" prop="length_of_interview"></el-table-column>
         <el-table-column v-if="cols.selected.includes('bid_length_of_interview')" label="B-LOI" prop="bid_length_of_interview"></el-table-column>
         <el-table-column v-if="cols.selected.includes('bid_incidence')" label="IR" prop="bid_incidence"></el-table-column>
      </el-table>
   </div>
   <div class="flexBox">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <el-input v-model="emo" v-emoji placeholder="enter"/>
   </div>
</template>
<style lang="less" scoped>
.box{
   background-color: #cccccc;
   padding: 1rem;
}
.grid{
   display: grid;
   //grid-template-columns: repeat(auto-fill, 25%);
   justify-items: center;
   align-items: center;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 100px 100px;
   grid-auto-flow: row dense;
   //place-items: start end;
   // grid-row-gap: 20px;
   // grid-column-gap: 20px;
   grid-gap: 20px 20px;
   .item{
      text-align: @center;
      background-color: @light;
   }
}
.flexBox{
   display: -webkit-flex; /* Safari */
   display: flex;
   flex-direction: column;//row（默认值）：主轴为水平方向，起点在左端;row-reverse：主轴为水平方向，起点在右端。column：主轴为垂直方向，起点在上沿。column-reverse：主轴为垂直方向，起点在下沿。
   margin: 3rem auto;
   justify-content: center;
   flex-wrap: wrap;//nowrap（默认）：不换行。wrap换行，第一行在上方。wrap-reverse：换行，第一行在下方。
   .item{
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      background-color: #cccccc;
      text-align: center;
      margin: 1rem;
   }
}
</style>
<script>
import { mokeGet } from '@/api';
export default{
   data(){
      return {
         cols: {
            presets: {
               "Language": "country_language",
               "Industry": "industry",
               "Study Type": "study_type",
               "Collects PII": "collects_pii",
               "Survey Group IDs": "survey_group_ids",
               "CPI": "cpi",
               "Total Client Entrants": "total_client_entrants",
               "Total Remaining": "total_remaining",
               "Completion Percentage": "completion_percentage",
               "Conversion": "conversion",
               "Overall Completes": "overall_completes",
               "Mobile Conversion": "mobile_conversion",
               "Earnings Per Click": "earnings_per_click",
               "LOI": "length_of_interview",
               "B-LOI": "bid_length_of_interview",
               "IR": "bid_incidence"
            }, 
            selections: [], 
            selected: [] //JSON.parse(localStorage.getItem("lucid:surveys:cols") || "[]")
         },
         items: [],
         emo: ''
      }
   },
   mounted(){
     // this.getList()
   },
   methods:{
      displayColsConfirm() {
         const { cols } = this;
         cols.selected = cols.selections;
         //localStorage.setItem("lucid:surveys:cols", JSON.stringify(cols.selected));
      },
      getList(){
         mokeGet().then( res=>{
           // console.log(res)
         })
      }
   }
}
</script>