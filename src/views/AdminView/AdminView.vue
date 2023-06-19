<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        // items: [
        //     {
        //         title: 'Aktualności',
        //         value: 'news',
        //     },
        //     {
        //         title: 'Menu',
        //         value: 'menu',
        //     },
        //     {
        //         title: 'Daty otwarcia',
        //         value: 'dates',
        //     },
        // ],
    }),
    // components: {
    //     "v-icon": OhVueIcon
    // },

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
<style lang="scss">
@import "AdminView.scss";
</style>
<template>
    <v-card>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
            <v-app-bar color="primary" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>Panel administratora</v-toolbar-title>


                <!-- <v-spacer></v-spacer> -->

                <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn> -->

                <!-- <v-btn variant="text" icon="mdi-filter"></v-btn>

                <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
            </v-app-bar>
            <!-- TODO temporary zeby sie chował -->
            <v-navigation-drawer v-model="drawer" location="left" temporary>
                <v-list>
                    <v-list-item>
                        <router-link to="/admin/news">
                            <v-btn prepend-icon="$vuetify" variant="plain">
                                Aktualności
                            </v-btn>
                        </router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link to="/admin/menu">
                            <v-btn prepend-icon="$vuetify" variant="plain">
                                Menu
                            </v-btn>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main class="admin-view h-screen ">
                <router-view />
            </v-main>
        </v-layout>
    </v-card>
</template>