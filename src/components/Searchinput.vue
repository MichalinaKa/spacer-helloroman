<template>
  <div class="searchWrapper">
    <div class="search">
      <label for="search">Search</label>
      <input name="search" id="search" :class="{dark}" :value="value" @input="handleChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchinput",
  props: {
    value: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    }
  }
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

.dark {
  color: #1e3d4a;
  border-bottom: 1px solid #1e3d4a;
}
.dark:focus {
  outline: none;
  box-shadow: 0 15px 20px -8px #1e3d4a;
}
</style>