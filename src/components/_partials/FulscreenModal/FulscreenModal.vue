<template>
    <v-row justify="center" style="margin:0">
        <v-dialog class="dialog-menu-item" v-model="state.dialog" :fullscreen="props.fullscreen" :scrim="true"
            transition="dialog-transition">
            <template v-slot:activator="{ props }">
                <div class="dialog-activator-button" v-bind="props">
                    <slot></slot>
                </div>
            </template>
            <div class="dialog-menu-item__container">
                <div class="dialog-menu-item__toolbar">
                    <div class="dialog-menu-item__title">{{ categoryData.fullName }} - {{ itemData.name }}</div>
                    <div class="dialog-menu-item__close-icon" @click="state.dialog = false"><font-awesome-icon
                            icon="xmark" /></div>
                </div>
                <div class="dialog-menu-item__content">
                    <div class="dialog-menu-item__img-container">
                        <img class="dialog-menu-item__img" :src="itemData.imageUrl" />
                    </div>
                </div>
            </div>
        </v-dialog>
    </v-row>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps<{
    fullscreen: boolean,
    itemData: any,
    categoryData: any
}>();

const state = reactive({
    dialog: false as boolean,
    notifications: false as boolean,
    sound: true as boolean,
    widgets: false as boolean
})

</script>
<style lang="scss">
@import "FulscreenModal.scss";
</style>