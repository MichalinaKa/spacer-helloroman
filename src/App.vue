<template>
  <div class="app">
    <!-- <div class="nav">
      <router-link to="/">spacer</router-link>|
      <router-link to="/about">about</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");

* {
  box-sizing: border-box;
  font-family: "Space Mono", monospace;
  color: white;
  margin: 0;
  padding: 0;
}
</style>
