<script setup>
    import KeybindLoader from "~/components/Scripts/KeybindLoader.vue"
</script>


<template>
    <KeybindLoader />
    <SearchOverlay />
    <MainHeader />
    <slot />
</template>