<template>
  <div class="container-fluid">
    <div id="app" class="row">
      <div class="col-3" v-if="!state.finished && state.currentSentence.length">
        <Sidebar></Sidebar>
      </div>
      <Annotator class="col-9 m" v-if="!state.finished && state.currentSentence.length"></Annotator>
      <Entry class="col-12" v-if="!state.finished && !state.currentSentence.length"></Entry>
      <Result class="col-12" v-if="state.finished"></Result>
    </div>
  </div>
</template>

<script>
  import Annotator from "./components/Annotator";
  import Entry from "./components/Entry";
  import {store} from "./store/basic";
  import Result from "./components/Result";
  import Sidebar from "./components/Sidebar";

  export default {
    name: 'app',
    components: {Sidebar, Result, Entry, Annotator},
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



  .m {
    margin-top: 30px;
  }
</style>
