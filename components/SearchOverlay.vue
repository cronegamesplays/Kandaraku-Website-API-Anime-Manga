<script setup>
    const controller = useControllerStore()
</script>

<template>
    
    <div class="interaction-detector" v-if="controller.showSearch" @click="controller.alternateSearch()" />
    
    <Transition>
        <BackgroundOverlay v-if="controller.showSearch" />
    </Transition>

    <Transition name="s-box">
        <SearchBox v-if="controller.showSearch" />
    </Transition>

    <Transition name="character">
        <NuxtImg 
            v-if="controller.showSearch"
            class="character"
            src="/lookmin.webp"
            width="540px"
            height="540px"
            fit="inside"
        />
    </Transition>
    
</template>

<style lang="scss" scoped>

    //Transição Background Overlay
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.3s ease;
    }
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    //Transição SearchBox
    .s-box-enter-active,
    .s-box-leave-active {
        transition: all 0.4s ease;
    }
    .s-box-enter-from,
    .s-box-leave-to {
        transform: translateY(50px);
        opacity: 0;
    }

    //Transição Personagem
    .character-enter-active {
        transition: all 0.8s ease-in-out;
    }
    .character-leave-active {
        transition: all 0.4s ease;
    }
    .character-enter-from,
    .character-leave-to {
        transform: translateX(-50px);
        opacity: 0;
    }

    .interaction-detector {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        z-index: 9001;
    }

    .character{
        z-index: 9000;
        position: absolute;
        bottom: 0;
        left: 64px;
    }

</style>