<template>
  <div class="home-page">
    <SocialsSidebar></SocialsSidebar>
    <Transition name="slide-fade">
      <!-- TODO overlay podjezdzajacy do góry   -->
      <div class="home-page__start-overlay" v-if="state.overlayStatus < 100">
        <img src="../../assets/overlay-icon.png" alt="icon" class="home-page__overlay-icon" />
        <div class="home-page__overlay-progresbar">
          <div class="home-page__overlay-progresbar-status"></div>
        </div>
      </div>
    </Transition>
    <swiper :effect="'fade'" :modules="modules" :slides-per-view="1"
      class="home-page__background" :autoplay="{ delay: 8000 }">
      <swiper-slide v-slot="{ isActive }">
        <img :class="{ 'active': isActive }" src="../../assets/menu-backgrounds/menu-1.jpg" alt="menu-background"
          class="navigation__background-image" />
      </swiper-slide>
      <swiper-slide v-slot="{ isActive }">
        <img :class="{ 'active': isActive }" src="../../assets/menu-backgrounds/menu-2.jpg" alt="menu-background"
          class="navigation__background-image" />
      </swiper-slide>
      <swiper-slide v-slot="{ isActive }">
        <img :class="{ 'active': isActive }" src="../../assets/menu-backgrounds/menu-3.jpg" alt="menu-background"
          class="navigation__background-image" />
      </swiper-slide>
    </swiper>
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import SocialsSidebar from '@/components/_partials/SocialsSidebar/SocialsSidebar.vue'
import { onMounted, reactive } from 'vue';
import { EffectFade, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-fade";

const modules = [EffectFade, Autoplay, A11y,];
const state = reactive({
  overlayStatus: 0,
})

const runOverlay = () => {
  const overlayProgresBar = document?.querySelector('.home-page__overlay-progresbar-status')
  const overlayIcon = document?.querySelector('.home-page__overlay-icon')
  overlayIcon?.classList.add('active')
  const overlayInterval = setInterval(() => {
    state.overlayStatus++;
    //@ts-ignore
    overlayProgresBar.style.width = `${state.overlayStatus}%`
    if (state.overlayStatus === 120) {
      clearInterval(overlayInterval);
    }
  }, 10);
}

onMounted(async () => {
  setTimeout(runOverlay, 200);
})


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
@import "HomeView.scss";
</style>