<template>
  <div id="app"> 
    <a class="readme" href="/README.md"> README</a>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.readme {
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.8rem;
}
</style>
