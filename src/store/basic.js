import {tagSet} from "./tags";

function toObject(sentence) {
  const parts = sentence.match(/\S+/g) || [];

  return parts.map(function (p) {
    return {
      text: p,
      tag: null
    }
  });
}

function makeTag(part) {
  if (part.tag !== null) {
    return part.tag.tag;
  } else {
    return '';
  }
}

export const store = {
  state: {
    selectedIndex: 0,
    currentSentence: [],
    sentences: [],
    sentenceIndex: 0,
    finished: false
  },
  reset: function() {
    this.state.sentenceIndex = 0;
    this.state.selectedIndex = 0;
    this.state.currentSentence = [];
    this.state.setSentences = [];
    this.state.finished = false;
  },
  setSentence: function (sentence) {
    this.state.currentSentence = sentence;
    this.state.selectedIndex = 0;
  },
  setSentences: function (sentences) {
    this.state.sentences = sentences.map(toObject);
    this.state.sentenceIndex = 0;
    this.setSentence(this.state.sentences[0]);
  },
  changeSentence(i) {
    this.state.sentenceIndex = i;
    this.setSentence(this.state.sentences[i])
    return this.state.currentSentence;
  },
  nextSentence() {
    return this.changeSentence(this.state.sentenceIndex + 1);
  },
  previousSentence() {
    return this.changeSentence(this.state.sentenceIndex - 1);
  },
  hasNextSentence() {
    return this.state.sentenceIndex + 1 < this.state.sentences.length;
  },
  hasPreviousSentence() {
    return this.state.sentenceIndex > 0;
  },
  setText: function (text) {
    const sentences = text
      .split(/(\.|।)/g)
      .map((v) => v.trim())
      .filter((v) => v !== "." && v !== "।" && v !== "");
    console.log(sentences);
    this.setSentences(sentences);
  },
  setSelectedIndex: function (index) {
    this.state.selectedIndex = index;
  },
  resetSelectedIndex: function (index) {
    this.state.selectedIndex = 0;
  },
  getMaxIndex: function () {
    return this.state.currentSentence.length - 1;
  },
  assignTag: function (tag) {
    if (!this.state.currentSentence.length) return;
    this.state.currentSentence[this.state.selectedIndex].tag = tag;
    this.nextSelection();
  },
  nextSelection: function () {
    if (this.state.selectedIndex < store.getMaxIndex())
      this.state.selectedIndex++;
    else
      this.state.selectedIndex = 0;
  },
  previousSelection: function () {
    if (store.state.selectedIndex > 0)
      store.state.selectedIndex--;
    else
      store.state.selectedIndex = store.getMaxIndex();
  },
  getCode() {
    return this.state.sentences
      .map((s) => [s.map((p) => p.text).join(" "),
        {tags: s.map(makeTag)}]);
  }
};

const KEYS = tagSet.map(function (tag) {
  return tag.shortKey;
});

document.addEventListener('keyup', function (e) {
  if ((e.code) === 'ArrowRight') {
    store.nextSelection();
  }
  else if ((e.code) === 'ArrowLeft') {
    store.previousSelection();
  }
  else {
    const index = KEYS.indexOf(e.key.toLowerCase());
    if (index > -1) {
      store.assignTag(tagSet[index]);
    }
  }
});

// store.setSentence('কলিমদ্দি ছেলেটার সাথেই আলাপ জমানোর চেষ্টা করলো');
