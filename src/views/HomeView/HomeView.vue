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
          <div class="home-page__menu-item" v-for="menuItem in state.menuNav" :key="menuItem.id"
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
// init Swiper:
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import router from '../../router/index';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/store/firebase';
import { useStore } from '@/store/app';
const modules = [EffectFade, Autoplay, A11y,];


const store = useStore();

const state = reactive({
  menuNav: [
    {
      id: 1,
      header: 'O nas',
      description: 'Nasza wizja',
      icon: 'handshake',
      iconDescription: 'Kościuszki 62 <span>Busko-Zdrój</span>',
      viewName: 'AboutView',
      viewPath: '/about',
      viewStatus: false,
    },
    {
      id: 2,
      header: 'Aktualności',
      description: 'z naszej kuchni',
      icon: 'newspaper',
      iconDescription: 'Zobacz <span>co się kroi</span>',
      viewName: 'NewsView',
      viewPath: '/news',
      viewStatus: false,
    },
    {
      id: 3,
      header: 'Menu',
      description: 'Przepyszne dania',
      icon: 'cutlery',
      iconDescription: 'Przyjdź <span>i zjedz</span>',
      viewName: 'MenuView',
      viewPath: '/menu',
      viewStatus: true,
    },
    {
      id: 4,
      header: 'Galeria',
      description: 'Zobacz nasze zdjęcia',
      icon: 'camera-retro',
      iconDescription: 'Zdjęcia <span>zobacz i przyjdź</span>',
      viewName: 'GalleryView',
      viewPath: '/gallery',
      viewStatus: false,
    },
    {
      id: 5,
      header: 'Catering & Eventy',
      description: 'oferta specjalna',
      icon: 'heart',
      iconDescription: 'Dla Ciebie <span>i Twojej firmy</span>',
      viewName: 'CateringView',
      viewPath: '/catering',
      viewStatus: false,
    },
    {
      id: 6,
      header: 'Kontakt',
      description: 'z nami',
      icon: 'phone',
      iconDescription: 'Zadzwoń <span>do nas</span>',
      viewName: 'ContactView',
      viewPath: '/contact',
      viewStatus: false,
    },
  ],
  menuBackgrounds: [
    {
      id: 1,
      imgUrl: `../../assets/menu-backgrounds/menu-1.jpg`
    },
    {
      id: 2,
      imgUrl: `../../assets/menu-backgrounds/menu-2.jpg`
    },
    {
      id: 3,
      imgUrl: `../../assets/menu-backgrounds/menu-3.jpg`
    },
  ],
  overlayStatus: 0,
})

const changeActiveView = (viewPath: string) => {
  router.push(viewPath);
  setTimeout(() => {
    const element: Element | null = document?.querySelector('.home-page__content');
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 10);
  state.menuNav.forEach((view) => {
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



const readAllData = () => {
  onSnapshot(query(collection(db, "menu"), orderBy('category', 'asc')), (querySnapshot) => {
    let fbMenu: any = [];
    querySnapshot.forEach((doc) => {
      const menu = {
        id: doc.id,
        category: doc.data().category,
        name: doc.data().name,
        description: doc.data().description,
        price: doc.data().price,
        unit: doc.data().unit,
      };
      fbMenu.push(menu);
    });
    store.allMenu = fbMenu;
  });
}

const readAllCategories = () => {
  onSnapshot(query(collection(db, "categories"), orderBy('id', 'asc')), (querySnapshot) => {
    let fbCategories: any = [];
    querySnapshot.forEach((doc) => {
      const cat = {
        id: doc.id,
        name: doc.data().name,
        fullName: doc.data().fullName,
      };
      fbCategories.push(cat);
    });
    store.allMenu = fbCategories;
  });
}

onMounted(() => {
  readAllData();
  readAllCategories();
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