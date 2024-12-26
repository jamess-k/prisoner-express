<script setup>
import Record from '@/components/Record.vue';
</script>

<template>
  <main>
    <b-container>
      <h1>Newsletters</h1>
      <b-row>
      <b-col cols="3" v-for="(newsletter, index) in fixtures.newsletters" :key="index">
        <router-link  :to="`/newsletters/${newsletter.name}`" style="text-decoration: none; color: inherit;">
          <b-card style="border: solid; border-color:lightgray; background-color: #FFFFFF;">
            <Record :name="newsletter.name" :progress="newsletter.progress" :saved="newsletter.saved" :imgLink = "`${baseDir}images/${newsletter.imgLink}`"/>
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
