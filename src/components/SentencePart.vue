<template>
  <span class="container-span">
    <span :class="{part: true, selected: isSelected() }"
          v-on:click="setSelection()">
    {{content}}<span class="pos"
                     v-if="store.state.currentSentence[index].tag !== null">{{store.state.currentSentence[index].tag.display}}</span><span
      class="spacer"> </span>
  </span>
  </span>
</template>

<script>
  import {store} from "../store/basic";

  export default {
    name: "SentencePart",
    props: ['content', 'index'],
    data: function () {
      return {
        store
      }
    },
    methods: {
      setSelection: function () {
        store.setSelectedIndex(this.index);
      },
      isSelected: function () {
        return parseInt(this.index) === store.state.selectedIndex;
      }
    }
  }
</script>

<style scoped>
  span.part {
    font-size: 32px;
    padding: 7px;
    cursor: pointer;
  }

  span.part:hover {
    background-color: khaki;
  }

  span.selected {
    background: chartreuse;
  }

  span.spacer {
    font-size: 0.1px;
  }

  span.pos {
    font-size: 10px;
    padding: 3px;
    border-radius: 5px;
  }

  span.container-span {
    /*display: flex;*/
  }
</style>
