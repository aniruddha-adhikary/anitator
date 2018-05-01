<template>
  <div>
    <div class="row">
      <textarea cols="30" rows="10" class="form-control code">{{store.getCode() }}</textarea>
    </div>
    <div class="spacer"></div>
    <div class="row text-center">
      <div class="col-12">
        <button class="btn btn-success" v-on:click="store.reset()">Start Over</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from "../store/basic";

  export default {
    name: "Result",
    data: function () {
      return {
        store
      }
    }
  }
</script>

<style scoped>
  textarea.code {
    font-family: monospace;
  }

  div.spacer {
    margin-top: 50px;
  }
</style>
