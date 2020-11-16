<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    
  </div>
</template>

<script>

</script>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
  font-family:Microsoft Yahei;
}

body{
  font-weight: 1000 !important;
}

a{
  text-decoration: none;
}

a:-webkit-any-link:hover{
  text-decoration: none;
}

#app{
  // height: 100%;
  z-index: -5;
}

</style>
