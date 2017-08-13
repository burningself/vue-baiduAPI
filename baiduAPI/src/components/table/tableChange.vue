<template>
    <div class="box-con">
        <div class="box-conselect">
            <div class="box-close">关闭</div>
            <div class="box-conTitle">
                <span>代办项</span>
                <span>管理指令</span>
                <span>健康指数</span>
                <span>管理动态</span>
            </div>
            <div class="box-conContain">
                <div>代办项</div>
                <div>管理指令</div>
                <div>健康指数</div>
                <div>管理动态</div>
            </div>
        </div>
    </div>
</template>

<sctipt>

</sctipt>

<style>
.box-con{
    position:absolute;
    top:0;bottom:0;
    left:0;right:0;
    margin:auto;
    width:300px;
    height:300px;;
    background:#ccc;
    display:none;
 }
.box-conselect{
    width:400px;
    height:300px;
    background:#ccc;
    position:relative;
}
.box-close{
    position:absolute;
    width:50px;
    height:50px;
    top:-20px;
    left:0;
    cursor:pointer;
}
.box-conTitle{
   width:inherit;
    height:40px;
}
.box-conTitle span{
   width:100px;
   height:inherit;
   float:left;
   background:#333333;
   text-align:center;
   color:#fff;
   line-height:40px;
   cursor:pointer;
}
.box-conTitle span:hover{
   background:#222;
}
.box-close{
   width:50px;
}
.box-conContain{
   width:300px;
   height:200px;
   overflow:hidden;
}
.box-conContain div{
   width:inherit;
   height: 200px;
}
</style>