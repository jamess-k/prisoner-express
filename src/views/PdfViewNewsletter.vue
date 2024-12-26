<script setup>
import VuePdfEmbed from 'vue-pdf-embed'

// essential styles
import 'vue-pdf-embed/dist/style/index.css'

// optional styles
import 'vue-pdf-embed/dist/style/annotationLayer.css'
import 'vue-pdf-embed/dist/style/textLayer.css'


</script>

<script>
export default {
    methods: {
      Back() {
        this.$router.go(-1)
      }
    }
  }
</script>
      <!-- Back Button Reference: https://stackoverflow.com/questions/40182536/vue-js-routing-with-back-button -->


<template>
  <b-container>
      <b-button @click="Back" variant="warning">← Back</b-button>
      <!-- Reference for Icons: W3 Schools HTML Symbols: https://www.w3schools.com/charsets/ref_emoji_symbols.asp -->
   <h5>Reading Progress: {{(fixtures.newsletters.find(prog => prog.name === $route.params.newsletter_key)).progress || 0}}%</h5>
  <b-progress :value="(fixtures.newsletters.find(prog => prog.name === $route.params.newsletter_key)).progress || 0"></b-progress>
   <VuePdfEmbed annotation-layer text-layer :source="`${baseDir}pdfs/${$route.params.newsletter_key}.pdf`" />
  </b-container>
</template>

<!-- Pdf Library Source: https://www.npmjs.com/package/tar-vue-pdf-embed -->

<style>
h5 {
   margin-top: 30px;
   margin-bottom: 10px;
   font-weight: bold;
}

div.col-md-9 {
        padding-top: 20px;
    }

div.textLayer {
  width: 100%

}
</style>
