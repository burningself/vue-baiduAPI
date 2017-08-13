<template>
  <div id="app">
      <header></header>
      <article>
          <list></list>
      </article>
      <aside>
        <router-view></router-view>
        <changeTable></changeTable>
      </aside>
  </div>
</template>

<script>
  import bdmap from "./components/map/map.vue"
  import changeTable from "./components/table/tableChange.vue"
  import list from "./components/list/list.vue"

  export default {
    components:{
      list,
      bdmap,
      changeTable
    },  
  }

</script>

<style>
    body,ul,input{
      padding:0;
      margin:0;
    }
    body{
      background:#EBEBEB;
    }
    input{
      border:none;
    }
    li{
      list-style:none;
    }
    header{
      height:80px;
      background:#3E8CBC;
    }
    article{
      float:left;
    }
     aside{
      height:550px;
      margin-left:200px;
    }
</style>
