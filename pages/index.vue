<template>
    <div class="wallpaper-container">
        <NuxtImg class="wallpaper" src="https://iili.io/JjOFKg4.jpg" />
        <div class="banner">
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg" alt="Banner" class="banner-image" />
            <div class="banner-content">
                <h1 style="font-family: 'Open Sans', sans-serif; font-size: 2rem;">Título do Banner</h1>
                <p style="font-family: 'Open Sans', sans-serif; font-size: 1rem;">Descrição do Banner por cima da imagem</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
    left: 50%;
    transform: translateX(-50%);
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 1000;
}
.banner-content h1 {
    font-size: 2rem;
    margin: 0;
}
.banner-content p {
    font-size: 1rem;
}
</style>