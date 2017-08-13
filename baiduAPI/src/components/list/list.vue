<template>
    <ul class="listUl">
      <li >
         <input type="text" placeholder="输入名称"><input type="button" value="go">         
      </li>
      <li 
        v-for="info in infoList"
        :class="{ present:info.data===changeInfo }" 
        @click="turn(info)" 
        @mouseover="changeColor($event)"
        @mouseout="recoverColor($event)"
       >
       <router-link :to="info.rout">{{info.data}}</router-link>    
      </li>
      
    </ul>
 </template>
<script>
    import $ from 'jquery'
    var infoList=[
                    {data:'待办项',rout:'/fir'},
                    {data:'待',rout:'/second'},
                    {data:'待办',rout:'/third'},
                    {data:'待办项1',rout:'/fourth'},
                ];

    export default{
        data(){
            return {
                infoList:infoList,
                changeInfo:infoList[0].data,
                
            }
        },
        methods:{
            turn(data){                 //点击切换类事件
                console.log(data);
                this.changeInfo=data.data;    //通过改变changeInfo内容来更改表达式的判断结果
                console.log(this.changeInfo);
            },
            changeColor(obj){             //移入变色
                
                var target=obj.currentTarget;
                $(target).addClass('overClass');
            },
            recoverColor(obj){
                var target=obj.currentTarget;
                $(target).removeClass('overClass');
            }   
        }

    }
</script>
<style>
    .listUl{
      width:200px;
    }
    .listUl li{
      width:200px;
      height:50px;
      text-align:center;
      line-height:50px;
    }
    .listUl li input{
      height:30px;
    }
    .listUl li input[type="button"]{
      width:30px;
      background:#7A8585;
      color:#fff;
      line-height:30px;
    }
    .listUl li input[type="text"]{
       padding-left:10px;
       width:130px;
    }
    .listUl li.present{
        background:#BFE8A6;
    }
    .listUl li.overClass{
        background:#D0D0D0;
    }
</style>