<script setup>
import Record from '@/components/Record.vue';
</script>

<template>
  <main>
    <b-container>
      <h1>Programs</h1>
      <b-row>
        <b-col cols="3" v-for="(programs, index) in fixtures.programs" :key="index">
          <router-link :to="`/programs/${programs.name}`" style="text-decoration: none; color: inherit;">
            <b-card style="border: solid; border-color:lightgray; background-color: #FFFFFF;">
              <Record :name="programs.name" :progress="programs.progress" :saved="programs.saved" :imgLink = "`${baseDir}images/${programs.imgLink}`"/>
            </b-card>
          </router-link>

        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<style>

div.col-3 {
  margin-bottom: 25px;
  }

</style>
