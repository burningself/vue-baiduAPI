<template>
    <!--百度地图容器-->
    <div id="map">
        222
    </div>
</template>
<script>
    import {tChange} from "../table/tChange.js"
    import {MP} from './map.js'
    export default{
        data(){
            return {
                map:'',
            }
        },
        methods:{
             //创建和初始化地图函数
          initMap(){
            this.createMap();//创建地图
            this.setMapEvent();//设置地图事件
            this.addMapControl();//向地图添加控件
            this.addMapOverlay();//向地图添加覆盖物
            this.bZhu();
          },
          createMap(){ 
            this.map = new BMap.Map("map"); 
            this.map.centerAndZoom(new BMap.Point(116.403874,39.914889),12);
          },
          setMapEvent(){
            this.map.enableScrollWheelZoom();
            this.map.enableKeyboard();
            this.map.enableDragging();
            this.map.enableDoubleClickZoom()
          },
          addClickHandler(target,window){
            target.addEventListener("click",function(){
              target.openInfoWindow(window);
            });
          },
          addMapOverlay(){
          },
          //向地图添加控件
          addMapControl(){
            var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
            this.map.addControl(scaleControl);
            var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
            this.map.addControl(navControl);
            var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
            this.map.addControl(overviewControl);
          },
          bZhu(){
              // var point = new BMap.Point(116.404, 39.915);
              // map.centerAndZoom(point, 15);
              // 编写自定义函数,创建标注	
              var json_data = [[116.404,39.915],[116.383752,39.91334],[116.384502,39.932241]];
              var pointArray = new Array();
              for(var i=0;i<json_data.length;i++){
                var marker = new BMap.Marker(new BMap.Point(json_data[i][0], json_data[i][1])); // 创建点
                 this.map.addOverlay(marker);    //增加点
                pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
                marker.addEventListener("click",this.tableChange);
              }
              //让所有点在视野范围内
              this.map.setViewport(pointArray);
              //获取覆盖物位置
          },
          tableChange(){
              tChange();
          }
        },
        mounted(){  
         console.log(6);
         this.$nextTick(function(){  
            MP().then(BMap => {  
                  this.initMap();
            })
         })
      }
    }
</script>
<style>
    #map{
        width:100%;
        height:550px;
        border:#ccc solid 1px;
        font-size:12px
    }
</style>