
<template>
    <div class="menu">
        <HeaderWithBackButton navData="MenuView" />
        <div class="menu__content">
            <div class="menu__content-wrapper">
                <div class="menu__main-content">
                    <!-- <div class="menu__nav-cover"></div> -->
                    <div class="menu__nav">
                        <div v-for="cat in  (state.sortedCategories as any)" :key="cat" class="menu__cat-button"
                            :class="{ 'active': cat.active }">
                            {{ cat.fullName }}
                        </div>
                    </div>
                    <div class="menu__category-box" v-for=" cat  in  (state.sortedCategories as any)" :key="cat"
                        ref="target">
                        <div class="menu__cat-title">{{ cat.fullName }}</div>
                        <div class="menu__cat-desc">{{ cat.description }}</div>
                        <div class="menu__items">
                            <div class="menu__item" v-for=" menu  in  getMenuByCategory(cat.name)" :key="menu.name">
                                <div class="menu__item-desc-block">
                                    <div class="menu__top-box">
                                        <div class="menu__item-name">{{ menu.name }}
                                            <FullscreenModal :fullscreen="false" :itemData="menu" :categoryData="cat">
                                                <div class="menu__item-photo-icon" v-if="menu.imageUrl"><font-awesome-icon
                                                        icon="magnifying-glass" /></div>
                                            </FullscreenModal>

                                        </div>
                                        <div class="menu__item-count">
                                            <Transition name="slide-up-second">
                                                <div class="menu__item-name-count" v-if="findItemWithBigPortion(menu)">{{
                                                    findItemWithBigPortion(menu).count
                                                }}x&nbsp;<span class="menu__item-name-portion">Mała</span></div>
                                            </Transition>
                                            <Transition name="slide-up-second">
                                                <div class="menu__item-name-count"
                                                    v-if="findItemWithBigPortion(menu, true)">{{
                                                        findItemWithBigPortion(menu,
                                                            true).count }}x&nbsp;<span class="menu__item-name-portion">Duża</span>
                                                </div>
                                            </Transition>
                                        </div>

                                    </div>
                                    <div class="menu__item-desc" v-if="menu.description">{{ menu.description }}</div>
                                </div>
                                <div class="menu__item-price-block">
                                    <div class="menu__item-price-box">
                                        <div class="menu__item-price-portion" v-if="menu.priceAdditional">
                                            Mała
                                        </div>
                                        <div class="menu__item-price">
                                            {{ menu.price }} zł
                                        </div>
                                        <div class="menu__price-buttons">
                                            <Transition name="slide-up">
                                                <div class="menu__item-amount-controls" v-if="findItemWithBigPortion(menu)">
                                                    <font-awesome-icon class=" menu__item-amount-plus"
                                                        icon="fa-solid fa-plus" @click="addToNotepad(menu)" />
                                                    <font-awesome-icon class="menu__item-amount-minus"
                                                        icon="fa-solid fa-minus" @click="removeFromNotepad(menu)" />
                                                </div>
                                                <div class="menu__item-add-button" v-else @click="addToNotepad(menu)">
                                                    Dodaj
                                                </div>
                                            </Transition>
                                        </div>

                                    </div>
                                    <div class="menu__item-price-box" v-if="menu.priceAdditional">
                                        <div class="menu__item-price-portion" v-if="menu.priceAdditional">
                                            Duża
                                        </div>
                                        <div class="menu__item-price">
                                            {{ menu.priceAdditional }} zł
                                        </div>
                                        <div class="menu__price-buttons">
                                            <Transition name="slide-up">
                                                <div class="menu__item-amount-controls"
                                                    v-if="findItemWithBigPortion(menu, true)">
                                                    <font-awesome-icon class="menu__item-amount-minus"
                                                        icon="fa-solid fa-minus" @click="removeFromNotepad(menu, true)" />
                                                    <font-awesome-icon class="menu__item-amount-plus"
                                                        icon="fa-solid fa-plus" @click="addToNotepad(menu, true)" />
                                                </div>
                                                <div class="menu__item-add-button" v-else @click="addToNotepad(menu, true)"
                                                    v-if="menu.priceAdditional">
                                                    Dodaj
                                                    <!-- <span v-if="findItemWithBigPortion(menu, true)">Suma: {{
                                                findItemWithBigPortion(menu,
                                                    true).count }}</span> -->
                                                </div>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="menu__item" v-for=" menu  in  getMenuByCategory(cat.name)" :key="menu.name">
                                <div class="menu__item-image">
                                    <img :src="menu.imageUrl" alt="menuItemIcon" />
                                </div>
                                <div class="menu__item-name">{{ menu.name }}</div>
                                <div class="menu__item-separator"></div>
                                <div class="menu__item-desc" v-if="menu.description">{{ menu.description }}</div>
                                <div class="menu__item-price-box">
                                    <div class="menu__item-price-controls"
                                        :class="{ 'additional-price': menu.priceAdditional }">
                                        <div class="menu__item-price-portion" v-if="menu.priceAdditional">
                                            Mniejsza porcja
                                        </div>
                                        <div class="menu__item-price">
                                            {{ menu.price }} zł
                                        </div>
                                        <Transition>
                                            <div class="menu__amount-controls" v-if="findItemWithBigPortion(menu)">
                                                <font-awesome-icon class="menu__item-amount-minus" icon="fa-solid fa-minus"
                                                    @click="removeFromNotepad(menu)" />
                                                <font-awesome-icon class=" menu__item-amount-plus" icon="fa-solid fa-plus"
                                                    @click="addToNotepad(menu)" />
                                            </div>
                                        </Transition>
                                    </div>
                                    <div class="menu__item-price-controls"
                                        :class="{ 'additional-price': menu.priceAdditional }" v-if="menu.priceAdditional">
                                        <div class="menu__item-price-portion" v-if="menu.priceAdditional">
                                            Większa porcja
                                        </div>
                                        <div class="menu__item-price">
                                            {{ menu.priceAdditional }} zł
                                        </div>
                                        <Transition>
                                            <div class="menu__amount-controls" v-if="findItemWithBigPortion(menu, true)">
                                                <font-awesome-icon class="menu__item-amount-minus" icon="fa-solid fa-minus"
                                                    @click="removeFromNotepad(menu, true)" />
                                                <font-awesome-icon class="menu__item-amount-plus" icon="fa-solid fa-plus"
                                                    @click="addToNotepad(menu, true)" />
                                            </div>
                                        </Transition>
                                    </div>
                                </div>
                                <div class="menu__item-add-buttons">
                                    <div class="menu__item-add-button" @click="addToNotepad(menu)">
                                        Dodaj do notatnika
                                        <span v-if="findItemWithBigPortion(menu)">Suma: {{
                                            findItemWithBigPortion(menu).count
                                        }}</span>
                                    </div>
                                    <div class="menu__item-add-button" @click="addToNotepad(menu, true)"
                                        v-if="menu.priceAdditional">
                                        Dodaj do notatnika
                                        <span v-if="findItemWithBigPortion(menu, true)">Suma: {{
                                            findItemWithBigPortion(menu,
                                                true).count }}</span>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="menu__right-bar">
                    <div class="menu__right-bar-content">
                        <div class="menu__restaurant">
                            <div class="menu__restaurant-name">{{ store.restaurantData.name }}</div>
                            <div class="menu__restaurant-address">{{ store.restaurantData.address }}</div>
                            <div class="menu__restaurant-status active" :class="getTextRestaurantStatus.class">
                                {{ getTextRestaurantStatus.status }}</div>
                        </div>
                        <div class="menu__notepad notepad">
                            <div class="notepad__header" :class="{ 'empty': !isNotepadEmpty }">
                                <div class="notepad__header-title">Twój notatnik</div>
                                <v-switch color="#ee344b" class="notepad__header-dropdown"
                                    v-model="state.notepadEatInRestaurant" hide-details
                                    :label="`${state.notepadEatInRestaurant ? 'Na wynos' : 'W restauracji'}`"></v-switch>
                            </div>
                            <div class="notepad__empty" v-if="isNotepadEmpty">
                                <div class="notepad__empty-icon">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1180_10899)">
                                            <path
                                                d="M14.6513 2.34152L13.4093 1.09802C13.0618 0.748749 12.6484 0.471869 12.1932 0.283398C11.738 0.094927 11.2499 -0.00139199 10.7573 1.51991e-05H6C5.0058 0.00120609 4.05267 0.396677 3.34966 1.09968C2.64666 1.80268 2.25119 2.75582 2.25 3.75002V14.25C2.25119 15.2442 2.64666 16.1973 3.34966 16.9004C4.05267 17.6034 5.0058 17.9988 6 18H12C12.9942 17.9988 13.9473 17.6034 14.6503 16.9004C15.3533 16.1973 15.7488 15.2442 15.75 14.25V4.99277C15.7512 4.50015 15.6547 4.01219 15.4661 3.55711C15.2775 3.10203 15.0006 2.68886 14.6513 2.34152ZM13.5908 3.40202C13.6971 3.50801 13.7924 3.62461 13.875 3.75002H12V1.87502C12.1252 1.95851 12.242 2.05395 12.3488 2.16002L13.5908 3.40202ZM14.25 14.25C14.25 14.8468 14.0129 15.4191 13.591 15.841C13.169 16.263 12.5967 16.5 12 16.5H6C5.40326 16.5 4.83097 16.263 4.40901 15.841C3.98705 15.4191 3.75 14.8468 3.75 14.25V3.75002C3.75 3.15328 3.98705 2.58098 4.40901 2.15903C4.83097 1.73707 5.40326 1.50002 6 1.50002H10.5V3.75002C10.5 4.14784 10.658 4.52937 10.9393 4.81068C11.2206 5.09198 11.6022 5.25002 12 5.25002H14.25V14.25ZM12 9.00002C12.1989 9.00002 12.3897 9.07903 12.5303 9.21969C12.671 9.36034 12.75 9.5511 12.75 9.75002C12.75 9.94893 12.671 10.1397 12.5303 10.2803C12.3897 10.421 12.1989 10.5 12 10.5H6C5.80109 10.5 5.61032 10.421 5.46967 10.2803C5.32902 10.1397 5.25 9.94893 5.25 9.75002C5.25 9.5511 5.32902 9.36034 5.46967 9.21969C5.61032 9.07903 5.80109 9.00002 6 9.00002H12ZM12.75 12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5H6C5.80109 13.5 5.61032 13.421 5.46967 13.2803C5.32902 13.1397 5.25 12.9489 5.25 12.75C5.25 12.5511 5.32902 12.3603 5.46967 12.2197C5.61032 12.079 5.80109 12 6 12H12C12.1989 12 12.3897 12.079 12.5303 12.2197C12.671 12.3603 12.75 12.5511 12.75 12.75Z"
                                                fill="red" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1180_10899">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div class="notepad__empty-desc">Notatnik jest pusty. <br /> Dodaj potrawy aby przeliczyć
                                    zamówienie
                                </div>
                            </div>
                            <div class="notepad__items" v-if="!isNotepadEmpty">
                                <div class="notepad__item" v-for="item in state.notepad" :key="item.id">
                                    <div class="notepad__item-row">

                                        <div class="notepad__item-amount">{{ item.count }}x&nbsp;</div>
                                        <div class="notepad__item-name">{{ item.name }}</div>
                                        <div class="notepad__item-price">{{ item.price * item.count }} zł</div>
                                    </div>
                                    <div class="notepad__item-row">
                                        <div class="notepad__item-category">{{ getCategoryFullName(item.category) }}</div>
                                        <div class="notepad__item-portion" v-if="item.priceAdditional">{{ item.isBigPortion
                                            ?
                                            'Duża'
                                            : 'Mała' }}</div>
                                        <div class="notepad__amount-controls">
                                            <font-awesome-icon class="notepad__item-amount-minus" icon="fa-solid fa-minus"
                                                @click="removeFromNotepad(item, item.isBigPortion)" />
                                            <font-awesome-icon class="notepad__item-amount-plus" icon="fa-solid fa-plus"
                                                @click="addToNotepad(item, item.isBigPortion)" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="notepad__summary" v-if="!isNotepadEmpty">
                                <Transition name="scale-down" mode="out-in">
                                    <div class="notepad__sum-box" v-if="state.notepadEatInRestaurant">
                                        <div class="notepad__sum-box-title">Opakowania</div>
                                        <div class="notepad__sum-box-price">{{ getPackagesCost }} zł</div>
                                    </div>
                                </Transition>
                                <div class="notepad__sum-box">
                                    <div class="notepad__sum-box-title">Napiwki</div>
                                    <div class="notepad__sum-box-price">{{ state.notepadTips ? `${state.notepadTips}% =
                                                                            ${((state.notepadTips / 100) * getNotepadItemsCost).toFixed(1)} zł`
                                        : '' }}</div>
                                </div>
                                <div class="notepad__sum-box">
                                    <v-slider v-model="state.notepadTips" :min="0" :max="20" :step="2.5"
                                        thumb-label></v-slider>
                                </div>
                                <div class="notepad__sum-box center">
                                    <!-- <div class="notepad__sum-box-title">RAZEM:</div> -->
                                    <div class="notepad__sum-box-price total">SUMA: {{
                                        getNotepadTotalCostWithPackagesAndTips }}
                                        zł
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useStore } from '@/store/app';
import HeaderWithBackButton from '../_partials/HeaderWithBackButton/HeaderWithBackButton.vue';
import FullscreenModal from '../_partials/FulscreenModal/FulscreenModal.vue';
import { onMounted } from 'vue';
import _ from 'lodash';
const store = useStore();

const target = ref()
const state = reactive({
    notepad: [] as any,
    sortedMenu: [] as any,
    sortedCategories: [] as any,
    notepadEatInRestaurant: false as boolean,
    packageCost: 2 as number,
    notepadTips: 10 as any,
    temp: null as any
})

const getTextRestaurantStatus = computed(() => {
    return store.restaurantData.status ? { status: 'Teraz otwarte', class: 'open' } : { status: 'Zamknięte', class: 'closed' };;
})

const getNotepadItemsCost = computed(() => {
    return state.notepad.map((item: any) => item.count * item.price).reduce((a: any, b: any) => a + b, 0);
})
const getPackagesCost = computed(() => {
    return state.notepadEatInRestaurant ? state.notepad.map((item: any) => item.count * state.packageCost).reduce((a: any, b: any) => a + b, 0) : 0;
})

const getNotepadTotalCostWithPackagesAndTips = computed(() => {
    return getNotepadItemsCost.value + getPackagesCost.value + getNotepadItemsCost.value * (state.notepadTips / 100);
})

const getCategoryFullName = ((cat: string) => {
    //@ts-ignore
    return store.menuAllCategories.find((category: any) => category.name === cat).fullName
})

const getMenuByCategory = ((cat: string) => {
    return store.menuAllItems.filter((item: any) => item.category === cat)
})

const isNotepadEmpty = computed(() => {
    return !state.notepad.length;
})

const findItemWithBigPortion = (menu: any, bigPortion: boolean = false) => {
    return bigPortion ?
        state.notepad.find((item: any) => item.id === menu.id && item.isBigPortion) :
        state.notepad.find((item: any) => item.id === menu.id && !item.isBigPortion);
}

const addToNotepad = (menu: any, bigPortion = false) => {
    // TODO zmienić szukanie itemu w notatniku po nazwie i kategorii na id
    let tmpItem = findItemWithBigPortion(menu, bigPortion);
    if (tmpItem) {
        tmpItem.count++;
    } else {
        state.notepad = [...state.notepad, { ...menu, count: 1, isBigPortion: bigPortion, price: bigPortion ? menu.priceAdditional : menu.price }];
    }
}

const removeFromNotepad = (menu: any, bigPortion = false) => {
    let tmpItem = findItemWithBigPortion(menu, bigPortion);

    if (tmpItem.count > 1)
        tmpItem.count--;
    else if (tmpItem.count === 1)
        state.notepad = state.notepad.filter((item: any) => item.name !== menu.name || item.category !== menu.category || item.isBigPortion !== bigPortion);
}

const onChangeCategory = (entry: any, unobserve: any, cat: any) => {
    console.log(`kategoria aktywna: ${cat}`);
    if (entry.isIntersecting) {
        unobserve()
    }
}

onMounted(() => {
    state.sortedCategories = _.sortBy(store.menuAllCategories, 'order', 'asc');
    state.sortedCategories.forEach((cat: any) => {
        cat.active = false;
    })
    state.sortedCategories[0].active = true;
})
</script>
<style lang="scss">
@import "Menu.scss";
</style>