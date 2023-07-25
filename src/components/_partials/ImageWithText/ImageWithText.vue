<template>
    <div class="image-with-text">
        <div class="image-with-text__img-container" :class="{ 'reverse': reverse }">
            <img class="image-with-text__img" src="https://picsum.photos/1800/1800?random=1" alt="xxx" />
        </div>
        <div class="image-with-text__content">
            <div class="image-with-text__date">{{ state.newsData.data }}</div>
            <div class="image-with-text__title">{{ state.newsData.title }}</div>
            <div class="image-with-text__separator"></div>
            <div class="image-with-text__text">{{ state.newsData.text }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

defineProps<{
    newsData?: any,
    reverse?: boolean,
}>();

const state = reactive({
    newsData: {
        data: '21-05-2022',
        title: 'Wesołych Świąt',
        text: 'Dziękujemy, że jesteście z nami ❤️ Wesołych i pogodnych Świąt życzy cały zespół wszystkich restauracji AZIA Restaurants!',
    }
})
</script>
<style lang="scss">
@import "ImageWithText.scss";
</style>