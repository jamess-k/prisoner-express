<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Record from './components/Record.vue';
</script>

<template>
  <b-container>
    <b-row>
      <b-col md="3">
        <NavBar />
      </b-col>
      <b-col md="9">
        <RouterView />
      </b-col>
    </b-row>
  </b-container>
</template>

<style>

div.container {
  margin-left: 0px;
  padding-left: 0px;
  margin-right: 0px;
  padding-right: 0px;
  width: 100%;
  min-width: 875px;
}

div.vue-pdf-embed {
  width:100%;
}


h1 {
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
}

main {
padding-left: 15px;
}

div.row {
  width: 100%;
}

div.col {
  width: 300px;
  margin: 10px 0px 10px 0px;
}



</style>
