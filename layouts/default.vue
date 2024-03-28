<script setup>
    import KeybindLoader from "~/components/Scripts/KeybindLoader.vue"

    useHead({
        link:[
            {
                rel: "preload",
                as: "image",
                href: "https://i.imgur.com/2nuw9DW.png"
            },
            {
                rel: "preload",
                as: "image",
                href: "https://iili.io/JjOFKg4.jpg"
            }
        ]
    })
</script>


<template>
    <KeybindLoader />
    <SearchOverlay />
    <MainHeader />
    <slot />
</template>