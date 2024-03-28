<script setup>
    const controller = useControllerStore()
</script>

<template>
    <header>
        <nav>
            <NuxtLink class="page-title" to="/">Kandaraku</NuxtLink>
            <ul>
                <li><NuxtLink to="/animes">Animes</NuxtLink></li>
                <li><NuxtLink to="/mangas">Mangas</NuxtLink></li>
                <li><NuxtLink to="/api">API</NuxtLink></li>
                <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
            </ul>

            <div class="submenu">
                <button class="search-button" @click="controller.alternateSearch()">
                    <Icon name="ion:search" size="24px" />
                    <span>Ctrl + K</span>
                </button>
                <NuxtImg src="/profile.png" width="45px" height="45px"/>
                <Icon name="ion:menu" size="32px" color="white" />
            </div>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
    .page-title {
        font-family:"Quicksand";
        font-weight: 900;
        font-size: 24px;
        letter-spacing: 2px;
        margin: 14px;
        margin-left: 24px;
        transform: translateY(-2px);
    }

    .router-link-exact-active {
        color: #a89eff;
        transition: 0.5s;
    }
    
    .submenu {
        margin-right: 24px;
        display: flex;
        align-items: center;
        gap: 24px;

        img {
            clip-path: circle();
            object-fit: cover;
        }
    }

    nav {
        height: 72px;
        font-family: "Bebas Neue";
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 1px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #0d0a14;
    }

    ul{
        display: flex;
        gap: 46px;
        align-items: center;
    }

    a:hover {
        color: #756eb2;
        transition: 0.5s;
    }

    .search-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 38px;
        width: 420px;
        background-color: #211b32;
        border: none;
        border-radius: 6px;
        cursor: text;

        svg {
            margin-left: 7px;
            color: rgb(143, 139, 147);
        }
        span {
            font-size: 20px;
            margin-right: 12px;
            color: rgb(143, 139, 147);
        }
    }


</style>