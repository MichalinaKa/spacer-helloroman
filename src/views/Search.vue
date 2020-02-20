<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input
        v-model="searchValue"
        name="search"
        id="search"
        type="text"
        @input="handleInput"
      />
      <ul>
        <li v-for="item in results" :key="item.data[0].nasa_id">
          <p>{{ item.data[0].description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
const API = "https://images-api.nasa.gov";

export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
      results: []
    };
  },
  methods: {
    handleInput: debounce(function() {
      axios
        .get(`${API}/search?q=${this.searchValue}&media_type=image`)
        .then(response => {
          this.results = response.data.collection.items;
        })
        .catch(error => {
          console.log(error);
        });
    }, 500)
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
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
  font-family: monospace;
}

input {
  height: 40px;
  border: 0;
  border-bottom: 1px solid black;
}
</style>
