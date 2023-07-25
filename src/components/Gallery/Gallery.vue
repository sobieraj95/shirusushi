<template>
    <div class="gallery">
        <HeaderWithBackButton navData="GalleryView" />
        <div class="gallery__content">
            <div class="gallery__content-wrapper">
                <v-row>
                    <v-col v-for="n in 30" :key="n" class="d-flex gallery__column pa-0" cols="4">
                        <div class="gallery__img-container">
                            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" cover
                                class="gallery__img">
                            </v-img>
                            <font-awesome-icon class="gallery__zoom-icon" :icon="['fas', 'magnifying-glass']"
                                style="color: #ffffff;" />
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import HeaderWithBackButton from '../_partials/HeaderWithBackButton/HeaderWithBackButton.vue';
import { useStore } from '@/store/app';
import { onMounted } from 'vue';

const store = useStore();

// const state = reactive({
//     galleryItems: []
// })

// onMounted(() => {

// })
</script>
<style lang="scss">
@import "Gallery.scss";
</style>