<template>
  <div class="searchWrapper">
    <Claim />
    <div class="search">
      <label for="search">Search</label>
      <input v-model="searchValue" name="search" id="search" type="text" @input="handleInput" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchinput"
};
</script>

<style lang="scss" scoped>
.searchWrapper {
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.search {
  display: flex;
  flex-direction: column;
  width: 250px;
}
label {
  text-align: center;
  margin-bottom: 10px;
  font-size: 2em;
  color: rgb(247, 217, 247);
}

input {
  color: white;
  text-align: center;
  font-size: 15px;
  background: none;
  height: 40px;
  border: 0;
  border-bottom: 1px solid white;
  transition: box-shadow 0.5s;
  @media (min-width: 1024px) {
    font-size: 25px;
  }
}

input:focus {
  background: none;
  outline: none;
  box-shadow: 0 15px 20px -8px white;
}
</style>