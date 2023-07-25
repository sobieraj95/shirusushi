<template>
    <div class="news">
        <HeaderVerticalWIthBackButton navData="NewsView" />
        <div class="news__content">
            <div class="news__content-wrapper">
                <ImageWithText />
                <ImageWithText reverse />
                <ImageWithText />
                <ImageWithText reverse />
                <ImageWithText />
                <ImageWithText reverse />
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import HeaderVerticalWIthBackButton from '../_partials/HeaderVerticalWIthBackButton/HeaderVerticalWIthBackButton.vue';
import ImageWithText from '../_partials/ImageWithText/ImageWithText.vue';
// interface IProps {}
// defineProps<IProps>()

// interface MenuItem {
//     id: string,
//     category: string,
//     name: string,
//     desciprtion: string,
//     price: number,
//     unit: string,
// }

// interface IState {
//     menuAllItems: MenuItem[]
// }
// reactive<IState>({
//     menuAllItems,
// })
</script>
<style lang="scss">
@import "News.scss";
</style>