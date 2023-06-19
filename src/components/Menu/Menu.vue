
<template>
    <div class="menu">
        <div class="menu__content">
            <div class="menu__nav">
                <div class="menu__cat-button">Sashimi</div>
                <div class="menu__cat-button">Sashimi</div>
                <div class="menu__cat-button">Sashimi</div>
                <div class="menu__cat-button">Sashimi</div>
                <div class="menu__cat-button">Sashimi</div>
                <div class="menu__cat-button">Sashimi</div>
                <div class="menu__cat-button">Sashimi</div>
            </div>
            <div class="menu__category-box">
                <div class="menu__cat-title">Najczęściej zamawiane</div>
                <div class="menu__items">
                    <div class="menu__item">
                        <div class="menu__item-image"></div>
                        <div class="menu__item-name"></div>
                        <div class="menu__item-separator"></div>
                        <div class="menu__item-desc"></div>
                        <div class="menu__item-price-box">
                            <div class="menu__item-price-controls">
                                <div class="menu__item-price"></div>
                                <div class="notepad__item-amount-minus">
                                    <font-awesome-icon icon="fa-solid fa-minus" />
                                </div>
                                <div class="notepad__item-amount-plus">
                                    <font-awesome-icon icon="fa-solid fa-plus" />
                                </div>
                            </div>
                        </div>
                        <div class="menu__item-add-button">Dodaj<span>9</span></div>
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
                    <div class="notepad__header" :class="{ 'empty': state.isEmpty }">
                        <div class="notepad__header-title">Twój notatnik</div>
                        <div class="notepad__header-dropdown">Wynos/Na miejscu</div>
                    </div>
                </div>
                <div class="notepad__empty" v-if="state.isEmpty">
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
import { reactive } from 'vue';
import { useStore } from '@/store/app';
import { onMounted } from 'vue';
import { count } from 'console';

const store = useStore();

const state = reactive({
    isEmpty: false,
})

onMounted(() => {
    //@ts-ignore
    // store.allMenu.forEach((item) => state.categories.push(item.category))
})
</script>
<style lang="scss">
@import "Menu.scss";
</style>