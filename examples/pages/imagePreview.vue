<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 19:16:53
 * @LastEditTime: 2019-09-10 19:31:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <section class="wrap">
    <section class="btn-wrap">
      <d-button class="btn" @click="handleClick1" >show imagePreview</d-button>
      <d-button class="btn" @click="handleClick2">show dot indicator imagePreview</d-button>
      <d-button class="btn" @click="handleClick3">show default index imagePreview</d-button>
      <d-button class="btn" @click="handleClick4">show loop imagePreview</d-button>
    </section>
    <d-imagePreview :visible="visible" :imgs="data" v-model="visible"></d-imagePreview>
    <d-imagePreview :visible="visible1" :imgs="data" indicatorType="dot" v-model="visible1"></d-imagePreview>
    <d-imagePreview :visible="visible2" :imgs="data" :initialIndex="2" v-model="visible2"></d-imagePreview>
    <d-imagePreview :visible="visible3" :imgs="data" loop  v-model="visible3"></d-imagePreview>
  </section>
</template>

<script>
export default {
  name:'picker',
  data(){
    return {
      data: [{
        url:require('../../src/assets/images/imagePreview-1.jpg')
      },{
        url:require('../../src/assets/images/imagePreview-2.jpg')
      },{
        url:require('../../src/assets/images/imagePreview-3.jpg')
      },{
        url:require('../../src/assets/images/imagePreview-4.jpg')
      }],
     data1: [[2011,2012,2013,2014,2015,2016,2017,2018,2019],['春','夏','秋','冬']],
      data2:[
        {
          label: '北京',
          value: '01',
          children: [
            {
              label: '东城区',
              value: '01-1',
            },
            {
              label: '西城区',
              value: '01-2',
            },
            {
              label: '崇文区',
              value: '01-3',
            },
            {
              label: '宣武区',
              value: '01-4',
            },
          ],
        },
        {
          label: '浙江',
          value: '02',
          children: [
            {
              label: '杭州',
              value: '02-1',
              children: [
                {
                  label: '西湖区',
                  value: '02-1-1',
                },
                {
                  label: '上城区',
                  value: '02-1-2',
                },
                {
                  label: '江干区',
                  value: '02-1-3',
                },
                {
                  label: '下城区',
                  value: '02-1-4',
                },
              ],
            },
            {
              label: '宁波',
              value: '02-2',
              children: [
                {
                  label: 'xx区',
                  value: '02-2-1',
                },
                {
                  label: 'yy区',
                  value: '02-2-2',
                },
              ],
            },
            {
              label: '温州',
              value: '02-3',
            },
            {
              label: '嘉兴',
              value: '02-4',
            },
            {
              label: '湖州',
              value: '02-5',
            },
            {
              label: '绍兴',
              value: '02-6',
            },
          ],
        },
      ],
      value: ['夏'],
      value2:['02','02-1','02-1-2'],
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
      title:'',
      format:['${value}年']
    }
  },
  methods: {
    handleClick1(){
      this.visible = true
    },
    handleClick2(){
      this.visible1 = true
    },
    handleClick3(){
      this.title = ' linkage data picker'
      this.visible2 = true
    },
    handleClick4(){
      this.title = ' promise picker'
      this.visible3 = true
    },
    onConfirm(){
    },
    onConfirmPromise(value,items){
      let labels = items.map(item=>{return item.label})
      return new Promise((resolve)=>{
        this.$Toast(`当前选择: ${labels.join('-')}`)
        setTimeout(resolve, 2000);
      })
    },
    dataChange(){
    },
  }
}
</script>
<style lang="less" scoped>
  .btn-wrap{
    background-color: #f5f5f9;
    padding: 0 15px 40px;
    .btn{
      margin-top: 20px;
    }
  }
</style>
<style>
  .cancel-btn{
    color: #f4333c !important;
  }
  .confirm-btn{
    color: #6abf47 !important;
  }
</style>



