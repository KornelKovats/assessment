<template>
  <form class="card" @submit.prevent="convertToWord">
    <h1>{{ msg }}</h1>
    <input type="number" v-model="number" placeholder="Enter your number here" required @click="clearFields"/>
    <button type="submit">Convert</button>
    <div class="text">
      <p>{{ "Your number in word(s): " + numberInWord }}</p>
    </div>
  </form>
</template>

<script>
import { constants } from '../utils/constants';
import { convertion } from '../utils/converter';

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
        this.numberInWord = convertion.numberToWords(this.number);
      }
    },
    clearFields() {
      this.numberInWord = '';
      this.number = null;
    },
  },
};
</script>

<style scoped>
input{
    width: 80%;
    padding: 15px 22px;
    margin: 10px 5px;
    box-sizing: border-box;
}
.card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 450px;
    height: 450px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid black;
    -webkit-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.55);
    -moz-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
    text-align: left;
}
p {
  max-width: 80%;
}
.text{
  width: 80%;
  text-align: left;
}
button{
  color: #494949 !important;
  text-transform: uppercase;
  background: #ffffff;
  width: 80%;
  height: 60px;
  margin-top: 20px;
  padding: 20px;
  border: 4px solid #494949 !important;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
}
button:hover {
  color: #6692c6 !important;
  border-radius: 10px;
  border-color: #6692c6 !important;
  transition: all 0.3s ease 0s;
}
</style>
