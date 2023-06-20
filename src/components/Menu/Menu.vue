
<template>
    <div class="menu">
        <div class="menu__content">
            <div class="menu__nav">
                <div v-for="cat in  (state.sortedCategories as any)" :key="cat" class="menu__cat-button"
                    :class="{ 'active': cat.active }">
                    {{ cat.fullName }}
                </div>
            </div>
            <div class="menu__category-box" v-for=" cat  in  (state.sortedCategories as any)" :key="cat">
                <div class="menu__cat-title">{{ cat.fullName }}</div>
                <div class="menu__items">
                    <div class="menu__item" v-for=" menu  in  getMenuByCategory(cat.name)" :key="menu.name">
                        <div class="menu__item-image">
                            <!-- TODO img url -->
                            <img src="../../assets/product-blank.png" alt="menuItemIcon" />
                        </div>
                        <div class="menu__item-name">{{ menu.name }}</div>
                        <div class="menu__item-separator"></div>
                        <div class="menu__item-desc" v-if="menu.description">{{ menu.description }}</div>
                        <div class="menu__item-price-box">
                            <div class="menu__item-price-controls" :class="{ 'additional-price': menu.priceAdditional }">
                                <div class="menu__item-price-portion" v-if="menu.priceAdditional">
                                    Mniejsza porcja
                                </div>
                                <div class="menu__item-price">
                                    {{ menu.price }} zł
                                </div>
                                <div class="menu__amount-controls" v-if="!isNotepadEmpty">
                                    <font-awesome-icon class=" menu__item-amount-plus" icon="fa-solid fa-plus"
                                        @click="addToNotepad(menu)" />
                                    <font-awesome-icon class="menu__item-amount-minus" icon="fa-solid fa-minus"
                                        @click="removeFromNotepad(menu)" />
                                </div>

                            </div>
                            <div class="menu__item-price-controls" v-if="menu.priceAdditional"
                                :class="{ 'additional-price': menu.priceAdditional }">
                                <div class="menu__item-price-portion">
                                    Większa porcja
                                </div>
                                <div class="menu__item-price">
                                    {{ menu.priceAdditional }} zł
                                </div>
                                <div class="menu__amount-controls" v-if="!isNotepadEmpty">
                                    <font-awesome-icon class="menu__item-amount-plus" icon="fa-solid fa-plus"
                                        @click="addToNotepad(menu, true)" />
                                    <font-awesome-icon class="menu__item-amount-minus" icon="fa-solid fa-minus"
                                        @click="removeFromNotepad(menu, true)" />
                                </div>
                            </div>
                        </div>
                        <div class="menu__item-add-button" @click="addToNotepad(menu)">
                            Zamów<span>10</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu__right-bar">
            <div class="menu__restaurant-status">
                <div class="menu__restaurant-data">
                    <div class="menu__restaurant-name"></div>
                    <div class="menu__restaurant-adress"></div>
                </div>
                <div class="menu__status">Teraz otwarte</div>
            </div>
            <div class="menu__notepad notepad">
                <div class="notepad">
                    <div class="notepad__header" :class="{ 'empty': isNotepadEmpty }">
                        <div class="notepad__header-title">Twój notatnik</div>
                        <div class="notepad__header-dropdown">Wynos/Na miejscu</div>
                    </div>
                </div>
                <div class="notepad__empty" v-if="isNotepadEmpty">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    <div class="notepad__empty-desc">Schowek jest pusty. Dodaj potrawy aby przeliczyć zamówienie</div>
                </div>
                <!-- <div class="notepad__items" v-else>
                    <div class="notepad__item" v-for="item in state.items" :key="item.id">
                        <div class="notepad__item-top">
                            <div class="notepad__item-amount">{{ item.amount }} x</div>
                            <div class="notepad__item-name">{{ item.name }}</div>
                            <div class="notepad__item-price">{{ item.price }} zł</div>
                            <div class="notepad__item-bottom">
                                <div class="notepad__item-amount-minus">
                                    <font-awesome-icon icon="fa-solid fa-minus" />
                                </div>
                                <div class="notepad__item-amount-plus">
                                    <font-awesome-icon icon="fa-solid fa-plus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="notepad__summary">
                    <div class="notepad__sum-box">
                        <div class="notepad__sum-box-title">Opakowania</div>
                        <div class="notepad__sum-box-price">6 zł</div>
                    </div>
                    <div class="notepad__sum-box">
                        <div class="notepad__sum-box-title">Napiwki</div>
                        <div class="notepad__sum-box-price">5% = 12 zł</div>
                    </div>
                    <div class="notepad__sum-box">
                        SUWACZEK TUTAJ
                    </div>
                    <div class="notepad__sum-box-center">
                        <div class="notepad__sum-box-title">RAZEM</div>
                        <div class="notepad__sum-box-price">152 zł</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { useStore } from '@/store/app';
import { onMounted } from 'vue';
import _ from 'lodash';
const store = useStore();

const state = reactive({
    notepad: [] as any,
    sortedMenu: [] as any,
    sortedCategories: [] as any,
})

const getMenuByCategory = ((cat: string) => {
    return store.menuAllItems.filter((item: any) => item.category === cat)
})

const isNotepadEmpty = computed(() => {
    return !state.notepad.length;
})

// const findItemWithOrWitoutBigPortion = (menu: any, bigPortion = false) => {
//     return bigPortion ?
//         state.notepad.find((item: any) => item.name === menu.name && item.category === menu.category && item.isBigPortion) :
//         state.notepad.find((item: any) => item.name === menu.name && item.category === menu.category && !item.isBigPortion);
// }

const addToNotepad = (menu: any, bigPortion = false) => {
    // TODO zmienić szukanie itemu w notatniku po nazwie i kategorii na id
    let tmpItem = bigPortion ?
        state.notepad.find((item: any) => item.name === menu.name && item.category === menu.category && item.isBigPortion) :
        state.notepad.find((item: any) => item.name === menu.name && item.category === menu.category && !item.isBigPortion);
    if (tmpItem) {
        tmpItem.count++;
    } else {
        state.notepad = [...state.notepad, { ...menu, count: 1, isBigPortion: bigPortion, price: bigPortion ? menu.priceAdditional : menu.price }];
    }
    console.log('dodaje do notatnika');
}

const removeFromNotepad = (menu: any, bigPortion = false) => {
    console.log('odejmuje z notatnika');
    let tmpItem = bigPortion ?
        state.notepad.find((item: any) => item.name === menu.name && item.category === menu.category && item.isBigPortion) :
        state.notepad.find((item: any) => item.name === menu.name && item.category === menu.category && !item.isBigPortion);
    if (tmpItem) {
        if (tmpItem.count > 1) {
            tmpItem.count--;
        } else {
            state.notepad = state.notepad.filter((item: any) => item.name !== menu.name && item.category !== menu.category);
        }
    }
}


const generateNumber = () => {
    return `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/300/300`;
}

onMounted(() => {
    state.sortedCategories = _.sortBy(store.menuAllCategories, 'order', 'asc');
    state.sortedCategories.forEach((cat: any) => {
        cat.active = false;
    })
    state.sortedCategories[0].active = true;
    // store.menuAllItems.forEach((menuItem: any) => {
    //     menuItem.categoryData = store.menuAllCategories.find((cat: any) => cat.name === menuItem.category)
    //     console.log(`${menuItem.name} - ${menuItem.categoryData.order}`);
    // })
    // state.sortedMenu = _.sortBy(store.menuAllItems, 'categoryData.order', 'asc');

})
</script>
<style lang="scss">
@import "Menu.scss";
</style>