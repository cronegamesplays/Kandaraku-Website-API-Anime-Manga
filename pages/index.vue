<script>
</script>

<template>
    <NuxtImg
        class="wallpaper"
        src="https://iili.io/JjOFKg4.jpg"
    />
    <div class="banner">
    <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg" alt="Banner" class="banner-image">
  </div>
</template>

<style lang="scss" scoped>
.wallpaper {
    width: 100%;
    /* Adiciona um fundo preto semi-transparente */
    background-color: rgba(0, 0, 0, 0.5);
    /* Aplica um filtro de desfoque */
    filter: blur(3px);
}
.banner {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%; /* largura do banner */
  height: 200px; /* altura do banner */
  border-radius: 40px;
  overflow: hidden;
  z-index: 999;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* mantém a proporção da imagem */
}
</style>