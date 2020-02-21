<template>
  <div class="claimWrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">
      Start your journey through our amazing galaxy and discover places you have
      never been before ;)
    </p>
    <p class="subclaim">Type anything space-related to start your journey..</p>
  </div>
</template>

<script>
export default {
  name: "Claim"
};
</script>

<style lang="scss" scoped>
.claimWrapper {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.claim {
  font-size: 50px;
  margin: 0;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
}
.subclaim {
  font-size: 15px;
  margin-top: 15px;
}
</style>
