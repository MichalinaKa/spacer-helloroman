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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}
.search {
  display: flex;
  flex-direction: column;
  width: 250px;
}
label {
  text-align: center;
  font-size: 2.5em;
}

input {
  background: none;

  height: 40px;
  border: 0;
  border-bottom: 1px solid white;
}
</style>