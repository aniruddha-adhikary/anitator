<template>
  <textarea cols="30" rows="10" class="form-control code">
    {{store.getCode() }}
  </textarea>
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
</style>
