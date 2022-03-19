<template>

  <div id="container">
      <div class="favorite-comic">
        <RateComic />
      </div>
      <article class="comic-card">
        <img class="comic-image" :src="comic.img" />
        <div class="comic-details">
          <h4 class="comic-date">{{ comic.date }}</h4>
          <h3 class="comic-title">{{ comic.title }}</h3>
          <p class="comic-description">{{ comic.transcript }}</p>
        </div>
      </article>
  </div>

</template>

<script>
import RateComic from "@/components/RateComic.vue";
import { onMounted, reactive } from "vue";
export default {
  name: 'HomeComic',
  components: {
    RateComic
  },
  setup(){

    const comic = reactive({
      title: '',
      img: '',
      date: '',
      transcript: ''
    });
    const urlBase = process.env.VUE_APP_HOST_LOCAL;

    const getRandomId = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const getAnswer = async () => {
      const comicId = getRandomId(1, 100);
      const resp = await fetch(`${urlBase}/api/${comicId}/info.0.json`).then( response => response.json() );
      comic.title = resp.title;
      comic.img = resp.img;
      comic.date = `${resp.year}-${resp.month}-${resp.day}`;
      comic.transcript = resp.transcript;
    }

    onMounted(() => {
      getAnswer();
      console.log(urlBase);
    })

    return {
        comic
    }
  }
}
</script>

<style lang="scss">

$bg: #212121;
$text: #777;
$text-alt: #333;
$black: #121212;
$white: #fff;
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);
$gray-alt-100: #f5f5f5;
$gray-alt-200: #e9e9e9;

* {
  box-sizing: border-box;
  &::before, &::after {
    box-sizing: border-box;
  }
}

body {
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: $text;
  background: $bg;
  font-size: 0.9375rem;
  margin: 0;
  line-height: 1.6;
  align-items: center;
  justify-content: center;
  text-rendering: optimizeLegibility;
}

#container {
  width: 80vw;
  min-width: 350px;
  margin: 2em auto;
  height: 80vh;
  min-height: 13.625rem;
}

.favorite-comic{
  width: 100%;
  background: $gray-alt-200;
  color: $text-alt;
  border-radius: 0.375rem 0.375rem 0 0;
  display: flex;
  justify-content: center;
}

.comic-card {
  display: flex;
  flex-direction: row;
  background: $white;
  box-shadow: 0 0.1875rem 1.5rem $shadow;
  border-radius: 0 0 0.375rem 0.375rem;
  overflow: hidden;
  height: 100%;
}

.comic-image {
  display: block;
  width: 100%;
}

.comic-details {
  padding: 1.5rem;
  background: $gray-alt-100;
}

.comic-date {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid $border;
}

.comic-title {
  font-size: xx-large;
  line-height: 1.4;
  color: $black;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

@media (max-width: 40rem) {
  #container {
    width: 18rem;
    // height: 27.25rem;
  }
  
  .comic-card {
    flex-wrap: wrap;
    height: auto !important;
  }
}

@supports (display: grid) {
  
  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }

  .comic-image {
    height: 100%;
  }
  
  .comic-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  
  @media (max-width: 40rem) {
    .comic-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}
</style>
