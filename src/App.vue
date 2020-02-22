<template>
  <div :class="[{flexStart: step === 1}, 'wrapper']">
    <transition name="slide">
      <img src="./assets/moon.svg" class="logo" v-if="step === 1" />
    </transition>
    <transition name="fade">
      <Heroimage v-if="step === 0" />
    </transition>
    <Claim v-if="step === 0" />
    <Searchinput v-model="searchValue" @input="handleInput" :dark="step === 1" />
    <div class="results" v-if="results && !loading && step === 1">
      <Item
        v-for="item in results"
        :item="item"
        :key="item.data[0].nasa_id"
        @click.native="handleModalOpen(item)"
      />
    </div>
    <div class="loader" v-if="step === 1 && loading"></div>
    <Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false" />
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
import Claim from "@/components/Claim.vue";
import Searchinput from "@/components/Searchinput.vue";
import Heroimage from "@/components/Heroimage.vue";
import Item from "@/components/Item.vue";
import Modal from "@/components/Modal.vue";

const API = "https://images-api.nasa.gov/search";

export default {
  name: "App",
  components: {
    Modal,
    Heroimage,
    Item,
    Claim,
    Searchinput
  },
  data() {
    return {
      modalOpen: false,
      modalItem: null,
      loading: false,
      step: 0,
      searchValue: "",
      results: []
    };
  },
  methods: {
    handleModalOpen(item) {
      this.modalOpen = true;
      this.modalItem = item;
    },

    handleInput: debounce(function() {
      this.loading = true;
      console.log(this.searchValue);
      axios
        .get(`${API}?q=${this.searchValue}&media_type=image`)
        .then(response => {
          this.results = response.data.collection.items;
          this.loading = false;
          this.step = 1;
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
  margin: 0;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
  &.flexStart {
    justify-content: flex-start;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo {
  position: absolute;
  top: 50px;
  width: 50px;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.8s ease;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.results {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.loader {
  margin-top: 100px;
  display: inline-block;
  width: 80px;
  height: 80px;
  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
}
.loader:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #1e3d4a;
  border-color: #1e3d4a transparent #1e3d4a transparent;
  animation: loading 1.2s linear infinite;
  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>


