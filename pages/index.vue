<script>

</script>

<template>
    <div class="wallpaper-container">
      <NuxtImg class="wallpaper" src="https://iili.io/JjOFKg4.jpg" />
      <div class="banner">
        <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg" alt="Banner" class="banner-image" />
        <div class="banner-content">
          <h1 class="banner-title">Solo Leveling</h1>
          <p class="banner-description">Descrição do anime</p>
        </div>
        <button class="watch-now-button">
            <font-awesome-icon icon="play-circle" />
            Assistir Agora
        </button>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  // Importe a fonte Open Sans em negrito
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
    left: 50px; /* Alterado para 50px */
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
    left: 20px; /* Alterado para 20px */
    transform: translateY(-50%); /* Alterado para translateY */
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
  }
  
  .watch-now-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
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
    font-weight: bold; /* Aplica a fonte Open Sans em negrito */
  }
  </style>