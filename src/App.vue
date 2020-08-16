<template>
  <div id="app" class="container-sm"> 
    <a class="readme" href="/README.md"> README</a>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  text-align: center;
}
.readme {
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.8rem;
}
</style>
