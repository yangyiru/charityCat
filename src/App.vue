<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
//引入normalize scss
@import 'normalize-scss';
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
