
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useStore } from '@/store/app';

const router = useRouter()

const store = useStore();

const changeActiveView = (viewPath: string) => {
    router.push(viewPath);
    // setTimeout(() => {
    //   const element: Element | null = document?.querySelector('.navigation__content');
    //   element?.scrollIntoView({ behavior: "smooth", block: "start" });
    // }, 10);
    store.menuNav.forEach((view) => {
        view.viewStatus = view.viewPath === viewPath
    });
};

onMounted(async () => {
    const menuWrapper: Element | null = document?.querySelector('.navigation__wrapper');
    document.addEventListener("mousemove", (event) => {
        // @ts-ignore
        let posCalc = parseInt(event?.clientX / 2)
        // @ts-ignore
        menuWrapper.scrollLeft = posCalc;
    });
})

</script>

<template>
    <div class="navigation">
        <img src="../../assets/overlay-icon.png" alt="icon" class="navigation__header-icon" />
        <div class="navigation__wrapper">
            <div class="navigation__menu">
                <div class="navigation__menu-item" v-for="menuItem in store.menuNav" :key="menuItem.id"
                    @click="changeActiveView(menuItem.viewPath)">
                    <div class="navigation__menu-header">{{ menuItem.header }}</div>
                    <div class="navigation__menu-desc">{{ menuItem.description }}</div>
                    <div class="navigation__menu-bottom-box">
                        <div class="navigation__menu-bottom-icon" :class="{ 'larger': menuItem.icon === 'handshake' }">
                            <font-awesome-icon :icon="menuItem.icon" />
                        </div>
                        <div class="navigation__menu-bottom-desc" v-html="menuItem.iconDescription" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
@import "Navigation.scss";
</style>
