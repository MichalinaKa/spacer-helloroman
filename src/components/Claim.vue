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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.claim {
  font-size: 50px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 80px;
  }
  @media (min-width: 1024px) {
    font-size: 100px;
  }
}
.subclaim {
  font-size: 15px;
  margin: 15px 0 0 0;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1.2px;
    width: 500px;
  }
}
</style>
