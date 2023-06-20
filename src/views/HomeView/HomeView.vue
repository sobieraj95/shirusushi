<template>
  <div class="home-page">
    <Transition name="slide-fade">
      <!-- TODO overlay podjezdzajacy do góry   -->
      <div class="home-page__start-overlay" v-if="state.overlayStatus < 100">
        <img src="../../assets/overlay-icon.png" alt="icon" class="home-page__overlay-icon" />
        <div class="home-page__overlay-progresbar">
          <div class="home-page__overlay-progresbar-status"></div>
        </div>
      </div>
    </Transition>
    <div class="home-page__nav-content">
      <img src="../../assets/overlay-icon.png" alt="icon" class="home-page__header-icon" />
      <div class="home-page__wrapper">
        <div class="home-page__menu">
          <div class="home-page__menu-item" v-for="menuItem in store.menuNav" :key="menuItem.id"
            @click="changeActiveView(menuItem.viewPath)">
            <div class="home-page__menu-header">{{ menuItem.header }}</div>
            <div class="home-page__menu-desc">{{ menuItem.description }}</div>
            <div class="home-page__menu-bottom-box">
              <div class="home-page__menu-bottom-icon" :class="{ 'larger': menuItem.icon === 'handshake' }">
                <font-awesome-icon :icon="menuItem.icon" />
              </div>
              <div class="home-page__menu-bottom-desc" v-html="menuItem.iconDescription" />
            </div>
          </div>
        </div>
      </div>
      <swiper :effect="'fade'" :modules="modules" :slides-per-view="1" class="home-page__background"
        :autoplay="{ delay: 8000 }">
        <swiper-slide>
          <img src="../../assets/menu-backgrounds/menu-1.jpg" alt="menu-background" class="home-page__background-image" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/menu-backgrounds/menu-2.jpg" alt="menu-background" class="home-page__background-image" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/menu-backgrounds/menu-3.jpg" alt="menu-background" class="home-page__background-image" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="home-page__content">
      <RouterView />
    </div>

  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

import { EffectFade, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-fade";
const modules = [EffectFade, Autoplay, A11y,];

import router from '../../router/index';
import { useStore } from '@/store/app';

const store = useStore();

const state = reactive({

  overlayStatus: 0,
})

const changeActiveView = (viewPath: string) => {
  router.push(viewPath);
  setTimeout(() => {
    const element: Element | null = document?.querySelector('.home-page__content');
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 10);
  store.menuNav.forEach((view) => {
    view.viewStatus = view.viewPath === viewPath
  });

};

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
  setTimeout(runOverlay, 100);
  const menuWrapper: Element | null = document?.querySelector('.home-page__wrapper');
  document.addEventListener("mousemove", (event) => {
    // @ts-ignore
    let posCalc = parseInt(event?.clientX / 2)
    // @ts-ignore
    menuWrapper.scrollLeft = posCalc;
  });
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