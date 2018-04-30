<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center header">
        <h1>Anitator</h1>
      </div>
    </div>
    <div id="app" class="row">
      <Annotator v-if="!state.finished && state.currentSentence.length"></Annotator>
      <Entry v-if="!state.finished && !state.currentSentence.length"></Entry>
      <Result v-if="state.finished"></Result>
    </div>
  </div>
</template>

<script>
  import Annotator from "./components/Annotator";
  import Entry from "./components/Entry";
  import {store} from "./store/basic";
  import Result from "./components/Result";

  export default {
    name: 'app',
    components: {Result, Entry, Annotator},
    data() {
      return {
        state: store.state
      }
    }
  }
</script>

<style>
  * {
    font-family: Arial, "Helvetica Neue", Kalpurush, SolaimanLipi, 'Siyam Rupali', SutonnyOMJ, sans-serif;
  }

  .header {
    padding: 20px;
  }
</style>
