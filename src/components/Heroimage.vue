<template>
  <div class="heroImage" />
</template>

<script>
export default {
  name: "Heroimage"
};
</script>

<style>
.heroImage {
  position: fixed;
  z-index: -1;
  top: 0;
  background-image: url("../assets/cosmos.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
</style>