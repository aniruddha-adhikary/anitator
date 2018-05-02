<template>
  <div>
    <p>
      <sentence-part
        v-for="(part, index) in store.state.currentSentence"
        :content="part.text" :index="index" :key="index">
      </sentence-part>
    </p>
    <div class="spacer"></div>
    <div class="buttons row">
      <button class="btn btn-primary"
              v-on:click="store.assignTag(tag)"
              v-for="tag of tags">{{ tag.display }} [{{ tag.shortKey }}]
      </button>
    </div>
    <div class="spacer"></div>
    <div class="buttons row">
      <button class="btn btn-warning"
              autofocus
              v-if="store.hasPreviousSentence()"
              v-on:click="store.previousSentence()">Previous
      </button>
      <button class="btn btn-info"
              autofocus
              v-if="store.hasNextSentence()"
              v-on:click="store.nextSentence()">Next
      </button>
      <button class="btn btn-success" v-on:click="store.state.finished = true">Finish</button>
    </div>
  </div>
</template>

<script>
  import SentencePart from "./SentencePart";
  import {store} from "../store/basic";
  import {tagSet} from "../store/tags";

  export default {
    name: "Annotator",
    components: {SentencePart},
    data: function () {
      return {
        store,
        tags: tagSet
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .spacer {
    margin-top: 50px;
  }

  .btn {
    margin-left: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  p {
    text-align: center;
  }
</style>
