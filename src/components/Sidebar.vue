<template>
  <div class="row sidebar">
    <div class="col-12">
      <div class="row">
        <div class="col-12 content">
          <div class="row bits"
               v-for="(sent, index) in store.state.sentences" :key="index"
               :class="{active: index === store.state.sentenceIndex}"
               v-on:click="store.changeSentence(index)">
            <p>{{index + 1}}. {{ sent.map((s) => s.text).join(" ") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from "../store/basic";

  export default {
    name: "Sidebar",
    data: function () {
      return {
        store
      }
    },
  }
</script>

<style scoped>
  .sidebar {
    background-color: #34495e;
    color: white;
    height: 100vh;
    padding-top: 15px;
    overflow-y: scroll;
  }

  .sidebar h3 {
    padding-left: 15px;
  }

  .bits {
    font-size: 12px;
    padding: 5px 15px;
  }

  .bits:hover {
    background-color: #2c3e50;
    cursor: pointer;
  }

  .active {
    background-color: #7f8c8d;
  }
</style>
