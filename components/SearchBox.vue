<script>
    export default {
        created(){
            setTimeout(() => {
                document.getElementById("searchInput").focus()
            }, 50);
        },
    }
</script>

<template>
    <div class="search-box">
        <input id="searchInput" type="text" placeholder="Pesquisar...">
    </div>
</template>

<style lang="scss" scoped>

    .search-box {
        background-color: #1b1629;
        z-index: 9050;
        width: 650px;
        height: 250px;
        border-radius: 12px;
        position: absolute;
        top: 32px;
        left: calc(50% - 325px);
        display: flex;
        flex-direction: column;
    }

    input {
            border: 2px #5933ac6e solid;
            background-color: #191327;
            padding: 8px;
            border-radius: 8px;
            margin-top: 16px;
            margin-inline: 18px;
            transition: all 0.3s ease;
            color: aliceblue;
            font-family: "Quicksand";
            

            &:focus {
                border-color: #5a33ac;
                border-width: 2px;
                transition: all 0.3s ease;
            }
        }

</style>