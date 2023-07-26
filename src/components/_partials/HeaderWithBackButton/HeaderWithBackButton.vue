<template>
    <div class="header-vertical-box">
        <div class="header-vertical-box__back-icon" @click="router.push('/');"></div>
        <div class="header-vertical-box__text">{{ state.navData.header }}</div>
        <div class="header-vertical-box__desc">{{ state.navData.description }}</div>
        <div class="header-vertical-box__icon"><font-awesome-icon :icon="state.navData.icon" /></div>

    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '@/store/app';
import { onMounted, reactive } from 'vue';
const router = useRouter()

const store = useStore();

const props = defineProps<{
    navData: string,
}>();

const state = reactive({
    navData: {} as any
})

onMounted(() => {
    state.navData = store.menuNav.find(el => el.viewName === props.navData)
})
</script>
<style lang="scss">
@import "HeaderWithBackButton.scss";
</style>