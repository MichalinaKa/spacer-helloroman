<template>
  <div class="wrapper">
    <Heroimage />
    <Claim />
    <Searchinput />
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
import Claim from "@/components/Claim.vue";
import Searchinput from "@/components/Searchinput.vue";
import Heroimage from "@/components/Heroimage.vue";

const API = "https://images-api.nasa.gov";

export default {
  name: "App",
  components: {
    Heroimage,
    Claim,
    Searchinput
  },
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

<style lang="scss" >
@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Space Mono", monospace;
  color: white;
  margin: 0;
  padding: 0;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 30px;
  width: 100%;
  height: 100vh;
}
</style>


