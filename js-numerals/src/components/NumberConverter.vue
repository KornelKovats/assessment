<template>
  <section>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="number" placeholder="Enter your number here"/>
    <button @click="convertToWord">Convert</button>
    <p>{{ numberInWord }}</p>
  </section>
</template>

<script>
import * as constants from '../utils/constants';

export default {
  name: 'NumberConverter',
  props: {
    msg: String,
  },
  data() {
    return {
      number: null,
      numberInWord: '',
      constants,
    };
  },
  methods: {
    convertToWord() {
      this.numberInWord = this.number;
    },
  },
};
</script>

<style>
</style>
