<template>
  <section>
    <h1>{{ msg }}</h1>
    <input type="number" v-model="number" placeholder="Enter your number here" required/>
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
      if (this.number !== null) {
        this.numberInWord = this.number;
      }
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
input{
    width: 80%;
    padding: 15px 22px;
    margin: 10px 5px;
    box-sizing: border-box;
}
button{
  color: #494949 !important;
  text-transform: uppercase;
  background: #ffffff;
  margin-top: 20px;
  padding: 20px;
  border: 4px solid #494949 !important;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
}
button:hover {
  color: #6692c6 !important;
  border-radius: 50px;
  border-color: #6692c6 !important;
  transition: all 0.3s ease 0s;
}
</style>
