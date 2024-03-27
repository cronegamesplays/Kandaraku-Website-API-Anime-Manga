<script setup>
    const controller = useControllerStore()

    if (!import.meta.env.SSR) {
        window.addEventListener("keydown",(e)=>{
            const {key, keyCode, metaKey, shiftKey, altKey, ctrlKey} = e; 
            
            if(key === "k" && (ctrlKey || metaKey)){
                e.preventDefault();
                controller.alternateSearch();
            }

            if(key === "Escape"){
                e.preventDefault();
                controller.clear();
            }
        });

    }
</script>

<template>
    <div>
    </div>
</template>~/stores/controller