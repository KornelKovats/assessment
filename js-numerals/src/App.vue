<template>
  <NumberConverter msg="Number conversion tool"></NumberConverter>
</template>

<script>
import NumberConverter from './components/NumberConverter.vue';

export default {
  name: 'App',
  components: {
    NumberConverter,
  },
};
</script>

<style>
body{
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,0) 0%, rgba(148,187,233,1) 100%);
}
</style>
