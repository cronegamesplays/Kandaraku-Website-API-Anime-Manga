<script setup>

useHead({
  title: "Página Inicial",
  titleTemplate: "%s - Kandaraku v1-a",
  meta: [
    { name: "description", content: "Assista seus animes online gratuitamente ou acesse o banco de dados de diversos animes disponiveis pelo Kandaraku API" },
    // General SEO
    { property: "og:title", content: "Assista seus animes online gratuitamente ou acesse o banco de dados de diversos animes disponiveis pelo Kandaraku API" },
  ],
})

</script>

<template>
    <div class="wallpaper-container">
  <NuxtImg class="wallpaper" src="https://iili.io/JjOFKg4.jpg" />
  <div class="banner">
    <NuxtImg src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg" alt="Banner" class="banner-image" />
    <div class="banner-content">
      <h1 class="banner-title">Solo Leveling</h1>
      <p class="banner-description">Descrição do anime.</p>
    </div>
    <button class="watch-now-button">
      <div>
        <img src="" class="play-icon" width="40px" height="40px" color= "white">
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