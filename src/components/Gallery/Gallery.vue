<template>
    <div class="gallery">
        <div class="gallery__content">
            <div class="gallery__header">Galeria</div>
            <div class="gallery__badge">zdjęcia</div>
            <v-row>
                <template v-for="(image, imgIdx) in state.galleryLayout" :key="imgIdx">
                    <v-col :cols="image.cols">
                        <v-img :src="`https://picsum.photos/500/300?image=${image.cols * 20}`" cover height="100%"></v-img>
                    </v-col>
                    <v-col v-if="image.children" cols="6" class="d-flex flex-column">
                        <v-row>
                            <v-col v-for="(children, childIdx) in image.children" :key="childIdx" :cols="children.cols">
                                <v-img :src="`https://picsum.photos/1000/1000?image=${children.cols + childIdx}`" cover
                                    height="100%"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                </template>
            </v-row>
        </div>
        <div class="gallery__background">
            
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
    galleryLayout: [
        { cols: 4 },
        {
            cols: 8,
            children: [{ cols: 12 }, { cols: 12 }],
        },
        { cols: 6 },
        { cols: 3 },
        { cols: 9 },
        { cols: 4 },
        { cols: 8 },
    ]
})
</script>
<style lang="scss">@import "Gallery.scss";</style>