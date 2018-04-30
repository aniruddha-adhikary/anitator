<template>
  <div class="col-12">
    <div class="row">
      <textarea cols="30" rows="10" class="form-control"
                v-model="text"></textarea>
    </div>
    <div class="row buttons">
      <button class="btn btn-success"
              :disabled="!text || !text.length"
              v-on:click="store.setText(text)">Start</button>
      <button class="btn btn-danger"
              :disabled="!text || !text.length">Reset</button>
    </div>
  </div>
</template>

<script>
  import {store} from "../store/basic";

  export default {
    name: "Entry",
    data: function () {
      return {
        store,
        text: null
      }
    }
  }
</script>

<style scoped>
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .buttons button {
    margin: 7px;
  }
</style>
