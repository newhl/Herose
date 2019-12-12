<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-slider></app-slider>
        <!-- <app-list></app-list> -->
        <router-view class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./app-header";
import appSlider from "./app-slider";
// import appList from "./app-list";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    "app-header": appHeader,
    "app-slider": appSlider
    // "app-list": appList
  }
};
</script>

<style>
</style>
