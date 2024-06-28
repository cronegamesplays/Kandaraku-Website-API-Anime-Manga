<script setup>
import { ref, onMounted } from 'vue';

useHead({
  title: "Página Inicial",
  titleTemplate: "%s » Kandaraku v1",
  meta: [
    // Description
    { name: "description", content: "Assista seus animes online gratuitamente ou acesse o banco de dados de diversos animes disponíveis pelo Kandaraku API" },
    // General SEO
    { property: "og:title", content: "Assista seus animes online gratuitamente ou acesse o banco de dados de diversos animes disponíveis pelo Kandaraku API" },
  ],
});

const slides = ref([
  {
    img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg",
    title: "Solo Leveling",
    description: "Descrição do anime.",
  },
  {
    img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142547-OR9X2SuWXN3X.jpg",
    title: "Attack on Titan",
    description: "Descrição do anime.",
  },
  {
    img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142548-ND5S3A2J6l3Q.jpg",
    title: "My Hero Academia",
    description: "Descrição do anime.",
  },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

onMounted(() => {
  setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos
});
</script>

<template>
  <div class="wallpaper-container">
    <NuxtImg class="wallpaper" src="https://iili.io/JjOFKg4.jpg" />
    <div class="banner">
      <NuxtImg :src="slides[currentSlide].img" alt="Banner" class="banner-image" />
      <div class="banner-content">
        <h1 class="banner-title">{{ slides[currentSlide].title }}</h1>
        <p class="banner-description">{{ slides[currentSlide].description }}</p>
      </div>
      <button class="watch-now-button">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/0/375.png" class="play-icon" width="40px" height="40px" alt="Play Icon" />
          Assistir Agora
        </div>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.wallpaper-container {
  position: relative;
}

.wallpaper {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(3px);
}

.banner {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 95%;
  height: 500px;
  border-radius: 40px;
  overflow: hidden;
  z-index: 999;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
}

.banner-content {
  position: absolute;
  top: 65%;
  left: 20px;
  transform: translateY(-50%);
  color: white;
  z-index: 1000;
}

.banner-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 4rem;
  margin: 0;
}

.banner-description {
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.watch-now-button {
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 250px;
  height: 60px;
  background-color: #5E17EB;
  color: #FFFFFF;
  border-radius: 15px;
  border: 4px solid #000000;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
}
</style>
