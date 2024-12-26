<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    required: false
  },
  saved: {
    type: Boolean,
    required: false
  },
  imgLink: {
    type: String,
    required: false
  }
})


</script>

<template>
    <div class="record">
        <img class="card-img-top" :src="imgLink" alt="Card image cap">
        <h6> {{ name }}</h6>

        <!-- <img :src= alt="preview image" class="img-fluid"> -->
        <b-progress :value="progress"  style="height: 5px;"></b-progress>
        <p class="small-progress" style="display: flex; justify-content: space-between;">
        <span>{{ progress }}%</span>
        <span v-if="saved === 'True'">★</span>
        <span v-else>☆</span>
        </p>
        <!-- Reference for Icons: W3 Schools HTML Symbols: https://www.w3schools.com/charsets/ref_emoji_symbols.asp -->

    </div>
</template>

<style>


h6 {
  text-align: center;
  color: gray;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bolder;
  font-size: 20px;
}

/* Reference for Truncating Text: https://www.freecodecamp.org/news/how-to-truncate-text-with-css-javascript/#:~:text=The%20CSS%20property%20you%20use,wrapping%20to%20the%20next%20line. */

img {
  margin-bottom: 10px;
  }


p.small-progress {
  margin-top: 5px;
  margin-bottom: 0px;

  }

</style>
