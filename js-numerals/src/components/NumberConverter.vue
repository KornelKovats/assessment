<template>
  <section>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="number" placeholder="Enter your number here"/>
    <button @click="convertToWord">Convert</button>
    <p>{{ "Your number in words: " + numberInWord }}</p>
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

<style scoped>
section {
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button{
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 20px;
  margin: 20px;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
}
</style>
